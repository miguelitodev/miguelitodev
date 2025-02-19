export function Footer() {
	return (
		<div className="text-white font-light text-xs mt-10 p-6 w-full flex justify-between items-center max-md:flex-col max-md:gap-2">
			<div>© 2025 Miguel Riquelme. All rights reserved.</div>

			<div className="flex space-x-4">
				<a
					href="/pdfs/curriculum-ptBR.pdf"
					download
					className="text-white font-medium hover:text-gray-400 transition duration-300"
				>
					Curriculum pt-BR
				</a>
				<a
					href="/pdfs/curriculum-enUS.pdf"
					download
					className="text-white font-medium hover:text-gray-400 transition duration-300"
				>
					Curriculum en-US
				</a>
			</div>
		</div>
	);
}
