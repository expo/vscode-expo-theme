import { hslToHex } from './colors';
import { Theme, TokenColor } from './types';

/** A simplified notation that supports auto-converting HSL colors to hex */
export interface ThemeBlueprint extends Pick<Theme, 'colors'> {
  tokenColors: Record<string, string | Omit<TokenColor, 'scope'>>;
}

/** Convert a theme blueprint to a finalized text mate theme */
export function makeTheme(blueprint: ThemeBlueprint) {
  const theme: Theme = {
    $schema: 'vscode://schemas/color-theme',
    tokenColors: [],
    colors: {},
  };

  for (const scope in blueprint.colors) {
    theme.colors[scope] = hslToHex(blueprint.colors[scope]) ?? blueprint.colors[scope];
  }

  for (const scope in blueprint.tokenColors) {
    theme.tokenColors.push(makeTokenColor(scope, blueprint.tokenColors[scope]));
  }

  return theme;
}

/** Convert a single token color to  */
function makeTokenColor(scope: string, definition: ThemeBlueprint['tokenColors'][string]) {
  return typeof definition !== 'string'
    ? { ...definition, scope }
    : { name: scope, scope, settings: { foreground: hslToHex(definition) ?? definition } };
}
