import Container from "./component/Container";
import HomeBanner from "./component/HomeBanner";

export default function Home() {
	return (
		<div className="p-8 ">
			<Container>
				<div>
					<HomeBanner />
				</div>
			</Container>
		</div>
	);
}
