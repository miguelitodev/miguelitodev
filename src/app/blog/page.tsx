import { fetchPages } from "@/lib/notion";

export default async function Blog() {
	const pages = await fetchPages();
	console.log(pages);
	return (
		<div>
			{pages.results.map((pages: any) => (
				<div key={pages.id}>
					<span>{pages.properties.Name.title[0].plain_text}</span>
				</div>
			))}
		</div>
	);
}
