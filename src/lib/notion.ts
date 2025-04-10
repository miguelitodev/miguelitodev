import "server-only";

import { Client } from "@notionhq/client";
import { unstable_cache } from "next/cache";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const data = await notion.databases.retrieve({
  database_id: process.env.NOTION_DATABASE_ID!,
});
console.log(data.properties);

export const fetchPages = unstable_cache(async () => {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "status",
      status: {
        equals: "live",
      },
    },
  });
}, ["fetchPages"]);

export const fetchBySlug = unstable_cache(async (slug: string) => {
  console.log("Slug recebido:", slug);

  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "slug",
      rich_text: {
        equals: slug[0],
      },
    },
  });

  return response.results[0] as PageObjectResponse | undefined;
});

export const fetchPageBlocks = unstable_cache((pageId: string) => {
  return notion.blocks.children
    .list({
      block_id: pageId,
    })
    .then((res) => res.results as BlockObjectResponse[]);
});

export const updateLikes = async (
  pageId: string,
  currentLikes: number,
  liked: boolean
) => {
  try {
    const response = await notion.pages.update({
      page_id: pageId,
      properties: {
        likes: {
          number: liked ? currentLikes - 1 : currentLikes + 1,
        },
      },
    });

    return response;
  } catch (error) {
    console.error("Erro ao atualizar curtidas:", error);
    throw error;
  }
};
