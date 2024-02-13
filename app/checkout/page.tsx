import React from "react";
import Container from "../component/Products/Container";
import FormWrap from "../component/Products/FormWrap";
import CheckoutClient from "./CheckoutClient";

const Checkout = () => {
  return (
    <div>
      <Container>
        <FormWrap>
          <CheckoutClient />
        </FormWrap>
      </Container>
    </div>
  );
};

export default Checkout;
