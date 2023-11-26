import Link from "next/link";

export const generateMetadata = async ({ params }) => {
	return {
		title: params.slug
	};
};

export default function Page({ params }) {
	return (
		<>
			<Link href="/de/demo">Demo</Link>
			<Link href="/de/demo1">Demo1</Link>
			<Link href="/de/demo2">Demo2</Link>
			<Link href="/de/demo3">Demo3</Link>
			<Link href="/de/demo4">Demo4</Link>
			<Link href="/de/demo5">Demo5</Link>
			<p>{params.slug}</p>
		</>
	);
}
