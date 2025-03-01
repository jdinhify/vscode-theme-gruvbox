import { ColorScheme, ColorContrast, allColors } from "../../shared";

export const getJupyterNotebookColors = (
	scheme: ColorScheme,
	contrast: ColorContrast,
) => {
	const colors = allColors[scheme];
	const { bg1, fg4 } = colors;

	return {
		"notebook.cellEditorBackground": "#282828",
		"notebook.focusedCellBorder": fg4,
		"notebook.cellBorderColor": bg1,
		"notebook.focusedEditorBorder": bg1,
	};
};
