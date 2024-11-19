import { Metadata } from "next";

type Props = {
	params: {
		bookId: string;
	};
};

/*export const generateMetadata = ({ params }: Props): Metadata => {
	return {
		title: `Book ${params.bookId}`,
	};
};*/

export const generateMetadata = async ({ 
	params,
}: Props): Promise<Metadata> => {
	const title = await new Promise((resolve) => {
		setTimeout(() => {
			resolve(`JavaScript ${params.bookId}`);
		}, 100);
	});
	return {
		title: `Book ${title}`,
	};
};


export default function BookDetails({ params }: Props) {
	return <h1>Details about book {params.bookId}</h1>;
}