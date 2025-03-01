import { ColorScheme, ColorContrast, allColors } from "../../shared";

export const getJupyterNotebookColors = (
	scheme: ColorScheme,
	contrast: ColorContrast,
) => {
	const colors = allColors[scheme];
	const { bg1, fg4, bg2 } = colors;

	return {
		"notebook.cellEditorBackground": bg1,
		"notebook.focusedCellBorder": fg4,
		"notebook.cellBorderColor": bg2,
		"notebook.focusedEditorBorder": bg2,
	};
};
