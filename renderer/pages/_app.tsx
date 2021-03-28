import type { AppProps } from "next/app";
import "../styles/index.css";
import Head from "next/head";
import { Navbar } from "../ui/Nav/Navbar";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>Home - Pathweaver Dash</title>
			</Head>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
