import { notFound } from "next/navigation";

export default function ReviewDetail({
	params,
}: {
	params: {
		bookId: string;
		reviewId: string;
	};
}) {
	return (
		<h1>Review {params.reviewId} for {params.bookId}</h1>
	);
}