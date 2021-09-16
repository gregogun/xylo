import Logo from '@/components/icons/logo';
import { Center, Heading, Link, Flex, Box, Icon } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Custom404() {
  return (
    <Box px="2rem">
      <Icon boxSize="6rem" as={Logo} />
      <Center w="100vw" h="80vh">
        <Flex direction="column" align="center">
          <Heading mb="2rem">Sorry, we were unable to find that page.</Heading>
          <NextLink href="/" passHref>
            <Link>Back to home</Link>
          </NextLink>
        </Flex>
      </Center>
    </Box>
  );
}
