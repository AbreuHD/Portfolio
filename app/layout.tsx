import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://abreuhd.com'),
  title: {
    default: "Jefferson Abreu Martinez | AbreuHD | Desarrollador de Software",
    template: "%s | AbreuHD"
  },
  description: "Portafolio de Jefferson Abreu Martinez (AbreuHD), Desarrollador de Software con experiencia en Backend (.NET, Python, Java) Frontend (React, Angular, Ionic) y Web Scraping.",
  keywords: [
    "AbreuHD", "Jefferson Abreu", "Jefferson Abreu Martinez", 
    "Desarrollador de Software", "Software Developer", "Full Stack Developer", 
    "Backend Developer", "Frontend Developer", "Web Scraping", 
    "C#", ".NET", "Python", "Java", "Kotlin", "Node.js", 
    "React", "Next.js", "Angular", "Ionic", "Swagger", "SOLID", 
    "Portafolio", "Portfolio"
  ],
  authors: [{ name: "Jefferson Abreu Martinez", url: "https://abreuhd.com" }],
  creator: "Jefferson Abreu Martinez",
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    url: "https://abreuhd.com",
    title: "Jefferson Abreu Martinez | AbreuHD | Desarrollador de Software",
    description: "Portafolio retro de Jefferson Abreu Martinez (AbreuHD), Especialista en Backend (.NET, Python, Java), Frontend (React, Angular) y Web Scraping.",
    siteName: "AbreuHD",
    images: [
      {
        url: "/favicon.svg",
        width: 800,
        height: 600,
        alt: "AbreuHD Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jefferson Abreu Martinez | AbreuHD | Desarrollador de Software",
    description: "Portafolio retro de Jefferson Abreu Martinez (AbreuHD), Especialista en Backend (.NET, Python, Java), Frontend (React, Angular) y Web Scraping.",
    images: ["/favicon.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.kodexado.com/script.js"
          data-website-id="7bba2745-62ef-41db-8ad3-175773a587f4"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jefferson Abreu Martinez",
              "alternateName": "AbreuHD",
              "url": "https://abreuhd.com",
              "image": "https://abreuhd.com/favicon.svg",
              "jobTitle": "Software Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance / Independent"
              },
              "sameAs": [
                "https://github.com/AbreuHD",
                "https://linkedin.com/in/abreuhd"
              ],
              "knowsAbout": [
                "Software Development", "Backend Development", "Frontend Development", 
                "Web Scraping", "C#", ".NET", "Python", "Java", "Kotlin", "Node.js", 
                "React", "Next.js", "Angular", "Ionic", "Swagger", "SOLID"
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
