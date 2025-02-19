/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// @ts-ignore
import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import LikeButton from "./LikeButton";
import { format } from "date-fns";

// Tipagem para os parâmetros da URL
type Params = {
	slug: string;
};

type Post = {
	id: string;
	properties: {
		Name: { title: { plain_text: string }[] };
		date: { created_time: string };
		likes?: { number: number };
	};
};

type Block = {
	object: string;
	id: string;
	type: string;
	// Adicione outras propriedades conforme necessário
};

// Tipagem para as propriedades do Notion
type NotionProperties = {
	Name?: { title: { plain_text: string }[] };
	date?: { created_time: string };
	likes?: { number: number };
	[key: string]: any; // Permitir outros campos não especificados
};

// Tipando a resposta do fetchBySlug com base no tipo PageObjectResponse
type FetchedPostResponse =
	| {
			id: string;
			properties: NotionProperties;
	  }
	| undefined;

export default async function Page({ params }: { params: Promise<Params> }) {
	const resolvedParams = await params; // Resolva a Promise aqui

	const { slug } = resolvedParams;

	// Tipando o retorno da função fetchBySlug
	const fetchedPost: FetchedPostResponse = await fetchBySlug(slug);

	// Garantir que fetchedPost tenha as propriedades esperadas
	const post: Post | null =
		fetchedPost && fetchedPost.properties
			? {
					id: fetchedPost.id,
					properties: {
						Name: Array.isArray(fetchedPost.properties.Name)
							? fetchedPost.properties.Name[0] ?? {
									title: [{ plain_text: "" }],
							  }
							: fetchedPost.properties.Name ?? { title: [{ plain_text: "" }] },
						date: fetchedPost.properties.date ?? { created_time: "" },
						likes: fetchedPost.properties.likes ?? { number: 0 },
					},
			  }
			: null;

	if (!post) return <h1>No posts</h1>;

	// Garantir que blocks seja tipado corretamente
	const blocks: Block[] = (await fetchPageBlocks(post.id)) ?? [];

	const renderer = new NotionRenderer({
		client: notion,
	});

	await renderer.use(hljsPlugin({}));
	await renderer.use(bookmarkPlugin(undefined));

	const html: string = await renderer.render(...blocks);

	return (
		<div className="flex flex-col mx-auto max-w-[60%]">
			<div className="mb-8">
				<h1 className="text-4xl font-bold mb-4 text-white">
					{post.properties.Name.title[0].plain_text}
				</h1>
				<div className="flex justify-between items-center">
					<span className="text-sm text-white font-mono">
						by Miguel Riquelme -{" "}
						{format(post.properties.date.created_time, "MMMM dd, yyyy")}
					</span>
					<LikeButton
						currentLikes={post.properties.likes?.number ?? 0}
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
