import React from "react";
import Container from "../component/Products/Container";
import FormWrap from "../component/Products/FormWrap";
import LoginForm from "./LoginForm";

const Login = () => {
	return (
		<Container>
			<FormWrap>
                <LoginForm/>
            </FormWrap>
		</Container>
	);
};

export default Login;
