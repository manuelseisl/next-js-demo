import Link from "next/link";

export const generateMetadata = async () => {
	return { title: "home" };
};

export default function Home() {
	return (
		<>
			<Link href="/de/asdf">Test</Link>
			<Link href="/de/asdf1">Test1</Link>
			<Link href="/de/asdf2">Test2</Link>
			<Link href="/de/asdf3">Test3</Link>
			<Link href="/de/asdf4">Test4</Link>
			<Link href="/de/asdf5">Test5</Link>
		</>
	);
}
