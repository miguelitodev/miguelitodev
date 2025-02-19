/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-redundant-type-constituents */

import { fetchPages } from "@/lib/notion";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

type PageProperties = {
	Name: { title: { plain_text: string }[] };
	date: { created_time: string };
	description: { rich_text: { plain_text: string }[] };
	image: { url: string | null };
	likes: { number: number };
	slug: { rich_text: { plain_text: string }[] };
};

type PageObjectResponse = {
	id: string;
	properties: PageProperties;
};

export default async function Blog() {
	const pages = await fetchPages();

	return (
		<div className="flex flex-col w-4/6 mx-auto">
			<div className="mb-16">
				<h1 className="text-white text-7xl max-sm:text-4xl max-xs:text-2xl font-bold font-merriweather max-md:mb-4 mb-4">
					<span className="font-mono text-sm text-white">miguelito.dev/</span>
					Blog
				</h1>
				<p className="text-white font-light font-merriweather text-2xl max-xl:text-xl max-md:text-lg max-sm:text-md leading-loose">
					Here, you&apos;ll find articles and posts on a variety of topics that
					I share to inspire, inform, and discuss the latest trends and lessons
					from my professional journey.
				</p>
			</div>
			<div className="flex flex-col justify-center">
				{pages.results.map((page: PageObjectResponse | any) => {
					// Verificação para garantir que page.properties existe
					if ("properties" in page) {
						const properties = page.properties as PageProperties;

						const transformedPage = {
							id: page.id,
							properties: {
								Name: properties.Name,
								date: properties.date,
								description: properties.description,
								image: properties.image,
								likes: properties.likes,
								slug: properties.slug,
							},
						};

						return (
							<ol
								key={transformedPage.id}
								className="relative border-l border-gray-200 dark:border-gray-500"
							>
								<li className="mb-10 ml-4">
									<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-500 dark:bg-gray-200"></div>
									<time className="mb-1 text-sm font-normal font-mono leading-none text-white italic">
										{format(
											transformedPage.properties.date.created_time,
											"MMMM dd, yyyy"
										)}
									</time>
									<div className="relative flex flex-col md:flex-row bg-gradient-to-r from-black via-neutral-900 to-neutral-800 shadow-lg border border-neutral-700 rounded-lg hover:shadow-2xl transition-shadow duration-300 transform group-hover:scale-105 ml-14 max-lg:ml-0 mt-8 w-4/5 max-2xl:w-full min-h-[250px]">
										<div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
											<Image
												width={300}
												height={250}
												src={
													transformedPage.properties.image.url ||
													"https://via.placeholder.com/400"
												}
												alt="card-image"
												className="h-full w-full rounded-md md:rounded-lg object-cover"
											/>
										</div>
										<div className="p-6">
											<h4 className="mb-2 text-white text-xl font-semibold max-sm:text-sm">
												{transformedPage.properties.Name.title[0].plain_text ||
													"Post title"}
											</h4>
											<p className="mb-8 text-slate-300 leading-normal font-light text-sm max-sm:text-xs max-sm:line-clamp-4">
												{transformedPage.properties.description.rich_text[0]
													?.plain_text || "Post description"}
											</p>

											<div className="flex justify-between items-center">
												<Link
													href={`/blog/${transformedPage.properties.slug.rich_text[0].plain_text}`}
													className="text-teal-500 font-semibold text-sm hover:underline flex items-center"
												>
													Read more
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="ml-2 h-4 w-4"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M14 5l7 7m0 0l-7 7m7-7H3"
														/>
													</svg>
												</Link>
												<div className="flex items-center gap-2">
													<FaHeart className="text-red-500" size={20} />
													<span className="text-sm text-white font-mono">
														{transformedPage.properties.likes.number || 0}
													</span>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ol>
						);
					}
					return null; // Caso a page não tenha 'properties', retornar null
				})}
			</div>
		</div>
	);
}
