import { allColors } from "../../shared";
import { Getter } from "../types";

export const getCColors: Getter = (scheme) => {
	const { aqua2, yellow2, green2, purple2 } = allColors[scheme];
	return [
		// C C++ ----------------------------------------
		{
			scope: "keyword.control.directive",
			settings: {
				foreground: aqua2,
			},
		},
		{
			scope: "support.function.C99",
			settings: {
				foreground: yellow2,
			},
		},
		// C# ----------------------------------------
		{
			name: "C# functions & namespace",
			scope: [
				"meta.function.cs",
				"entity.name.function.cs",
				"entity.name.type.namespace.cs",
			],
			settings: {
				foreground: green2,
			},
		},
		{
			name: "C# Variables",
			scope: [
				"keyword.other.using.cs",
				"entity.name.variable.field.cs",
				"entity.name.variable.local.cs",
				"variable.other.readwrite.cs",
			],
			settings: {
				foreground: aqua2,
			},
		},
		{
			name: "C# This",
			scope: ["keyword.other.this.cs", "keyword.other.base.cs"],
			settings: {
				foreground: purple2,
			},
		},
	];
};
