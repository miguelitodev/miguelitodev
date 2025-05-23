/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-redundant-type-constituents */

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
  const { postId, currentLikes }: LikeRequestBody = await req.json();

  try {
    const response: Partial<NotionPageResponse> = await notion.pages.update({
      page_id: postId,
      properties: {
        likes: {
          number: currentLikes,
        },
      },
    });

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.error("Erro ao atualizar curtidas:", error);
    return new Response("Erro ao atualizar curtidas", { status: 500 });
  }
}
