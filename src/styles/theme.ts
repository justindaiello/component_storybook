import { rem } from 'polished';

export type FontTypes = {
  h6FontSize: string;
  h4FontSize: string;
  h2FontSize: string;
  h1FontSize: string;
  fontSizeLg: string;
};

export type ColorTypes = {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  black: string;
  white: string;
  danger: string;
  warning: string;
  gray100: string;
  gray200: string;
  gray300: string;
};

const theme: object = {
  // *********************
  // ** Color Variables **
  // *********************

  primary: '#3c2370',
  secondary: '#e75aa1',
  tertiary: '#685bd5',
  quaternary: '#20add1',
  black: '#111219',
  white: '#ffffff',
  danger: '#bf0a30',
  warning: '#edcc65',
  gray100: '#eef3f9',
  gray200: '#bcc8d9',
  gray300: '#8591a8',

  // ****************
  // ** Typography **
  // ****************

  // Body
  fontSizeXs: rem(10),
  fontSizeSm: rem(12),
  fontSizeMd: rem(14),
  fontSizeLg: rem(16),
  fontSizeXl: rem(20),

  // Headers
  h1FontSize: rem(40),
  h2FontSize: rem(34),
  h3FontSize: rem(28),
  h4FontSize: rem(24),
  h5FontSize: rem(20),
  h6FontSize: rem(16),

  // *************************
  // ** Borders and Shadows **
  // *************************

  lightBoxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
  boxShadow: '0px 0px 10px rgba(156, 156, 156, 0.5)',
  boxShadowBottom: '0px 3px 6px rgba(156, 156, 156, 0.5)',
  borderRadiusLg: '30px',
  borderRadius: '9px',
  borderRadiusSm: '6px',
  borderRadiusMd: '19px',
};

export default theme;
