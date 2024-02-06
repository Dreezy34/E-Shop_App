import Container from "../component/Products/Container";
import React from "react";
import CartClient from "./CartClient";
import getCurrentUser from "../actions/getCurrentUsers";

const Cart = async () => {
	const currentUser = await getCurrentUser();

	return (
		<div className="pt-8">
			<Container>
				<CartClient currentUser={currentUser} />
			</Container>
		</div>
	);
};

export default Cart;
