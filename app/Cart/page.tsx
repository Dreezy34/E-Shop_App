import Container from "../component/Products/Container"
import React from "react";
import CartClient from "./CartClient";

const page = () => {
	return (
		<div className="pt-8">
			<Container>
				<CartClient/>
				

			</Container>
			
		</div>
	);
};

export default page;
