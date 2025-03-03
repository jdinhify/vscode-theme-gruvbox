import { allColors } from "../../shared";
import { Getter } from "../types";

export const getCSSColors: Getter = (scheme) => {
	const { orange2, fg1, green2, red2, orange1 } = allColors[scheme];
	return [
		{
			scope: "entity.other.attribute-name.css",
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: "source.css meta.selector",
			settings: {
				foreground: fg1,
			},
		},
		{
			scope: "support.type.property-name.css",
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: "entity.other.attribute-name.class",
			settings: {
				foreground: green2,
			},
		},
		{
			scope: [
				"source.css support.function.transform",
				"source.css support.function.timing-function",
				"source.css support.function.misc",
			],
			settings: {
				foreground: red2,
			},
		},
		{
			name: "CSS property value",
			scope: [
				"support.property-value",
				"constant.rgb-value",
				"support.property-value.scss",
				"constant.rgb-value.scss",
			],
			settings: {
				foreground: orange1,
			},
		},
		{
			scope: ["entity.name.tag.css"],
			settings: {
				fontStyle: "",
			},
		},
	];
};
