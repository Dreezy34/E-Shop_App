import Container from "@/app/component/Products/Container";
import OrderDetails from "./OrderDetails";
import getOrderById from "@/app/actions/getOrderByID";
import NullData from "@/app/component/NullData";

interface IPrams {
  orderId?: string;
}

const Order = async ({ params }: { params: IPrams }) => {
  const order = await getOrderById(params);

  if (!order) return <NullData title="No order"></NullData>;

  return (
    <div className="p-8">
      <Container>
        <OrderDetails order={order} />
      </Container>
    </div>
  );
};

export default Order;
