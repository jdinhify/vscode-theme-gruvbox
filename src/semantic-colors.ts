import { allColors, ColorScheme } from "./shared";

export const getSemanticColors = (scheme: ColorScheme) => {
	const { orange2, blue2, aqua2, purple2, fg1 } = allColors[scheme];
	return {
		"constant.builtin": purple2,
		property: blue2,
		"property:python": fg1,
		parameter: blue2,
		variable: fg1,
		function: aqua2,
		"function.builtin": orange2,
		method: aqua2,
		component: orange2,
	};
};
