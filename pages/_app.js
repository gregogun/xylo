import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '@/styles/theme';
import '@fontsource/epilogue/400.css';
import '@fontsource/epilogue/600.css';
import '@fontsource/inter';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
