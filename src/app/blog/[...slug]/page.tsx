import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";

export default async function Page({ params }: { params: { slug: string } }) {
	const post = await fetchBySlug(params.slug);

	if (!post) return <h1>No posts</h1>;

	const blocks = await fetchPageBlocks(post.id);

	const renderer = new NotionRenderer({
		client: notion,
	});

	renderer.use(hljsPlugin({}));
	renderer.use(bookmarkPlugin(undefined));

	const html = await renderer.render(...blocks);

	return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
