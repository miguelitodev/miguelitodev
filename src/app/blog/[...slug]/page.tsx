import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import LikeButton from "./LikeButton";
import { format } from "date-fns";

export default async function Page({ params }: { params: { slug: string } }) {
	const post = await fetchBySlug(params.slug);
	console.log(post);

	if (!post) return <h1>No posts</h1>;

	const blocks = await fetchPageBlocks(post.id);

	const renderer = new NotionRenderer({
		client: notion,
	});

	renderer.use(hljsPlugin({}));
	renderer.use(bookmarkPlugin(undefined));

	const html = await renderer.render(...blocks);

	return (
		<div className="flex flex-col mx-auto max-w-[60%]">
			<div className="mb-8">
				<h1 className="text-4xl font-bold mb-4 text-white">
					{(post.properties.Name as any).title[0].plain_text}
				</h1>
				<div className="flex justify-between items-center">
					<span className="text-sm text-white font-mono">
						by Miguel Riquelme -{" "}
						{format(
							(post.properties.date as any).created_time,
							"MMMM dd, yyyy"
						)}
					</span>
					<LikeButton
						currentLikes={(post.properties.likes as any)?.number}
						postId={post.id}
					/>
				</div>
			</div>

			<div
				className="frontend-blog prose text-white [&_*]:!text-white"
				dangerouslySetInnerHTML={{ __html: html }}
			></div>
		</div>
	);
}
