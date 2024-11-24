import Link from "next/link";

export default function BookList() {
	const bookId = 200
	return (
		<>
			<Link href="/">Home</Link>
			<h1>Book List</h1>
			<h2><Link href="books/1">Book 1</Link></h2>
			<h2><Link href="books/2">Book 2</Link></h2>
			<h2><Link href="books/3" replace>Book 3</Link></h2>
			<h2><Link href={`books/${bookId}`}>Book {bookId}</Link></h2>
		</>
	);
}