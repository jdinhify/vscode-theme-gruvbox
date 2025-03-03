import { allColors } from "../../shared";
import { Getter } from "../types";

export const getGolangColors: Getter = (scheme) => {
	const { fg1, yellow2, green2, aqua2, blue2, purple2 } = allColors[scheme];
	return [
		{
			scope: ["source.go storage.type"],
			settings: {
				foreground: yellow2,
			},
		},
		{
			scope: ["source.go entity.name.import"],
			settings: {
				foreground: green2,
			},
		},
		{
			scope: ["source.go keyword.package", "source.go keyword.import"],
			settings: {
				foreground: aqua2,
			},
		},
		{
			scope: ["source.go keyword.interface", "source.go keyword.struct"],
			settings: {
				foreground: blue2,
			},
		},
		{
			scope: ["source.go entity.name.type"],
			settings: {
				foreground: fg1,
			},
		},
		{
			scope: ["source.go entity.name.function"],
			settings: {
				foreground: purple2,
			},
		},
	];
};
