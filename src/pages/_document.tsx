import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
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
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
