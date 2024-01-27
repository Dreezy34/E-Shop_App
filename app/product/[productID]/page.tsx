import Container from "@/app/component/Products/Container";

import ProductDetails from "./ProductDetails";

import ListRating from "../ListRating";
import { products } from "@/app/component/utilities/products";

interface IPrams {
	productID?: string;
}

const Product = ({ params }: { params: IPrams }) => {

	const product = products.find((item)=>item.id === params.productID)
	return (
		<div className="p-8">
			<Container>
				<ProductDetails product={product} />
				<div className="flex flex-col mt-20 gap-4">Add Rating</div>
				<ListRating product={product} />
			</Container>
		</div>
	);
};

export default Product;
