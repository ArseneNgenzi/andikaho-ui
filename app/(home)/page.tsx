// import Image from "next/image";
import Nav from "@/components/nav/Nav";
import ProductCard from "@/components/productCard/ProductCard";
// import { resolve } from "path";

export default async function Home() {

	// await new Promise(resolve => setTimeout(resolve, 5000))

	// const skeleton = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

	const res = await fetch("https://dummyjson.com/products");
	const returned = await res.json();
	// console.log(returned);
	return (
		<main className="px-40">
			<div>
				<Nav />
			</div>
			<div className=" relative grid grid-cols-3 mb-20 gap-8">
				{returned.products.map((item: any) => (
					<ProductCard
						key={item.id}
						id={item.id}
						images={item.images}
						title={item.title}
						price={item.price}
						thumbnail={item.thumbnail}
					/>
				))}

				
			</div>
			<div className=" mb-36 flex justify-center">
				<button className=" btn">
					Load more...
				</button>
			</div>
		</main>
	);
}
