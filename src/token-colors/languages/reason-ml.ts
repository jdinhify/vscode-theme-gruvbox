import { allColors } from "../../shared";
import { Getter } from "../types";

export const getReasonMLColors: Getter = (scheme) => {
	const { blue2, orange2, green2, aqua2 } = allColors[scheme];
	return [
		{
			name: "ReasonML String",
			scope: ["source.reason string.double", "source.reason string.regexp"],
			settings: {
				foreground: green2,
			},
		},
		{
			name: "ReasonML equals sign",
			scope: ["source.reason keyword.control.less"],
			settings: {
				foreground: aqua2,
			},
		},
		{
			name: "ReasonML variable",
			scope: ["source.reason entity.name.function"],
			settings: {
				foreground: blue2,
			},
		},
		{
			name: "ReasonML property",
			scope: [
				"source.reason support.property-value",
				"source.reason entity.name.filename",
			],
			settings: {
				foreground: orange2,
			},
		},
	];
};
