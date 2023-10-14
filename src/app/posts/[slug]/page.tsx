import { Post, allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import Image from "next/image";

const mdxComponents = {
	Image,
	Link,
};

const SinglePostPage = ({ params }: { params: any }) => {
	const singlePost = allPosts?.find(
		(post: Post) => post?._raw?.flattenedPath === params?.slug,
	);

	const MDXContent = useMDXComponent(singlePost?.body?.code as string);

	return (
		<div className="max-w-5xl mx-auto mt-32 mb-16">
			<h2 className="mb-1 mt-5 text-4xl">
				<Link
					href={singlePost?.url as string}
					className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
					{singlePost?.title}
				</Link>
			</h2>
			<div className="flex items-center gap-4 text-xs text-gray-600 mt-2">
				<time dateTime={singlePost?.date} className=" block ">
					{format(
						parseISO(singlePost?.date as string),
						"LLLL d, yyyy",
					)}
				</time>
				<p>{singlePost?.readingTime?.text}</p>
			</div>
			<div className="prose lg:prose-xl max-w-max mt-10">
				<MDXContent components={mdxComponents} />
			</div>
		</div>
	);
};

export default SinglePostPage;
