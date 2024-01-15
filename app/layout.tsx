import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({ subsets: ["latin"] });

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
      <body className={notoSerif.className}>{children}</body>
    </html>
  );
}
