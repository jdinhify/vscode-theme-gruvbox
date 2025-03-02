import { ColorContrast, ColorScheme } from "../shared";

export type Getter = (
	scheme: ColorScheme,
	contrast: ColorContrast,
) => Record<string, string>;
