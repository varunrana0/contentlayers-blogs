const ColorSwatch = ({ colors }: { colors: string[] }) => {
	return (
		<span className="inline-flex flex-wrap flex-none md:gap-4 gap-2 w-fit">
			{colors &&
				Array.isArray(colors) &&
				colors.map((color: string, index: number) => (
					<span
						className="w-5 h-5 md:w-10 md:h-10 ring-2 ring-black rounded-full"
						key={index}
						style={{ backgroundColor: color }}></span>
				))}
			{colors && typeof colors === "string" && (
				<span
					className="w-5 h-5 md:w-10 md:h-10 ring-2 ring-black rounded-full"
					style={{ backgroundColor: colors }}></span>
			)}
		</span>
	);
};

export default ColorSwatch;
