import Container from "../component/Products/Container";
import OrdersClient from "./OrderClient";
import getCurrentUser from "../actions/getCurrentUsers";
import NullData from "../component/NullData";
import getOrdersByUserId from "../actions/getOrdersByUserId";

const Orders = async () => {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return <NullData title="Oops! Access denied" />;
	}

	const orders = await getOrdersByUserId(currentUser.id);

	if (!orders) {
		return <NullData title="No orders yet..." />;
	}

	return (
		<div className="pt-8">
			<Container>
				<OrdersClient orders={orders} />
			</Container>
		</div>
	);
};

export default Orders;
