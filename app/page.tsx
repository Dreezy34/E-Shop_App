import Container from "./component/Container";
import HomeBanner from "./component/HomeBanner";
import { products } from "./component/utilities/products"; 
import { truncateText } from "./component/utilities/truncateText";
import ProductCard from "./component/Products/ProductCard";

export default function Home() {
	return (
		<div className="p-8 ">
			<Container>
				<div>
					<HomeBanner />
				</div>
				<div
					className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
				xl:grid-cols-5 2xl:grid-cols-6 gap:8 ">
					{products.map((product: any) => {
						return <div key={product.data}> <ProductCard data={product}/> </div>
					})}
				</div>
			</Container>
		</div>
	);
}
