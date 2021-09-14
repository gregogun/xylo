import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  List,
  ListItem,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { IconType } from 'react-icons';

const Nav = () => {
  return (
    <VStack
      display={{ base: 'none', xl: 'flex' }}
      bg="gray.1"
      borderRadius="md"
      h="100%"
      p="2rem 6rem 2rem 2rem"
      as="aside"
      role="navigation"
    >
      <List fontSize="md">
        <ListItem mb="200px">
          <Text fontWeight="bold">X Y L O</Text>
        </ListItem>
        <ListItem mb="1rem">Overview</ListItem>
        <ListItem mb="1rem">Transactions</ListItem>
        <ListItem mb="1rem">Accounts</ListItem>
        <ListItem mb="2rem">Analytics</ListItem>
        <Divider h="1px" w="100%" bg="gray.2" mb="2rem" />
        <ListItem>Settings</ListItem>
      </List>
    </VStack>
  );
};

const MobileNav = () => {
  return (
    <>
      <Flex
        alignItems="center"
        display={{ base: 'flex', xl: 'none' }}
        pb="2rem"
        w="100%"
        justify="space-between"
        as="nav"
      >
        <Text fontWeight="bold">X Y L O</Text>
        <IconButton
          boxShadow="0 0 0 0.5px"
          variant="ghost"
          aria-label="open menu"
          icon={<FiMenu />}
        />
      </Flex>
      <Divider mb="2rem" />
    </>
  );
};

const Layout = ({ children }) => {
  const [isLarge] = useMediaQuery('(min-width: 1280px)');
  return (
    <Box
      display={{ base: 'block', xl: 'flex' }}
      mx="auto"
      w="100vw"
      h="100vh"
      p={{ base: '1rem', sm: '2rem', xl: '1rem' }}
      maxW="1440px"
      overflow={{ base: 'auto', '2xl': 'hidden' }}
    >
      <Button
        bg="default.black"
        color="default.white"
        as="a"
        href="#skip"
        position="absolute"
        transform="translateX(-500%)"
        transition="transform 0.5s"
        _focus={{ transform: 'translateX(0%)' }}
      >
        Skip to Content
      </Button>
      {isLarge ? <Nav /> : <MobileNav />}

      {children}
    </Box>
  );
};

export default Layout;
