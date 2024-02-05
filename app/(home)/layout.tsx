// import Footer from "@/components/shared/Footer";
// import Header from "@/components/shared/Header";
// import styles from '../customStyles/scrollbar.module.css'

// export default function RootLayout({
// 	children,
// }: {
// 	children: React.ReactNode;
// }) {
// 	return (
// 		<div className={`${styles.allScroll} flex h-screen flex-col bg-[#F3F3F4`} >
// 			<Header/>
// 			<main className=" flex-1 ">{children}</main>
// 			<Footer />
// 		</div>
// 	);
// }

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import LowerFooter from "@/components/shared/LowerFooter";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div lang="en">
			<div>
				<Header />
				<div className=" ">{children}</div>
				<Footer />
				<div className="bg-gray-100">
				<LowerFooter />
				</div>
			</div>
		</div>
	);
}
