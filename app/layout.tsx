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
      <body className="relative z-0 flex h-full flex-col bg-zinc-50">
        <div className="fixed inset-0 -z-10 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100" />
          </div>
        </div>
        <div className="z-10 mx-auto max-w-7xl lg:px-8">{children}</div>
      </body>
    </html>
  );
}
