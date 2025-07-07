import { NextResponse } from 'next/server';
import axios from 'axios';
import { Repository } from '@/types';

export async function GET() {
  try {
    const perPage = 6;
    const res = await axios.get<Repository[]>(
      'https://api.github.com/users/miguelitodev/repos?sort=updated&direction=desc',
      {
        params: { per_page: perPage, page: 1 },
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github+json',
        },
      }
    );

    return NextResponse.json(res.data);
  } catch (e: unknown) {
    const err = e as Error;
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
