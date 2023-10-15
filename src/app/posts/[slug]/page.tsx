import { Post, allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import Image from "next/image";
import { allColors } from "colorlist";

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
		<div className="max-w-5xl mx-auto md:mt-32 my-10 md:mb-16 px-5">
			<div className="flex items-center gap-4 text-xs text-gray-600 mt-2">
				<time dateTime={singlePost?.date} className=" block ">
					{format(
						parseISO(singlePost?.date as string),
						"LLLL d, yyyy",
					)}
				</time>
				<p className="px-2 py-1 bg-lime-400 text-black font-semibold rounded-full">
					{singlePost?.readingTime?.text}
				</p>
			</div>
			<div className="prose lg:prose-xl max-w-max mt-10">
				<MDXContent components={mdxComponents} colors={allColors} />
			</div>
		</div>
	);
};

export default SinglePostPage;
