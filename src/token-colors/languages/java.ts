import { allColors } from "../../shared";
import { Getter } from "../types";

export const getJavaColors: Getter = (scheme) => {
	const { aqua2, blue2, fg1, green2, yellow2, fg3 } = allColors[scheme];
	return [
		{
			name: "coloring of the Java import and package identifiers",
			scope: ["storage.modifier.import.java", "storage.modifier.package.java"],
			settings: {
				foreground: fg3,
			},
		},
		{
			scope: ["keyword.other.import.java", "keyword.other.package.java"],
			settings: {
				foreground: aqua2,
			},
		},
		{
			scope: "storage.type.java",
			settings: {
				foreground: yellow2,
			},
		},
		{
			scope: "storage.type.annotation",
			settings: {
				foreground: blue2,
				fontStyle: "bold",
			},
		},
		{
			scope: "keyword.other.documentation.javadoc",
			settings: {
				foreground: aqua2,
			},
		},
		{
			scope: "comment.block.javadoc variable.parameter.java",
			settings: {
				foreground: green2,
				fontStyle: "bold",
			},
		},
		{
			scope: [
				"source.java variable.other.object",
				"source.java variable.other.definition.java",
			],
			settings: {
				foreground: fg1,
			},
		},
	];
};
