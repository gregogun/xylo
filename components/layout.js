import { Divider, Flex, List, ListItem, VStack } from '@chakra-ui/react';

const Nav = () => {
  return (
    <VStack
      bg="gray.1"
      borderRadius="md"
      h="100%"
      p="2rem 6rem 2rem 2rem"
      as="aside"
      role="navigation"
    >
      <List fontSize="md">
        <ListItem mb="200px">Aqua</ListItem>
        <ListItem mb="1rem">Overview</ListItem>
        <ListItem mb="1rem">Transactions</ListItem>
        <ListItem mb="1rem">Accounts</ListItem>
        <ListItem mb="2rem">Analytics</ListItem>
        <Divider h="1px" w="100%" bg="gray.2" mb="2rem" />
        <ListItem mb="1rem">Profile</ListItem>
        <ListItem>Settings</ListItem>
      </List>
    </VStack>
  );
};

const Layout = ({ children }) => {
  return (
    <Flex
      mx="auto"
      w="100vw"
      h="100vh"
      boxSizing="border-box"
      p="1rem 1rem 0 1rem"
      maxW="1440px"
      overflow="hidden"
    >
      <Nav />
      {children}
    </Flex>
  );
};

export default Layout;
