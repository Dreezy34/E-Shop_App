import Container from "@/app/component/Products/Container";

import ProductDetails from "./ProductDetails";
import { product } from "@/app/component/utilities/product";
import ListRating from "../ListRating";

interface IPrams {
	productID?: string;
}

const Product = ({ params }: { params: IPrams }) => {
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
