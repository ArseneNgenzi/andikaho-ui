"use client";
// import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import LowerFooter from "@/components/shared/LowerFooter";
import Header2 from "@/components/shared/Header2";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentRoute = usePathname();

	return (
		<div lang="en">
			<div>
				<Header2 />
				<div className=" bg-white flex items-center pl-32 text-grayMain text-sm shadow-md ">
					<Link
						href={"/dashboard"}
						className={`${
							currentRoute == "/dashboard"
								? "text-main  border-main"
								: "border-transparent"
						} p-4 flex border-b-4 `}
					>
						<p>Dashboard</p>
						<span className=" text-[9px] ml-1 bg-main rounded-full flex justify-center items-center px-1 h-3 text-white">
							new
						</span>
					</Link>
					<Link
						href={"/dashboard/orders"}
						className={`${
							currentRoute == "/dashboard/orders"
								? "text-main  border-main"
								: "border-transparent"
						} p-4 flex border-b-4 `}
					>
						<p className=" ">Orders</p>
						<span className=" text-[9px] ml-1 bg-main rounded-full flex justify-center items-center px-1 h-3 text-white">
							2
						</span>
					</Link>
					<Link
						href={"/dashboard/app-users"}
						className={`${
							currentRoute == "/dashboard/app-users"
								? "text-main  border-main"
								: "border-transparent"
						} p-4 flex border-b-4 `}
					>
						<p className=" "> App users</p>
						<span className=" text-[9px] ml-1 bg-main rounded-full flex justify-center items-center px-1 h-3 text-white">
							8000
						</span>
					</Link>
					<Link
						href={"/dashboard/system-users"}
						className={`${
							currentRoute == "/dashboard/system-users"
								? "text-main  border-main"
								: "border-transparent"
						} p-4 flex border-b-4 `}
					>
						<p>System users</p>
						<span className=" text-[9px] ml-1 bg-main rounded-full flex justify-center items-center px-1 h-3 text-white">
							40
						</span>
					</Link>
				</div>
				<div className="  bg-[#F6F6F9]">{children}</div>
				{/* <Footer /> */}
				<div className="">
					<LowerFooter />
				</div>
			</div>
		</div>
	);
}
