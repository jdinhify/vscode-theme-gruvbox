export type ColorKey =
	| "bg0_hard"
	| "bg0_medium"
	| "bg0_soft"
	| "bg1"
	| "bg2"
	| "bg3"
	| "bg4"
	| "grey"
	| "fg0"
	| "fg1"
	| "fg2"
	| "fg3"
	| "fg4"
	| "red1"
	| "red2"
	| "green1"
	| "green2"
	| "yellow1"
	| "yellow2"
	| "blue1"
	| "blue2"
	| "purple1"
	| "purple2"
	| "aqua1"
	| "aqua2"
	| "orange1"
	| "orange2"
	| "transparent";
export type ColorScheme = "dark" | "light";
export type ColorContrast = "hard" | "medium" | "soft";

export const allColors: Record<ColorScheme, Record<ColorKey, `#${string}`>> = {
	dark: {
		bg0_hard: "#1d2021",
		bg0_medium: "#282828",
		bg0_soft: "#32302f",
		bg1: "#3c3836",
		bg2: "#504945",
		bg3: "#665c54",
		bg4: "#7c6f64",
		grey: "#928374",
		fg0: "#fbf1c7",
		fg1: "#ebdbb2",
		fg2: "#d5c4a1",
		fg3: "#bdae93",
		fg4: "#a89984",
		red1: "#cc241d",
		red2: "#fb4934",
		green1: "#98971a",
		green2: "#b8bb26",
		yellow1: "#d79921",
		yellow2: "#fabd2f",
		blue1: "#458588",
		blue2: "#83a598",
		purple1: "#b16286",
		purple2: "#d3869b",
		aqua1: "#689d6a",
		aqua2: "#8ec07c",
		orange1: "#d65d0e",
		orange2: "#fe8019",
		transparent: "#0000",
	},
	light: {
		bg0_hard: "#f9f5d7",
		bg0_medium: "#fbf1c7",
		bg0_soft: "#f2e5bc",
		bg1: "#ebdbb2",
		bg2: "#d5c4a1",
		bg3: "#bdae93",
		bg4: "#a89984",
		grey: "#928374",
		fg0: "#282828",
		fg1: "#3c3836",
		fg2: "#504945",
		fg3: "#665c54",
		fg4: "#7c6f64",
		red1: "#cc241d",
		red2: "#9d0006",
		green1: "#98971a",
		green2: "#79740e",
		yellow1: "#d79921",
		yellow2: "#b57614",
		blue1: "#458588",
		blue2: "#076678",
		purple1: "#b16286",
		purple2: "#8f3f71",
		aqua1: "#689d6a",
		aqua2: "#427b58",
		orange1: "#d65d0e",
		orange2: "#af3a03",
		transparent: "#0000",
	},
};

// https://stackoverflow.com/a/39495173
type Enumerate<
	N extends number,
	Acc extends number[] = [],
> = Acc["length"] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc["length"]]>;
type IntRange<F extends number, T extends number> = Exclude<
	Enumerate<T>,
	Enumerate<F>
>;

export const withAlpha = (color: `#${string}`, alpha: IntRange<0, 256>) => {
	return `${color}${alpha.toString(16).padStart(2, "0")}`;
};
