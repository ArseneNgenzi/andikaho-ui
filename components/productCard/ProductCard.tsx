// import React from 'react'

import Link from "next/link";
import { Eye } from "react-feather";

const ProductCard = ({images, id, title, price, thumbnail}:any) => {
	return (
		<Link href={`/products/${id}`}>
		<div className="w-full ">
			<div className="   rounded-md  w-full">
				<img src={thumbnail} className=" h-[350px] w-full rounded-md object-cover" />
			</div>
			<div className=" flex justify-between my-4">
				<div className=" flex items-center">
					<img src={images[1]} alt=""  className=" w-[30px] h-[30px] rounded-full mr-2"/>
					<p className=" mr-4">{title}</p>
					<p className=" text-main bg-grayMain/10 px-2 rounded-md font-bold">NEW</p>
				</div>
				<div className=" flex items-center">
					<p className=" mr-4">Rwf {price}</p>
					<p className=" flex items-center">
						{" "}
						<span className=" text-grayMain/70 mr-1"><Eye width={15} /></span> <span className=" text-sm">6.3k</span>{" "}
					</p>
				</div>
			</div>
		</div>
		</Link>
	);
};

export default ProductCard;
