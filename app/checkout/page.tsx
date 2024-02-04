import React from "react";
import Container from "../component/Products/Container";
import FormWrap from "../component/Products/FormWrap";
import CheckOutClient from "./CheckOutClient";

const Checkout = () => {
	return (
		<div>
			<Container>
				<FormWrap>
					<CheckOutClient />
				</FormWrap>
			</Container>
		</div>
	);
};

export default Checkout;
