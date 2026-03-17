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
      <head>
        <script
          defer
          src="https://umami.kodexado.com/script.js"
          data-website-id="7bba2745-62ef-41db-8ad3-175773a587f4"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
