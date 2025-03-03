import { promises } from "node:fs";
import { ColorContrast, ColorScheme } from "./shared";
import { getPythonColors } from "./token-colors/languages/python";
import { getShellColors } from "./token-colors/languages/shell";
import { getCColors } from "./token-colors/languages/c";
import { getMakefileColors } from "./token-colors/languages/makefile";
import { getJavaColors } from "./token-colors/languages/java";
import { getLispColors } from "./token-colors/languages/lisp";
import { getMarkUpDownColors } from "./token-colors/languages/mark-up-down";
import { getJsonColors } from "./token-colors/languages/json";
import { getCSSColors } from "./token-colors/languages/css";
import { getXMLHTMLColors } from "./token-colors/languages/xml-html";
import { getJSTSColors } from "./token-colors/languages/js-ts";
import { getGolangColors } from "./token-colors/languages/golang";
import { getCucumberColors } from "./token-colors/languages/cucumber";
import { getReasonMLColors } from "./token-colors/languages/reason-ml";
import { getPowershellColors } from "./token-colors/languages/powershell";
import { getBaseTokenColors } from "./token-colors/base";
import { getSemanticColors } from "./semantic-colors";
import { getBaseColors } from "./colors/base";
import { getJupyterNotebookColors } from "./colors/extensions/jupyter-notebook";
import { getGitLensColors } from "./colors/extensions/gitlens";

const variants: Array<[ColorScheme, ColorContrast]> = [
	["dark", "hard"],
	["dark", "medium"],
	["dark", "soft"],
	["light", "hard"],
	["light", "medium"],
	["light", "soft"],
];

const getName = (scheme: ColorScheme, contrast: ColorContrast) =>
	`Gruvbox ${scheme[0].toUpperCase()}${scheme.slice(1)} ${contrast[0].toUpperCase()}${contrast.slice(1)}`;

const generateJson = (scheme: ColorScheme, contrast: ColorContrast) => {
	return {
		$schema: "vscode://schemas/color-theme",
		name: getName(scheme, contrast),
		type: scheme,
		semanticHighlighting: true,
		tokenColors: [
			...getBaseTokenColors(scheme, contrast),
			...getPythonColors(scheme, contrast),
			...getShellColors(scheme, contrast),
			...getCColors(scheme, contrast),
			...getMakefileColors(scheme, contrast),
			...getJavaColors(scheme, contrast),
			...getLispColors(scheme, contrast),
			...getMarkUpDownColors(scheme, contrast),
			...getJsonColors(scheme, contrast),
			...getCSSColors(scheme, contrast),
			...getXMLHTMLColors(scheme, contrast),
			...getJSTSColors(scheme, contrast),
			...getGolangColors(scheme, contrast),
			...getCucumberColors(scheme, contrast),
			...getReasonMLColors(scheme, contrast),
			...getPowershellColors(scheme, contrast),
		],
		colors: {
			...getBaseColors(scheme, contrast),
			...getJupyterNotebookColors(scheme, contrast),
			...getGitLensColors(scheme, contrast),
		},
		semanticTokenColors: getSemanticColors(scheme),
	};
};

const run = async () => {
	await Promise.all(
		variants.map(async ([scheme, contrast]) =>
			promises.writeFile(
				`./themes/gruvbox-${scheme}-${contrast}.json`,
				JSON.stringify(generateJson(scheme, contrast), undefined, "\t"),
			),
		),
	);
	console.log("themes generated\n");
};

run();
