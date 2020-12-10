const fonts = [
  `0.75rem`,  // font(1)  | 12px
  `0.875rem`, // font(2)  | 14px
  `1rem`,     // font(3)  | 16px
  `1.125rem`, // font(4)  | 18px
  `1.25rem`,  // font(5)  | 20px
  `1.5rem`,   // font(6)  | 24px
  `1.75rem`,  // font(7)  | 28px
  `2rem`,     // font(8)  | 32px
  `2.5rem`,   // font(9)  | 40px
  `3rem`,     // font(10) | 48px
  `3.5rem`,   // font(11) | 56px
  `4rem`,     // font(12) | 64px
  `5.5rem`,   // font(13) | 88px
];


export const font = (size) => {
  return fonts[size - 1];
};
