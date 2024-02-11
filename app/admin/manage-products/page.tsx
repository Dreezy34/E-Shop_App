import Container from "@/app/component/Products/Container";
import ManageProductsClient from "./ManageProductsClient";
import getProducts from "@/app/actions/getProducts";
import getCurrentUser from "@/app/actions/getCurrentUsers";
import NullData from "@/app/component/NullData";

const ManageProducts = async () => {
	const products = await getProducts({ category: null });
	const currentUser = await getCurrentUser();

	if (!currentUser || currentUser.role !== "ADMIN") {
		return <NullData title="Oops! Access denied" />;
	}

	return (
		<div className="pt-8">
			<Container>
				<ManageProductsClient products={products} />
			</Container>
		</div>
	);
};

export default ManageProducts;
