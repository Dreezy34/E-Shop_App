"use client";

import React, { useState } from "react";
import Heading from "../component/Heading";
import Input from "../component/inputs/Input";
import Button from "../component/Products/Button";
import { AiOutlineGoogle } from "react-icons/ai";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

const LoginForm = () => {
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
	const OnSubmit: SubmitHandler<FieldValues> = () => {
		setIsLoading(true);
	};
	return (
		<>
			<Heading title="Sign in to E-shop" />
			<Button
				outline
				label="Continue with Google"
				icon={AiOutlineGoogle}
				onClick={() => {}}
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
				<a
					className="underline"
					href="/api/register">
					{" "}
					Sign Up
				</a>
			</p>
		</>
	);
};

export default LoginForm;
