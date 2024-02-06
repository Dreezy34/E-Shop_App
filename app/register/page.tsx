// import getCurrentUser from "@/actions/getCurrentUser";
import getCurrentUser from "../actions/getCurrentUsers";
import Container from "../component/Products/Container";
import FormWrap from "../component/Products/FormWrap";
import RegisterForm from "./RegisterForm";

const Register = async () => {
	const currentUser = await getCurrentUser();

	return (
		<Container>
			<FormWrap>
				<RegisterForm currentUser={currentUser} />
			</FormWrap>
		</Container>
	);
};

export default Register;
