import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VANGUARD LEGAL | Elite Legal Counsel",
  description: "Defending your legacy with precision and power.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans antialiased bg-zinc-950 text-zinc-100 selection:bg-blue-600/30 selection:text-blue-200">
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
