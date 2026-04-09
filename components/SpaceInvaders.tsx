"use client"

import React, { useRef, useEffect, useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Target, Play, RotateCcw } from 'lucide-react'

interface SpaceInvadersProps {
  lang: 'en' | 'es'
}

// Retro Sound Engine using Web Audio API
class RetroAudio {
  ctx: AudioContext | null = null

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
  }

  playFreq(freq: number, type: OscillatorType, duration: number, volume: number = 0.1) {
    if (!this.ctx) return
    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()

    osc.type = type
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime)
    osc.connect(gain)
    gain.connect(this.ctx.destination)

    gain.gain.setValueAtTime(volume, this.ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration)

    osc.start()
    osc.stop(this.ctx.currentTime + duration)
  }

  shoot() { this.playFreq(440, 'square', 0.1) }
  explosion() { this.playFreq(100, 'sawtooth', 0.3, 0.2) }
  move() { this.playFreq(150, 'triangle', 0.05, 0.05) }
}

const GAME_WIDTH = 400
const GAME_HEIGHT = 500

export const SpaceInvaders: React.FC<SpaceInvadersProps> = ({ lang }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameOver'>('idle')
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const audio = useRef<RetroAudio>(new RetroAudio())

  // Game Logic State Refs
  const playerX = useRef(GAME_WIDTH / 2 - 15)
  const bullets = useRef<{ x: number, y: number }[]>([])
  const aliens = useRef<{ x: number, y: number, alive: boolean }[]>([])
  const alienDirection = useRef(1)
  const alienSpeed = useRef(0.5)
  const keys = useRef<{ [key: string]: boolean }>({})
  const lastTime = useRef(0)

  const initAliens = useCallback(() => {
    const newAliens = []
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 8; col++) {
        newAliens.push({
          x: col * 40 + 50,
          y: row * 30 + 50,
          alive: true
        })
      }
    }
    aliens.current = newAliens
  }, [])

  useEffect(() => {
    const savedHighScore = localStorage.getItem('space-invaders-highscore')
    if (savedHighScore) setHighScore(parseInt(savedHighScore))
    initAliens()
  }, [initAliens])

  const startGame = () => {
    audio.current.init()
    setScore(0)
    setGameState('playing')
    playerX.current = GAME_WIDTH / 2 - 15
    bullets.current = []
    alienSpeed.current = 0.5
    initAliens()
    lastTime.current = performance.now()
  }

  const handleShoot = useCallback(() => {
    if (gameState !== 'playing') return
    if (bullets.current.length < 3) {
      bullets.current.push({ x: playerX.current + 15, y: GAME_HEIGHT - 30 })
      audio.current.shoot()
    }
  }, [gameState])

  // Input Handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keys.current[e.code] = true
      if (e.code === 'Space') {
        e.preventDefault()
        handleShoot()
      }
    }
    const handleKeyUp = (e: KeyboardEvent) => keys.current[e.code] = false

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleShoot])

  // Game Loop
  useEffect(() => {
    if (gameState !== 'playing') return

    let animationId: number

    const update = (time: number) => {
      const dt = time - lastTime.current
      lastTime.current = time

      const ctx = canvasRef.current?.getContext('2d')
      if (!ctx) return

      // Player Movement
      if (keys.current['ArrowLeft'] || keys.current['KeyA']) playerX.current -= 0.2 * dt
      if (keys.current['ArrowRight'] || keys.current['KeyD']) playerX.current += 0.2 * dt
      playerX.current = Math.max(0, Math.min(GAME_WIDTH - 30, playerX.current))

      // Bullets
      bullets.current = bullets.current.filter(b => b.y > 0)
      bullets.current.forEach(b => b.y -= 0.3 * dt)

      // Aliens Movement
      let hitWall = false
      aliens.current.forEach(a => {
        if (!a.alive) return
        a.x += alienDirection.current * alienSpeed.current * (dt/16)
        if (a.x > GAME_WIDTH - 30 || a.x < 10) hitWall = true
      })

      if (hitWall) {
        alienDirection.current *= -1
        aliens.current.forEach(a => a.y += 10)
        alienSpeed.current += 0.05 // Progression
        audio.current.move()
      }

      // Collisions
      bullets.current.forEach((b, bi) => {
        aliens.current.forEach(a => {
          if (a.alive && b.x > a.x && b.x < a.x + 25 && b.y > a.y && b.y < a.y + 20) {
            a.alive = false
            bullets.current.splice(bi, 1)
            setScore(s => {
              const newScore = s + 10
              if (newScore > highScore) {
                setHighScore(newScore)
                localStorage.setItem('space-invaders-highscore', newScore.toString())
              }
              return newScore
            })
            audio.current.explosion()
          }
        })
      })

      // Game Over Check
      const allDead = aliens.current.every(a => !a.alive)
      const reachedBottom = aliens.current.some(a => a.alive && a.y > GAME_HEIGHT - 60)
      if (allDead) {
        alienSpeed.current += 0.2 // Stack difficulty for next wave
        initAliens() // Next Wave
      } else if (reachedBottom) {
        setGameState('gameOver')
      }

      // Render
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)

      // Draw Player
      ctx.fillStyle = '#22C55E'
      ctx.fillRect(playerX.current, GAME_HEIGHT - 30, 30, 15)
      ctx.fillRect(playerX.current + 12, GAME_HEIGHT - 40, 6, 10)

      // Draw Bullets
      ctx.fillStyle = '#4ADE80'
      bullets.current.forEach(b => ctx.fillRect(b.x - 1, b.y, 2, 8))

      // Draw Aliens
      aliens.current.forEach(a => {
        if (a.alive) {
          ctx.fillRect(a.x, a.y, 25, 15)
          ctx.clearRect(a.x + 5, a.y + 4, 3, 3)
          ctx.clearRect(a.x + 17, a.y + 4, 3, 3)
        }
      })

      animationId = requestAnimationFrame(update)
    }

    animationId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(animationId)
  }, [gameState, highScore, initAliens])

  const t = {
    en: {
      score: "Score",
      highScore: "High",
      start: "START MISSION",
      restart: "RETRY",
      gameOver: "GAME OVER",
      instructions: "ARROWS/WASD to move • SPACE to shoot"
    },
    es: {
      score: "Puntos",
      highScore: "Max",
      start: "INICIAR MISIÓN",
      restart: "REINTENTAR",
      gameOver: "FIN DEL JUEGO",
      instructions: "FLECHAS/WASD para mover • ESPACIO para disparar"
    }
  }[lang]

  return (
    <div className="flex flex-col items-center space-y-4 font-mono select-none">
      <div className="flex justify-between w-full max-w-[400px] text-green-500 text-sm border-b border-green-500/20 pb-2">
        <span>{t.score}: {score.toString().padStart(4, '0')}</span>
        <span>{t.highScore}: {highScore.toString().padStart(4, '0')}</span>
      </div>

      <div className="relative border-4 border-green-500/30 bg-black group overflow-hidden">
        <canvas 
          ref={canvasRef} 
          width={GAME_WIDTH} 
          height={GAME_HEIGHT}
          className="w-full h-auto cursor-crosshair"
        />

        {gameState !== 'playing' && (
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-6 text-center">
            {gameState === 'gameOver' && (
              <h2 className="text-red-500 text-4xl mb-6 animate-pulse">{t.gameOver}</h2>
            )}
            <Button 
              onClick={startGame}
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black text-lg h-16 px-8 transition-all active:scale-95"
            >
              {gameState === 'idle' ? <Play className="mr-2" /> : <RotateCcw className="mr-2" />}
              {gameState === 'idle' ? t.start : t.restart}
            </Button>
            <p className="mt-8 text-green-500/60 text-xs tracking-widest hidden sm:block">
              {t.instructions}
            </p>
          </div>
        )}
      </div>

      {/* Mobile Controls */}
      <div className="sm:hidden grid grid-cols-3 gap-4 w-full max-w-[400px]">
        <Button 
          variant="outline"
          className="h-16 border-green-500/40 text-green-500 active:bg-green-500/20"
          onTouchStart={() => keys.current['ArrowLeft'] = true}
          onTouchEnd={() => keys.current['ArrowLeft'] = false}
        >
          <ArrowLeft className="w-8 h-8" />
        </Button>
        <Button 
          variant="outline"
          className="h-16 border-green-500/40 text-green-500 active:bg-green-500/20"
          onClick={handleShoot}
        >
          <Target className="w-8 h-8" />
        </Button>
        <Button 
          variant="outline"
          className="h-16 border-green-500/40 text-green-500 active:bg-green-500/20"
          onTouchStart={() => keys.current['ArrowRight'] = true}
          onTouchEnd={() => keys.current['ArrowRight'] = false}
        >
          <ArrowRight className="w-8 h-8" />
        </Button>
      </div>
    </div>
  )
}
