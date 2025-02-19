import { Client } from "@notionhq/client";

interface LikeRequestBody {
	postId: string;
	currentLikes: number;
}

interface NotionPageResponse {
	object: string;
	id: string;
	created_time?: string;
	last_edited_time?: string;
	properties: Record<string, { type: string; [key: string]: any }>;
}

const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

export async function POST(req: Request) {
	const { postId, currentLikes } = (await req.json()) as LikeRequestBody;

	console.log("postId:", postId, "currentLikes:", currentLikes);

	try {
		const response: Partial<NotionPageResponse> = await notion.pages.update({
			page_id: postId,
			properties: {
				likes: {
					number: currentLikes,
				},
			},
		});

		console.log("Resposta do Notion:", response);

		return new Response(JSON.stringify(response), { status: 200 });
	} catch (error) {
		console.error("Erro ao atualizar curtidas:", error);
		return new Response("Erro ao atualizar curtidas", { status: 500 });
	}
}
