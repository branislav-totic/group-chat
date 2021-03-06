const colors = {
    blue: '#2d9cdb',
    'blue-dark': `#2f80ed`,
    'blue-light': `#6ebbe6`,
    'blue-1': `#2f80ed`,
    gray: `#828282`,
    'gray-light': `#bdbdbd`,
    black: `#120f13`,
    'black-dark': `#0b090c`,
    'black-medium': `#252329`,
    'black-light': `#3C393F`,
    red: `#EB5757`,
    white: `#fff`,
}


export const color = (name) => {
  return colors[name];
};

// This function takes a string as an argument
// (either a siesta color keyword,or hex value)
// and returns the color hex value in either case
export const colorNormalize = (str) => {
  if (str[0] === `#`) {
    return str;
  } else {
    return color(str);
  }
};
