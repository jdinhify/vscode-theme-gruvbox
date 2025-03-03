import { allColors } from "../../shared";
import { Getter } from "../types";

export const getJsonColors: Getter = (scheme) => {
	const { green2 } = allColors[scheme];
	return [
		{
			scope: "string.quoted.double.json",
			settings: {
				foreground: green2,
			},
		},
	];
};
