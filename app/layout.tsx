import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilRoot } from 'recoil';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "runXlabs",
  description: "Open source universal code runner for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RecoilRoot>
        <body className={inter.className}>{children}</body>
      </RecoilRoot>
    </html>
  );
}
