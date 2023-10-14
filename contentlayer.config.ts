import {
	LocalDocument,
	defineDocumentType,
	makeSource,
} from "contentlayer/source-files";
import readingTime from "reading-time";

export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: `**/**/*.mdx`,
	contentType: "mdx",
	fields: {
		title: { type: "string", required: true },
		date: { type: "date", default: "2023-10-13", required: true },
		author: { type: "string", default: "varun rana", required: true },
	},
	computedFields: {
		url: {
			type: "string",
			resolve: (post: LocalDocument) =>
				`/posts/${post._raw.flattenedPath}`,
		},
		readingTime: {
			type: "json",
			resolve: (doc: any) => readingTime(doc?.body?.code),
		},
	},
}));

export default makeSource({ contentDirPath: "posts", documentTypes: [Post] });
