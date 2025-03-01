import { allColors } from "../../shared";
import { Getter } from "../types";

export const getJSTSColors: Getter = (scheme) => {
	const { orange2 } = allColors[scheme];
	return [
		// javascript ---------------------------------------
		{
			scope: ["source.js variable.language"],
			settings: {
				foreground: orange2,
			},
		},
		// typescript ---------------------------------------
		{
			scope: ["source.ts variable.language"],
			settings: {
				foreground: orange2,
			},
		},
	];
};
