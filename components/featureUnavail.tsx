import { Box, Center, Heading, Icon } from '@chakra-ui/react';
import { FiLock } from 'react-icons/fi';

export default function FeatureUnavailable({ title }) {
  return (
    <Box w="100%" h="100%">
      <Heading m="2rem 2rem 8rem 2rem">{title}</Heading>
      <Center>
        <Box maxW="40rem" mx="auto" p="2rem" borderRadius="lg">
          <Icon
            display="block"
            mx="auto"
            mb="2rem"
            boxSize="8rem"
            as={FiLock}
          />
          <Heading fontSize="xl" textAlign="center">
            This feature is currently unavailable. You can find updates on our
            progress on Github.
          </Heading>
        </Box>
      </Center>
    </Box>
  );
}
