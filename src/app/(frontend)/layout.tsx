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
				className="bg-gray-900 min-h-screen bg-cover bg-no-repeat font-[Merriweather]"
				style={{
					backgroundImage: "url(/img/bg-home.jpeg)",
					backgroundSize: "cover",
					backgroundAttachment: "fixed",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
			>
				<div className="min-h-screen bg-gradient-to-br from-opacity-10 to-transparent backdrop-blur-2xl shadow-lg p-6 flex items-start justify-between flex-col">
					<Header />
					<div className="w-full flex flex-row justify-between px-8 max-lg:px-4 max-lg:flex-col-reverse max-md:gap-16 h-full">
						{children}
						<Sidemenu />
					</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
