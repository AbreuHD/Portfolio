import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react';
import { useCallback, useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import { useResizeObserver } from '@wojtekmaj/react-hooks';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
    fileUrl: string;
    downloadUri: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl, downloadUri }) => {
    const [containerWidth, setContainerWidth] = useState<number>();
    const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);

    const maxWidth = 825;
    const resizeObserverOptions = {};

    const onResize = useCallback<ResizeObserverCallback>((entries) => {
        const [entry] = entries;

        if (entry) {
            setContainerWidth(entry.contentRect.width);
        }
    }, []);

    useResizeObserver(containerRef, resizeObserverOptions, onResize);

    return (
        <div className="flex flex-col min-h-screen" ref={setContainerRef}>
            {/* Botón alineado a la derecha */}
            <div className="w-full flex justify-end p-4">
                <Button
                    variant="outline"
                    size="sm"
                    className="text-green-500 border-green-500 hover:bg-green-500/20"
                >
                    <a href={downloadUri} className="flex items-center" download>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                    </a>
                </Button>
            </div>

            <Document file={fileUrl} >

                <Page
                    pageNumber={1}
                    renderMode="canvas"
                    width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                />
                <Page
                    pageNumber={2}
                    renderMode="canvas"
                    width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                />

            </Document>
        </div>
    );
};

export default PdfViewer;
