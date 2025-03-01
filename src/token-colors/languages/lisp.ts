import { allColors } from "../../shared";
import { Getter } from "../types";

export const getLispColors: Getter = (scheme) => {
	const { yellow2 } = allColors[scheme];
	return [
		{
			name: "Lisp optional function parameters",
			scope: "meta.function-parameters.lisp",
			settings: {
				foreground: yellow2,
			},
		},
	];
};
