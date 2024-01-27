"use client";
import SetColor from "@/app/component/Products/SetColor";
import { product } from "@/app/component/utilities/product";
import { Rating } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import SetQuantity from "../SetQuantity";
import Button from "@/app/component/Products/Button";
import ProductImages from "../ProductImages";
import { useCart } from "@/app/Hook/useCart";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/navigation";

interface ProductDetailsProps {
	product: any;
}
export type CartProductType = {
	id: string;
	name: string;
	description: string;
	category: string;
	brand: string;
	selectedImg: SelectedImgType;
	quantity: number;
	price: number;
};

export type SelectedImgType = {
	color: string;
	colorCode: string;
	image: string;
};

const Horizontal = () => {
	return <hr className="w-[30%] my-2" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
	const { handleAddProductToCart, cartProducts } = useCart();
	const [isProductInCart, setIsProductInCart] = useState(false);
	const [cartProduct, setCartProduct] = useState<CartProductType>({
		id: product.id,
		name: product.name,
		description: product.description,
		category: product.category,
		brand: product.brand,
		selectedImg: { ...product.images[0] },
		quantity: 1,
		price: product.price,
	});
	const router = useRouter();

	useEffect(() => {
		setIsProductInCart(false);
		if (cartProducts) {
			const exisitingIndex = cartProducts.findIndex(
				(item) => item.id === product.id,
			);

			if (exisitingIndex > -1) {
				setIsProductInCart(true);
			}
		}
	}, [cartProducts, product.id]);

	const ProductRating =
		product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
		product.reviews.length;
	product.reviews.length;

	const handleColorSelect = useCallback(
		(value: SelectedImgType) => {
			setCartProduct((prev) => {
				return { ...prev, selectedImg: value };
			});
		},
		[],
	);

	const handleQtyIncrease = useCallback(() => {
		setCartProduct((prev) => {
			return { ...prev, quantity: ++prev.quantity };
		});
	}, [cartProduct]);
	const handleQtyDecrease = useCallback(() => {
		if (cartProduct.quantity === 1) {
			return;
		}
		setCartProduct((prev) => {
			return { ...prev, quantity: --prev.quantity };
		});
	}, [cartProduct]);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
			<ProductImages
				cartProduct={cartProduct}
				product={product}
				handdleColorSelect={handleColorSelect}
			/>
			<div className="flex flex-col gap-1 text-slate-500 text-sm">
				<h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
				<div className="flex items-center gap-2">
					<Rating
						value={ProductRating}
						readOnly
					/>
				</div>
				<Horizontal />
				<div>{product.reviews.length} reviews</div>
				<div className="text-justify">{product.description}</div>

				<div>
					<span className="font-semibold">CATEGORY:</span>
					{product.category}
				</div>
				<div>
					<span className="font-semibold">BRAND:</span>
					{product.brand}
				</div>
				<div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
					{product.inStock ? "In stock" : "out of stock"}
				</div>
				<Horizontal />
				{isProductInCart ? (
					<>
						<p className="mb-2 text-slate-500 flex items-center gap-1">
							<MdCheckCircle
								size={20}
								className="text-teal-400"
							/>
							<span>Product added to cart</span>
						</p>
						<div>
							<Button
								label="View Cart"
								outline
								onClick={() => {
									router.push("/Cart");
								}}
							/>
						</div>
					</>
				) : (
					<>
						<SetColor
							cartProduct={cartProduct}
							images={product.images}
							handleColorSelect={handleColorSelect}
						/>
						<Horizontal />
						<SetQuantity
							cartProduct={cartProduct}
							handleQtyDecrease={handleQtyDecrease}
							handleQtyIncrease={handleQtyIncrease}
						/>
						<Horizontal />
						<div className="max-w-[300px]">
							<Button
								label="Add To Cart"
								onClick={() => handleAddProductToCart(cartProduct)}
							/>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default ProductDetails;
