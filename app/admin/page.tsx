

import getProducts from "../actions/getProducts";
import Summary from "./Summary";
import getOrders from "../actions/getOrders";
import getUsers from "../actions/getUser";
import Container from "../component/Products/Container";
import BarGraph from "./BarGraph";
import getGraphData from "../actions/getGraphData";

const Admin = async () => {
  const products = await getProducts({ category: null });
  const orders = await getOrders();
  const users = await getUsers();
  const graphData = await getGraphData();

  return (
    <div className="pt-8">
      <Container>
        <Summary products={products} orders={orders} users={users} />
        <div className="mt-4 mx-auto max-w-[1150px]">
          <BarGraph data={graphData} />
        </div>
      </Container>
    </div>
  );
};

export default Admin;
