import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HPCAN LAB",
  description: "High Performance Computing Architectures and Networks",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
}
