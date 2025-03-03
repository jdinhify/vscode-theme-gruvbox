import { allColors } from "../../shared";
import { Getter } from "../types";

export const getShellColors: Getter = (scheme) => {
	const { red2, orange2, aqua2 } = allColors[scheme];
	return [
		{
			scope: "keyword.operator.logical",
			settings: {
				foreground: red2,
			},
		},
		{
			scope: "punctuation.definition.logical-expression",
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: [
				"string.interpolated.dollar.shell",
				"string.interpolated.backtick.shell",
			],
			settings: {
				foreground: aqua2,
			},
		},
	];
};
