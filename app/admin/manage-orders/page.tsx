import Container from "@/app/component/Products/Container";
import ManageOrdersClient from "./ManageOrdersClient";
import getCurrentUser from "@/app/actions/getCurrentUsers";
import NullData from "@/app/component/NullData";
import getOrders from "@/app/actions/getOrders";

const ManageOrders = async () => {
  const orders = await getOrders();
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access denied" />;
  }

  return (
    <div className="pt-8">
      <Container>
        <ManageOrdersClient orders={orders} />
      </Container>
    </div>
  );
};

export default ManageOrders;
