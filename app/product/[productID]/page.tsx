import Container from "@/app/component/Products/Container";
import ProductDetails from "../ProductDetails";
import ListRating from "./ListRating";

import getProductById from "@/app/actions/getProductById";
import NullData from "@/app/component/NullData";
import AddRating from "./AddRating";
import getCurrentUser from "@/app/actions/getCurrentUsers";
interface IPrams {
  productId?: string;
}

const Product = async ({ params }: { params: IPrams }) => {
  const product = await getProductById(params);
  const user = await getCurrentUser();

  if (!product)
    return <NullData title="Oops! Product with the given id does not exist" />;

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <AddRating product={product} user={user} />
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
