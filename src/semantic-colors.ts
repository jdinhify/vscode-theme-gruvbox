import { allColors, ColorScheme } from "./shared";

export const getSemanticColors = (scheme: ColorScheme) => {
	const { red2, orange2, blue2, aqua2, green2, purple2, yellow1, fg1 } =
		allColors[scheme];
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
		"namespace:python": yellow1,
		// C# reports modifiers, declarations and literals as one "keyword" type,
		// so match the textmate colours of the most common ones instead of red
		"keyword:csharp": orange2,
		// controlKeyword is a subtype of keyword, so it needs its own rule
		"controlKeyword:csharp": red2,
		"method:csharp": green2,
		"extensionMethod:csharp": green2,
		"namespace:csharp": green2,
		"variable:csharp": aqua2,
	};
};
