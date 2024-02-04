"use client";

import { useCart } from "@/Hook/useCart";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { FormEvent, useEffect, useState } from "react";
import { formatprice } from "../component/utilities/formatprice";
import toast from "react-hot-toast";

interface CheckOutFormProps {
	clientSecret: string;
	handleSetPaymentSuccess: (value: boolean) => void;
}

const CheckOutForm: React.FC<CheckOutFormProps> = ({
	clientSecret,
	handleSetPaymentSuccess,
}) => {
	const { cartTotalAmount, handleClearCart, handleSetPaymentIntent } =
		useCart();
	const stripe = useStripe();
	const elements = useElements();
	const [isLoading, setIsLoading] = useState(false);
	const formattedPrice = formatprice(cartTotalAmount);
	useEffect(() => {
		if (!stripe) {
			return;
		}
		if (!clientSecret) {
			return;
		}
		handleSetPaymentSuccess(false);
	}, [stripe]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!stripe || !elements) {
			return;
		}

		setIsLoading(true);
		stripe
			.confirmPayment({
				elements,
				redirect: "if_required",
			})
			.then((result) => {
				if (!result.error) {
					toast.success("Checkout Success");
					handleSetPaymentSuccess(true);
					handleSetPaymentIntent(null);
				}
                setIsLoading(false)
			});
	};
	return <form onSubmit={handleSubmit} id="payment-form">CheckOutForm</form>;
};

export default CheckOutForm;
