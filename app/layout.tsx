import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AbreuHD",
  description: "Jefferson Abreu | Portfolio",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
