import { hslToHex } from './colors';
import { Theme, TokenColor } from './types';

type TokenColorValueBlueprint = string | Omit<TokenColor, 'scope'>;

interface NestedTokenColorBlueprint {
  [scope: string]: TokenColorValueBlueprint | NestedTokenColorBlueprint;
}

/** A simplified notation that supports auto-converting HSL colors to hex */
export interface ThemeBlueprint extends Pick<Theme, 'colors'> {
  tokenColors: NestedTokenColorBlueprint;
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
    theme.tokenColors.push(...makeTokenColors(scope, blueprint.tokenColors[scope]));
  }

  return theme;
}

/** Convert a single token color to  */
function makeTokenColors(
  scope: string,
  definition: NestedTokenColorBlueprint[string]
): TokenColor[] {
  if (typeof definition === 'string') {
    return [{ name: scope, scope, settings: { foreground: hslToHex(definition) ?? definition } }];
  }

  if (isTokenColor(definition)) {
    const { foreground } = definition.settings;
    if (foreground) {
      definition.settings.foreground = hslToHex(foreground) ?? foreground;
    }

    return [{ ...definition, scope }];
  }

  return Object.entries(definition)
    .map(([subscope, subdefintion]) => makeTokenColors(`${scope} ${subscope}`, subdefintion))
    .flat();
}

/** Check if a unioned nested token color definition, is actually a non-nested token definition */
function isTokenColor(definition: NestedTokenColorBlueprint[string]): definition is TokenColor {
  return typeof definition === 'object' && ('name' in definition || 'settings' in definition);
}
