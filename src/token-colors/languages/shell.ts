import { allColors } from "../../shared";
import { Getter } from "../types";

export const getShellColors: Getter = (scheme) => {
	const { orange2, aqua2 } = allColors[scheme];
	return [
		{
			scope: "meta.statement.command.name.shell entity.name",
			settings: {
				foreground: orange2,
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
