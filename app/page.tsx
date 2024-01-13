import Container from "./component/Container";
import HomeBanner from "./component/HomeBanner";
import { products } from "./component/utilities/Products";

export default function Home() {
	return (
		<div className="p-8 ">
			<Container>
				<div>
					<HomeBanner />
				</div>
				<div>
					{products.map((product: any) => {
						return <div>{product.name}</div>;
					})}
				</div>
			</Container>
		</div>
	);
}
