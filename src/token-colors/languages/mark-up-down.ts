import { allColors } from "../../shared";
import { Getter } from "../types";

export const getMarkUpDownColors: Getter = (scheme) => {
	const { orange1, orange2, green1, green2, blue2, aqua2, purple2, grey } =
		allColors[scheme];
	return [
		{
			scope: "markup.underline",
			settings: {
				fontStyle: "underline",
			},
		},
		{
			scope: "string.other.link.title.markdown",
			settings: {
				foreground: grey,
				fontStyle: "underline",
			},
		},
		{
			scope: "markup.underline.link",
			settings: {
				foreground: purple2,
			},
		},
		{
			scope: "markup.bold",
			settings: {
				fontStyle: "bold",
				foreground: orange2,
			},
		},
		{
			scope: "markup.heading",
			settings: {
				fontStyle: "bold",
				foreground: orange2,
			},
		},
		{
			scope: "markup.italic",
			settings: {
				fontStyle: "italic",
			},
		},
		{
			scope: "markup.inserted",
			settings: {
				foreground: green2,
			},
		},
		{
			scope: "markup.deleted",
			settings: {
				foreground: orange1,
			},
		},
		{
			scope: "markup.changed",
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: "markup.punctuation.quote.beginning",
			settings: {
				foreground: green1,
			},
		},
		{
			scope: "markup.punctuation.list.beginning",
			settings: {
				foreground: blue2,
			},
		},
		{
			scope: ["markup.inline.raw", "markup.fenced_code.block"],
			settings: {
				foreground: aqua2,
			},
		},
	];
};
