import { createBreakpoints } from '@chakra-ui/theme-tools';
import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { styles } from './globals';
import { colors } from './colors';
import { Heading, Text, fonts, textStyles } from './typography';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '90em',
  '3xl': '120em',
});

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const overrides = {
  breakpoints,
  styles,
  colors,
  fonts,
  textStyles,
  config,
  // components: {
  //   Heading,
  //   Text
  // }
};

export default extendTheme(overrides);
