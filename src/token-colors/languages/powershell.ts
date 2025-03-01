import { allColors } from "../../shared";
import { Getter } from "../types";

export const getPowershellColors: Getter = (scheme) => {
	const { orange2, yellow2, fg3 } = allColors[scheme];
	return [
		{
			name: "Powershell member",
			scope: ["source.powershell variable.other.member.powershell"],
			settings: {
				foreground: orange2,
			},
		},
		{
			name: "Powershell function",
			scope: ["source.powershell support.function.powershell"],
			settings: {
				foreground: yellow2,
			},
		},
		{
			name: "Powershell function attribute",
			scope: ["source.powershell support.function.attribute.powershell"],
			settings: {
				foreground: fg3,
			},
		},
		{
			name: "Powershell hashtable member",
			scope: [
				"source.powershell meta.hashtable.assignment.powershell variable.other.readwrite.powershell",
			],
			settings: {
				foreground: orange2,
			},
		},
	];
};
