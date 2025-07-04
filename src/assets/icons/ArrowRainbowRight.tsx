export const ArrowRainbowRight = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="48"
		height="48"
		viewBox="0 0 24 24"
	>
		<defs>
			<linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" style={{ stopColor: "#6366F1" }} />
				<stop offset="12.5%" style={{ stopColor: "#BFDBFE" }} />
				<stop offset="25%" style={{ stopColor: "#93C5FD" }} />
				<stop offset="37.5%" style={{ stopColor: "#F9A8D4" }} />
				<stop offset="50%" style={{ stopColor: "#93C5FD" }} />
				<stop offset="62.5%" style={{ stopColor: "#BFDBFE" }} />
				<stop offset="100%" style={{ stopColor: "#6366F1" }} />
			</linearGradient>
		</defs>
		<path
			d="M9 5l7 7-7 7"
			stroke="url(#grad)"
			strokeWidth="2"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
