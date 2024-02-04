import React from "react";
import Container from "../component/Products/Container";
import FormWrap from "../component/Products/FormWrap";
import LoginForm from "./LoginForm";
import getCurrentUser from "../actions/getCurrentUsers";

const Login = async () => {
	const currentUser = await getCurrentUser ()
	return (
		<Container>
			<FormWrap>
                <LoginForm currentUser = {currentUser}/>
            </FormWrap>
		</Container>
	);
};

export default Login;
