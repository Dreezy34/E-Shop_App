import Container from "@/app/product/Container";

import ProductDetails from "./ProductDetails";
import { product } from "@/app/component/utilities/product";

interface IPrams {
	productID?: string;
}

const Product = ({ params }: { params: IPrams }) => {
	
	return (
		<div className="p-8">
			<Container>
				<ProductDetails product = {product}/>
			</Container>
		</div>
	);
};

export default Product;
