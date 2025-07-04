import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

export const revalidate = 0;

export async function GET() {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL('https://letterboxd.com/miguelitodev/rss/');

    const movies = feed.items.map((item) => {
      const rawTitle = item.title || '';
      const ratingRegex = /\s*-\s*([★½]+)$/;
      const ratingMatch = rawTitle.match(ratingRegex);
      const rating = ratingMatch ? ratingMatch[1] : '';

      const yearRegex = /,\s*(\d{4})\s*-\s*[★½]+$/;
      const yearMatch = rawTitle.match(yearRegex);
      const year = yearMatch ? yearMatch[1] : '';

      let title = rawTitle.replace(ratingRegex, '').trim();
      title = title.replace(/,\s*\d{4}$/, '').trim();
      const link = item.link || '';
      const posterMatch = item.content?.match(/<img src="(.*?)"/);
      const poster = posterMatch ? posterMatch[1] : '';

      return { title, link, poster, rating, year };
    });

    return NextResponse.json({ movies });
  } catch (error) {
    console.error('Error fetching movies:', error);
    return NextResponse.json({ error: 'Failed to fetch movies' }, { status: 500 });
  }
}
