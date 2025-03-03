import { ColorScheme, allColors } from "../../shared";
import { Getter } from "../types";

export const getJupyterNotebookColors: Getter = (scheme: ColorScheme) => {
	const colors = allColors[scheme];
	const { bg1, fg4, bg2 } = colors;

	return {
		"notebook.cellEditorBackground": bg1,
		"notebook.focusedCellBorder": fg4,
		"notebook.cellBorderColor": bg2,
		"notebook.focusedEditorBorder": bg2,
	};
};
