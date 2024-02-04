// import getCurrentUser from "@/actions/getCurrentUser";
import Container from "../component/Products/Container";
import FormWrap from "../component/Products/FormWrap";
import RegisterForm from "./RegisterForm";

const Register = () => {
  

  return (
    <Container>
      <FormWrap>
        <RegisterForm  />
      </FormWrap>
    </Container>
  );
};

export default Register;
