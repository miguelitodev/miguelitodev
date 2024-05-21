import { Footer } from "./Footer";
import { Header } from "./Header";

type TypePage = {
	children: React.ReactNode;
};

export function Page({ children }: TypePage) {
	return (
		<div className="h-screen bg-gradient-to-br from-opacity-10 to-transparent backdrop-blur-2xl shadow-lg p-6 flex items-center justify-between flex-col">
			<Header />
			{children}
			<Footer />
		</div>
	);
}
