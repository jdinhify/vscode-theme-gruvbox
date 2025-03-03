import { allColors } from "../../shared";
import { Getter } from "../types";

export const getMakefileColors: Getter = (scheme) => {
	const { yellow2, green2 } = allColors[scheme];
	return [
		{
			scope: "meta.scope.prerequisites",
			settings: {
				foreground: yellow2,
			},
		},
		{
			scope: "entity.name.function.target",
			settings: {
				foreground: green2,
				fontStyle: "bold",
			},
		},
	];
};
