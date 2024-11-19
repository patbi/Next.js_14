import { Metadata } from "next";

export const metadata: Metadata = {
	title: "News",
	/*title:{
		absolute: "News",
	},*/
};

export default function News() {
	return <h1>My news</h1>;
}