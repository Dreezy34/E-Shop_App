import Container from "@/app/component/Products/Container";
import FormWrap from "@/app/component/Products/FormWrap";
import React from "react";
import AddProductForm from "./AddProductForm";
import getCurrentUser from "@/app/actions/getCurrentUsers";
import NullData from "@/app/component/NullData";

const AddProducts = async () => {
	const currentUser = await getCurrentUser();
	if (!currentUser || currentUser.role !== "ADMIN") {
		return <NullData title="Oops! Daniel denied you access" />;
	}
	return (
		<div className="p-8">
			<Container>
				<FormWrap>
					<AddProductForm />
				</FormWrap>
			</Container>
		</div>
	);
};

export default AddProducts;
