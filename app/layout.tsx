import "../styles/globals.css";
import { Navbar } from "./Navbar";
import { Footer } from "../components/Footer";
import { Analytics } from "./Analytics";

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<html lang="en">
			<body className="h-fill scroll-smooth bg-black font-sans text-white">
				{/* <style jsx global>
					{`
						#__next {
							height: -webkit-fill-available;
							height: -moz-available;
						}
					`}
				</style> */}
				<Navbar />
				<div className="relative z-[1] mb-[58.25px] bg-black">
					{children}
				</div>
				{process.env.NODE_ENV === "production" && <Analytics />}
				<Footer />
			</body>
		</html>
	);
}
