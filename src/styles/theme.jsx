export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    gray: '#898888',
    avatarBackground: '#c9c7c7',
    blue: '#558bee',
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '20px',
    extraLarge: '36px',
  },

  fontWeights: {
    normal: '400',
    semiBold: '600',
    extraBold: '800',
  },

  borderRadius: {
    wrapperBorder: '40px',
    itemBorder: '10px',
  },

  spacing: value => `${4 * value}px`,

  shadows: {
    small:
      '8px 8px 8px 0 rgba(0, 0, 0, 0.323), 0 8px 6px 0 rgba(0, 0, 0, 0.19)',
    regular:
      '8px 8px 8px 8px rgba(0, 0, 0, 0.323), 8px 8px 20px 8px rgba(0, 0, 0, 0.19)',
  },
});
