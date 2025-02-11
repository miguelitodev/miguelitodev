/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-floating-promises */
import { Page } from "@/template";
import { useEffect, useState } from "react";
import axios from "axios"; // Importando axios
import { FaStar, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

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

const gradients = [
	"bg-gradient-to-r from-[rgba(236,72,153,0.6)] to-[rgba(239,68,68,0.6)]",
	"bg-gradient-to-r from-[rgba(139,92,246,0.6)] to-[rgba(99,102,241,0.6)]",
	"bg-gradient-to-r from-[rgba(34,197,94,0.6)] to-[rgba(20,184,166,0.6)]",
	"bg-gradient-to-r from-[rgba(37,99,235,0.6)] to-[rgba(6,182,212,0.6)]",
	"bg-gradient-to-r from-[rgba(252,211,77,0.6)] to-[rgba(249,115,22,0.6)]",
];

const languageColors: Record<string, string> = {
	JavaScript: "bg-yellow-500",
	TypeScript: "bg-blue-600",
	CSS: "bg-blue-800",
	Python: "bg-blue-400",
	Java: "bg-red-600",
	CSharp: "bg-purple-600",
	SCSS: "bg-pink-600",
	Ruby: "bg-red-700",
	Go: "bg-blue-500",
	PHP: "bg-indigo-500",
	Rust: "bg-orange-600",
	HTML: "bg-orange-600",
};

export default function Projects() {
	const [repos, setRepos] = useState<Repo[]>([]);
	const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento
	const username = "miguelitodev";

	useEffect(() => {
		const fetchRepos = async () => {
			let allRepos: Repo[] = [];
			let page = 1;
			const perPage = 10; // Carregar menos repositórios por página para melhorar a performance
			let hasMore = true;

			while (hasMore) {
				try {
					setLoading(true); // Inicia o carregamento

					const res = await axios.get(
						`https://api.github.com/users/${username}/repos`,
						{ params: { per_page: perPage, page } }
					);

					const data = res.data;

					if (Array.isArray(data)) {
						allRepos = [...allRepos, ...data];
						page++;

						// Se não houver mais repositórios, encerra o loop
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
				} finally {
					setLoading(false); // Encerra o carregamento ao terminar
				}
			}

			allRepos.sort(
				(a, b) =>
					new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
			);
			setRepos(allRepos);
		};

		fetchRepos(); // Chamando a função para buscar os repositórios
	}, []);

	return (
		<Page>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:w-5/6 w-full pt-8 lg:pt-0">
				{loading ? (
					<div className="flex justify-center items-center h-64 w-full">
						<motion.div
							className="flex space-x-2"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ repeat: Infinity, duration: 1 }}
						>
							{[...Array(3)].map((_, i) => (
								<motion.span
									key={i}
									className="w-4 h-4 bg-white rounded-full"
									animate={{
										y: [0, -10, 0],
									}}
									transition={{
										duration: 0.6,
										repeat: Infinity,
										delay: i * 0.2,
										ease: "easeInOut",
									}}
								/>
							))}
						</motion.div>
					</div>
				) : (
					repos.map((repo) => (
						<a
							key={repo.id}
							href={repo.html_url}
							target="_blank"
							rel="noopener noreferrer"
							className="p-6 bg-black/80 text-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 flex flex-col justify-between"
						>
							{repo.language && (
								<div
									className={`absolute top-2 left-2 px-3 py-1 text-sm font-semibold text-white rounded-lg ${
										languageColors[repo.language] || "bg-gray-500"
									}`}
									style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}
								>
									{repo.language}
								</div>
							)}

							<div className="flex justify-between items-center mt-8">
								<h3 className="text-xl font-bold">{repo.name}</h3>
								<FaExternalLinkAlt />
							</div>

							<p className="mt-2 text-gray-400 line-clamp-2">
								{repo.description || "No description provided."}
							</p>

							{repo.topics.length > 0 && (
								<div className="flex flex-wrap gap-2 mt-4 line-clamp-2">
									{repo.topics.slice(0, 6).map((topic, index) => (
										<span
											key={topic}
											className={`px-3 py-1 text-sm font-semibold text-white rounded-lg ${
												gradients[index % gradients.length]
											}`}
										>
											{topic}
										</span>
									))}
								</div>
							)}

							<div className="flex justify-between mt-4 text-gray-300">
								<span className="flex items-center">
									<FaStar className="mr-1" /> {repo.stargazers_count}
								</span>
								<span className="flex items-center">
									<FaCodeBranch className="mr-1" /> {repo.forks_count}
								</span>
							</div>
						</a>
					))
				)}
			</div>
		</Page>
	);
}
