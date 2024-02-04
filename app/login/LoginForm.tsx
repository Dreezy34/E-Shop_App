"use client";

import React, { useEffect, useState } from "react";
import Heading from "../component/Heading";
import Input from "../component/inputs/Input";
import Button from "../component/Products/Button";
import { AiOutlineGoogle } from "react-icons/ai";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Link from "next/link";
import { data } from "autoprefixer";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { SafeUser } from "@/types";

interface LoginFormProps {
	currentUser: SafeUser | null;
}

const LoginForm: React.FC<LoginFormProps> = ({ currentUser }) => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const router = useRouter();

	useEffect(() => {
		if (currentUser) {
			router.push("/Cart");
			router.refresh();
		}
	}, []);
	const OnSubmit: SubmitHandler<FieldValues> = () => {
		setIsLoading(true);
		signIn("credentials", { ...data, redirect: false }).then((callback) => {
			setIsLoading(false);
			if (callback?.ok) {
				router.push("/cart");
				router.refresh();
				toast.success("Logged In");
			}

			if (callback?.error) {
				toast.error(callback.error);
			}
		});
	};
	if (currentUser) {
		return <p className="text-center">Logged in. Redirecting...</p>;
	}
	return (
		<>
			<Heading title="Sign in to E-shop" />
			<Button
				outline
				label="Continue with Google"
				icon={AiOutlineGoogle}
				onClick={() => {
					signIn("google");
				}}
			/>
			<hr className="bg-slate-300 w-full h-px" />

			<Input
				id="email"
				label="Email"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id="password"
				label="Password"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
				type="password"
			/>
			<Button
				label={isLoading ? "Loading" : "Login"}
				onClick={handleSubmit(OnSubmit)}
			/>
			<p className="text-sm">
				Do not have an account?{" "}
				<Link
					className="underline"
					href="/api/register">
					{" "}
					Sign Up
				</Link>
			</p>
		</>
	);
};

export default LoginForm;
function SignIn(arg0: string) {
	throw new Error("Function not implemented.");
}
