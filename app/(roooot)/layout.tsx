import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import LowerFooter from "@/components/shared/LowerFooter";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div lang="en" data-theme="light">
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
