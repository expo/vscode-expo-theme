/** A single token color definiton */
export interface TokenColor {
  name: string;
  scope: string;
  settings: Record<string, string>;
}

/**
 * The text mate theme format for vscode
 * @see https://github.com/microsoft/vscode/blob/main/src/vs/workbench/services/themes/common/colorThemeSchema.ts#L222-L253
 */
export interface Theme {
  $schema: 'vscode://schemas/color-theme';
  colors: Record<string, string>;
  tokenColors: TokenColor[];
}
