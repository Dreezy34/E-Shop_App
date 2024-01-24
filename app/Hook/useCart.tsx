"use client";
import { error } from "console";
import {
	createContext,
	useCallback,
	useContext,
	useState,
	useEffect,
} from "react";
import { CartProductType } from "../product/[productID]/ProductDetails";
import { toast } from "react-hot-toast";

type CartContextType = {
	id: string;
	cartTotalQty: number;
	cartProducts: CartProductType[] | null;
	handleAddProductToCart: (product: CartProductType) => void;
	handleRemoveProductFromCart: (product: CartProductType) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
	[propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
	const [cartTotalQty, setCartTotalQty] = useState(0);
	const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
		null,
	);
	const handleAddProductToCart = useCallback((product: CartProductType) => {
		setCartProducts((prev) => {
			let updatedCart;
			if (prev) {
				updatedCart = [...prev, product];
			} else {
				updatedCart = [product];
			}
			toast.success("Product added to cart");
			localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));

			return updatedCart;
		});
	}, []);

	const handleremoveProductFromCart = useCallback(
		(product: CartContextType) => {
			if (cartProducts) {
				const filteredProducts = cartProducts.filter((item) => {
					return item.id !== product.id;
				});
				setCartProducts(filteredProducts);
				toast.succes("Product added to cart");
				localStorage.setItem(
					"eShopCartItems",
					JSON.stringify(filteredProducts),
				);
			}
		},
		[cartProducts],
	);

	const value = {
		cartTotalQty,
		cartProducts,
		handleAddProductToCart,
	};

	return (
		<CartContext.Provider
			value={value}
			{...props}
		/>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (context === null) {
		throw new Error("useCart must be used within a CartContextProvider");
	}
	return context;
};
