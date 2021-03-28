import { useRouter } from "next/dist/client/router";
import React from "react";

const Home = () => {
	const router = useRouter();

	return (
		<>
			<div className="flex flex-col h-screen justify-center">
				<h1 className="text-center font-medium text-6xl">Welcome</h1>

				<div className="flex justify-center mt-10">
					<button
						onClick={() => router.push("/dash")}
						type="button"
						className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Connect To Server
					</button>
				</div>
			</div>
		</>
	);
};

export default Home;
