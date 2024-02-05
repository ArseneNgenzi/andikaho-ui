import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-nunito",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
	icons: "/assets/images/logo.svg",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" data-theme="light">
			<body className={`${poppins.className} max-w-[2000px] mx-auto`} >
				{/* <Header /> */}
				<div className=" ">
        {children}
        </div>
				{/* <Footer /> */}
			</body>
		</html>
	);
}
