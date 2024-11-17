import { notFound } from "next/navigation";

export default function ReviewDetail({
	params,
}: {
	params: {
		bookId: string;
		reviewId: string;
	};
}) {
	if (parseInt(params.reviewId) > 5000) {
		notFound();
	}
	return (
		<h1>Review {params.reviewId} for {params.bookId}</h1>
	);
}