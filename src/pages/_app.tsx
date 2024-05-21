import type { AppProps } from "next/app";
import { LocationProvider } from "@/context";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<LocationProvider>
			<Component {...pageProps} />
		</LocationProvider>
	);
}
