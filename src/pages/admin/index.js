import Head from "next/head";
import Dashboard from "@/components/layout/Dashboard";

export default function Admin() {
	return (
	  <>
		<Head>
		  <meta charSet="utf-8" />
		  <meta name="viewport" content="width=device-width, initial-scale=1" />
		  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
		  <meta discription="Create a Design" />
		  <title>Admin</title>
		</Head>
		<Dashboard />
	  </>
	);
  }