import { allColors } from "../../shared";
import { Getter } from "../types";

export const getCucumberColors: Getter = (scheme) => {
	const { blue2 } = allColors[scheme];
	return [
		{
			scope: ["keyword.control.cucumber.table"],
			settings: {
				foreground: blue2,
			},
		},
	];
};
