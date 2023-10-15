import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

function PostCard(post: Post) {
	return (
		<div className="border-2 border-black p-5 rounded-md group cursor-pointer h-40">
			<h2 className="mb-1 text-xl break-words">
				<Link
					href={post?.url}
					className="text-blue-700 group-hover:text-blue-900 dark:text-blue-400 ">
					{post.title}
				</Link>
			</h2>
			<div className="flex items-center gap-4 text-xs text-gray-600 mt-3">
				<time dateTime={post.date} className=" block">
					{format(parseISO(post?.date as string), "LLLL d, yyyy")}
				</time>
				<p>{post?.readingTime?.text}</p>
			</div>
		</div>
	);
}

export default function Home() {
	const posts = allPosts.sort((a: Post, b: Post) =>
		compareDesc(new Date(a.date), new Date(b.date)),
	);

	return (
		<div className="py-8 px-5">
			<h1 className="mb-8 text-center md:text-2xl text-lg font-black">
				Next.js + Contentlayer Example
			</h1>
			<div className="grid md:grid-cols-3 max-w-7xl mx-auto gap-5 mt-16">
				{posts.map((post: Post, idx: number) => (
					<PostCard key={idx} {...post} />
				))}
			</div>
		</div>
	);
}
