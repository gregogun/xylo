import { createBreakpoints } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from './globals';
import { colors } from './colors';
import { Heading, Text, fonts, textStyles } from './typography';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '90em',
  '3xl': '120em'
});

const overrides = {
  breakpoints,
  globalStyles,
  colors,
  fonts,
  textStyles
  // components: {
  //   Heading,
  //   Text
  // }
};

export default extendTheme(overrides);
