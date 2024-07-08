export const hashStringToInt = (s) => {
  let hash = 0;
  for (let i = 0; i < s.length; i += 1) {
    // eslint-disable-next-line no-bitwise
    hash = s.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
};

export const intToRGB = (i) => {
  // eslint-disable-next-line no-bitwise
  let c = (i & 0x00ffffff).toString(16).toUpperCase();
  c = '00000'.substring(0, 6 - c.length) + c;

  let r = parseInt(c.substring(0, 2), 16);
  let g = parseInt(c.substring(2, 4), 16);
  let b = parseInt(c.substring(4, 6), 16);

  r = Math.min(r + 100, 255);
  g = Math.min(g + 100, 255);
  b = Math.min(b + 100, 255);

  // eslint-disable-next-line no-bitwise
  return ((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase();
};

export const getColorFromName = (name) => {
  const hash = hashStringToInt(name);
  const color = intToRGB(hash);
  return `#${color}`;
};
