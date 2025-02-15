import axios, { AxiosResponse } from "axios";

interface Repo {
	id: number;
	name: string;
	description: string;
	html_url: string;
	stargazers_count: number;
	forks_count: number;
	topics: string[];
	language: string | null;
	updated_at: string;
}

export async function fetchRepos(username: string): Promise<Repo[]> {
	let allRepos: Repo[] = []; // Garantindo que o tipo é Repo[]
	let page = 1;
	const perPage = 10;
	let hasMore = true;

	while (hasMore) {
		try {
			// Definindo corretamente o tipo da resposta da API
			const res: AxiosResponse<Repo[]> = await axios.get(
				`https://api.github.com/users/${username}/repos`,
				{ params: { per_page: perPage, page } }
			);

			const data = res.data;

			if (Array.isArray(data)) {
				allRepos = [...allRepos, ...data];
				page++;

				if (data.length < perPage) {
					hasMore = false;
				}
			} else {
				console.error("Resposta da API não é um array:", data);
				hasMore = false;
			}
		} catch (error) {
			console.error("Erro ao buscar repositórios:", error);
			hasMore = false;
		}
	}

	allRepos.sort(
		(a, b) =>
			new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
	);

	return allRepos;
}
