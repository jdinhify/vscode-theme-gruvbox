import { allColors } from "../../shared";
import { Getter } from "../types";

export const getPythonColors: Getter = (scheme) => {
	const { aqua2, red2, blue2, fg2, yellow2 } = allColors[scheme];
	return [
		{
			name: "Python function",
			scope: ["meta.function.python", "entity.name.function.python"],
			settings: {
				foreground: aqua2,
			},
		},
		{
			name: "Python Function and Class definition keywords",
			scope: [
				"storage.type.function.python",
				"storage.modifier.declaration",
				"storage.type.class.python",
				"storage.type.string.python",
			],
			settings: {
				foreground: red2,
			},
		},
		{
			name: "Async keyword",
			scope: ["storage.type.function.async.python"],
			settings: {
				foreground: red2,
			},
		},
		{
			name: "Python Function Call",
			scope: "meta.function-call.generic",
			settings: {
				foreground: blue2,
			},
		},
		{
			name: "Python Function Arguments",
			scope: "meta.function-call.arguments",
			settings: {
				foreground: fg2,
			},
		},
		{
			name: "Python Function decorator",
			scope: "entity.name.function.decorator",
			settings: {
				foreground: yellow2,
				fontStyle: "bold",
			},
		},
		{
			name: "Python ALL CAPS",
			scope: "constant.other.caps",
			settings: {
				fontStyle: "bold",
			},
		},
	];
};
