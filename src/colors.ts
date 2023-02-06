const convertHslToHex = require('hsl-to-hex');

const HSL_PATTERN = /^hsl\(([\d]+),\s+([\d.]+)%,\s+([\d.]+)%\)$/i;

/** Convert a hsl noted color to the equivalent hex value */
export function hslToHex(value: string) {
  const matches = value.match(HSL_PATTERN);

  if (!matches) {
    return null;
  }

  const hue = parseFloat(matches[1]);
  const saturation = parseFloat(matches[2]);
  const luminosity = parseFloat(matches[3]);

  // TODO(cedric): try to remove the library
  return convertHslToHex(hue, saturation, luminosity);
}
