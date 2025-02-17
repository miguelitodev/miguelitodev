import { Sidemenu, Footer, Header } from "@/components/ui"; // Ajuste o caminho se necessário
import "@/styles/globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className="bg-gray-900 bg-cover bg-no-repeat font-[Merriweather]"
				style={{
					backgroundImage: "url(/img/bg-home-2.png)",
					backgroundSize: "cover",
					backgroundAttachment: "fixed",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
			>
				<main className="h-screen flex flex-col justify-between items-center">
					<Header />
					<div className="w-full flex flex-row justify-between px-8 max-lg:px-4 max-lg:flex-col-reverse max-md:gap-16 ">
						{children}
						<Sidemenu />
					</div>
					<Footer />
				</main>
			</body>
		</html>
	);
}
