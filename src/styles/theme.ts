import { rem } from 'polished';

const theme: object = {
  // *********************
  // ** Color Variables **
  // *********************

  purple: '#3c2370',
  pink: '#e75aa1',
  black: '#111219',
  white: '#ffffff',
  darkBlue: '#685bd5',
  lightBlue: '#20add1',
  danger: '#bf0a30',
  warning: '#edcc65',

  // ****************
  // ** Typography **
  // ****************

  fontSizeXs: rem(10),
  fontSizeSm: rem(12),
  fontSizeMd: rem(14),
  fontSizeLg: rem(16),
  fontSizeXl: rem(20),

  // *************************
  // ** Borders and Shadows **
  // *************************

  boxShadow: '0px 0px 10px rgba(156, 156, 156, 0.5)',
  boxShadowBottom: '0px 3px 6px rgba(156, 156, 156, 0.5)',
  borderRadiusSm: '6px',
  borderRadius: '9px',
}

export default theme