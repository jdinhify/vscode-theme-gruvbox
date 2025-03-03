import { allColors } from "../../shared";
import { Getter } from "../types";

export const getXMLHTMLColors: Getter = (scheme) => {
	const { aqua2, blue2 } = allColors[scheme];
	return [
		{
			scope: ["punctuation.definition.tag"],
			settings: {
				foreground: blue2,
			},
		},
		{
			scope: ["text.html entity.name.tag", "text.html punctuation.tag"],
			settings: {
				foreground: aqua2,
				fontStyle: "bold",
			},
		},
	];
};
