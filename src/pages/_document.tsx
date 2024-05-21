import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body
				className="bg-gray-900 min-h-screen bg-cover bg-no-repeat"
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
