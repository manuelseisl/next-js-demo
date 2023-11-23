import Link from "next/link";

export default function Page({ params }) {
	return (
		<>
			<Link href="/de/test">Test</Link>
			<Link href="/de/test1">Test1</Link>
			<Link href="/de/test2">Test2</Link>
			<Link href="/de/test3">Test3</Link>
			<Link href="/de/test4">Test4</Link>
			<Link href="/de/test5">Test5</Link>
			<p>{params.slug}</p>
		</>
	);
}
