import * as convert from 'color-convert';

export const hexToRgb = (hex: string) => {
  return convert.hex.rgb(hex).join(', ');
};

export const hexToHsl = (hex: string, lightnessPercent: number) => {
  const [h, s, l] = convert.hex.hsl(hex);
  return `hsl(${h}, ${s}%, ${l * lightnessPercent}%)`;
};
