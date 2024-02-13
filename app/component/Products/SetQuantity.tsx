"use client";

import { CartProductType } from "../../product/[productId]/ProductDetails";

interface setQtyProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}

const SetQuantity: React.FC<setQtyProps> = ({
  cartProduct,
  cartCounter,
  handleQtyDecrease,
  handleQtyIncrease,
}) => {
  const btnStyles = "border-[1.2px] border-slate-300 px-2 rounded";
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : <div className="font-semi-bold">QUATITY</div>}
      <div className="flex gap-4 items-center text-base">
        <button onClick={handleQtyDecrease} className={btnStyles}>
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <div onClick={handleQtyIncrease} className={btnStyles}>
          +
        </div>
      </div>
    </div>
  );
};

export default SetQuantity;
