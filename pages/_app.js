import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '@/styles/theme';
import '@fontsource/epilogue';
import '@fontsource/inter';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
