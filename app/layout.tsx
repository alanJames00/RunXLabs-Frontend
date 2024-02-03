"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilRoot } from "recoil";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<title>runXlabs</title>
				<RecoilRoot>
				<body className={inter.className}>{children}</body>
				</RecoilRoot>
		</html>
	);
}
