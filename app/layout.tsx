import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "./component/nav/NavBar";
import Footer from "./component/nav/Footer/Footer";
import CartProvider from "./providers/CartProvider";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
	title: "E_shop",
	description: "Ecommerce App",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${poppins.className} text-slate-700`}>
				<CartProvider>
				<div className="flex flex-col min-h-screen">
					<NavBar />
					<main className="flex-grow ">{children}</main>
					<Footer />
				</div>
				</CartProvider>
			</body>
		</html>
	);
}
