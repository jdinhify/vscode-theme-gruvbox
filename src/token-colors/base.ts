import { allColors } from "../shared";
import { Getter } from "./types";

export const getBaseTokenColors: Getter = (scheme) => {
	const {
		fg1,
		fg2,
		fg4,
		red1,
		red2,
		orange2,
		yellow1,
		yellow2,
		green2,
		aqua1,
		aqua2,
		blue1,
		blue2,
		purple1,
		purple2,
		grey,
	} = allColors[scheme];
	return [
		{
			settings: {
				foreground: fg1,
			},
		},
		{
			scope: "emphasis",
			settings: {
				fontStyle: "italic",
			},
		},
		{
			scope: "strong",
			settings: {
				fontStyle: "bold",
			},
		},
		{
			scope: "header",
			settings: {
				foreground: blue1,
			},
		},
		{
			scope: ["comment", "punctuation.definition.comment"],
			settings: {
				foreground: grey,
				fontStyle: "italic",
			},
		},
		{
			scope: ["constant", "support.constant", "variable.arguments"],
			settings: {
				foreground: purple2,
			},
		},
		{
			scope: "constant.rgb-value",
			settings: {
				foreground: fg1,
			},
		},
		{
			scope: "entity.name.selector",
			settings: {
				foreground: aqua2,
			},
		},
		{
			scope: "entity.other.attribute-name",
			settings: {
				foreground: yellow2,
			},
		},
		{
			scope: ["entity.name.tag", "punctuation.tag"],
			settings: {
				foreground: aqua2,
			},
		},
		{
			scope: ["invalid", "invalid.illegal"],
			settings: {
				foreground: red1,
			},
		},
		{
			scope: "invalid.deprecated",
			settings: {
				foreground: purple1,
			},
		},
		{
			scope: "meta.selector",
			settings: {
				foreground: aqua2,
			},
		},
		{
			scope: "meta.preprocessor",
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: "meta.preprocessor.string",
			settings: {
				foreground: green2,
			},
		},
		{
			scope: "meta.preprocessor.numeric",
			settings: {
				foreground: green2,
			},
		},
		{
			scope: "meta.header.diff",
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: "storage",
			settings: {
				foreground: red2,
			},
		},
		{
			scope: ["storage.type", "storage.modifier"],
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: "string",
			settings: {
				foreground: green2,
			},
		},
		{
			scope: "string.tag",
			settings: {
				foreground: green2,
			},
		},
		{
			scope: "string.value",
			settings: {
				foreground: green2,
			},
		},
		{
			scope: "string.regexp",
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: "string.escape",
			settings: {
				foreground: red2,
			},
		},
		{
			scope: "string.quasi",
			settings: {
				foreground: aqua2,
			},
		},
		{
			scope: "string.entity",
			settings: {
				foreground: green2,
			},
		},
		{
			scope: "object",
			settings: {
				foreground: fg1,
			},
		},
		{
			scope: "module.node",
			settings: {
				foreground: blue2,
			},
		},
		{
			scope: "support.type.property-name",
			settings: {
				foreground: aqua1,
			},
		},
		{
			scope: "keyword",
			settings: {
				foreground: red2,
			},
		},
		{
			scope: "keyword.control",
			settings: {
				foreground: red2,
			},
		},
		{
			scope: "keyword.control.module",
			settings: {
				foreground: aqua2,
			},
		},
		{
			scope: "keyword.control.less",
			settings: {
				foreground: yellow1,
			},
		},
		{
			scope: "keyword.operator",
			settings: {
				foreground: aqua2,
			},
		},
		{
			scope: "keyword.operator.new",
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: "keyword.other.unit",
			settings: {
				foreground: green2,
			},
		},
		{
			scope: "metatag.php",
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: "support.function.git-rebase",
			settings: {
				foreground: aqua1,
			},
		},
		{
			scope: "constant.sha.git-rebase",
			settings: {
				foreground: green2,
			},
		},
		{
			name: "Types declaration and references",
			scope: [
				"meta.type.name",
				"meta.return.type",
				"meta.return-type",
				"meta.cast",
				"meta.type.annotation",
				"support.type",
				"storage.type.cs",
				"variable.class",
			],
			settings: {
				foreground: yellow2,
			},
		},
		{
			scope: ["variable.this", "support.variable"],
			settings: {
				foreground: purple2,
			},
		},
		{
			scope: [
				"entity.name",
				"entity.static",
				"entity.name.class.static.function",
				"entity.name.function",
				"entity.name.class",
				"entity.name.type",
			],
			settings: {
				foreground: yellow2,
			},
		},
		{
			name: "Function declarations",
			scope: ["entity.function", "entity.name.function.static"],
			settings: {
				foreground: aqua2,
			},
		},
		{
			scope: "entity.name.function.function-call",
			settings: {
				foreground: aqua2,
			},
		},
		{
			scope: "support.function.builtin",
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: [
				"entity.name.method",
				"entity.name.method.function-call",
				"entity.name.static.function-call",
			],
			settings: {
				foreground: aqua1,
			},
		},
		{
			scope: "brace",
			settings: {
				foreground: fg2,
			},
		},
		{
			name: "variables",
			scope: [
				"meta.parameter.type.variable",
				"variable.parameter",
				"variable.name",
				"variable.other",
				"variable",
				"string.constant.other.placeholder",
			],
			settings: {
				foreground: blue2,
			},
		},
		{
			scope: "prototype",
			settings: {
				foreground: purple2,
			},
		},
		{
			scope: ["punctuation"],
			settings: {
				foreground: fg4,
			},
		},
		{
			scope: "punctuation.quoted",
			settings: {
				foreground: fg1,
			},
		},
		{
			scope: "punctuation.quasi",
			settings: {
				foreground: red2,
			},
		},
		{
			name: "URL",
			scope: ["*url*", "*link*", "*uri*"],
			settings: {
				fontStyle: "underline",
			},
		},
	];
};
