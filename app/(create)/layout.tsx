// import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import LowerFooter from "@/components/shared/LowerFooter";
import Header2 from "@/components/shared/Header2";

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div lang="en" >
			<div>
				<Header2 />
				<div className=" ">{children}</div>
				{/* <Footer /> */}
				<div className="">
				<LowerFooter />
				</div>
			</div>
		</div>
	);
}