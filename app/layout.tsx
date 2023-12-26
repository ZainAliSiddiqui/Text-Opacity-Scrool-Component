import "@styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ weight: "400", subsets: ["latin"] });
export const metadata: Metadata = {
	title: "Text Opacity Scroll Component",
	description: "Text Opacity Scroll Component",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
