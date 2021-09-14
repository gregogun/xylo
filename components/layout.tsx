import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  IconButton,
  Link,
  List,
  ListItem,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import {
  FiCreditCard,
  FiHome,
  FiLogOut,
  FiMenu,
  FiRepeat,
  FiSettings,
  FiTrendingUp,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import Logo from './icons/logo';
import NextLink from 'next/link';

const NavItem = ({ title, href, icon }) => {
  return (
    <ListItem
      w="100%"
      listStyleType="none"
      display="flex"
      mb="1rem"
      alignItems="center"
    >
      <Icon boxSize="1.5rem" mr="0.5rem" as={icon} />
      <NextLink href={href} passHref>
        <Link fontSize="1.25rem">{title}</Link>
      </NextLink>
    </ListItem>
  );
};

const Nav = () => {
  return (
    <VStack
      display={{ base: 'none', xl: 'flex' }}
      bg="gray.1"
      borderRadius="md"
      h="100%"
      p="2rem 6rem 2rem 2rem"
      maxW="18rem"
      as="aside"
      role="navigation"
    >
      <Icon mb="10rem" width="6rem" height="3rem" as={Logo} />
      <List fontSize="md">
        <NavItem icon={FiHome} title="Overview" href="/dashboard/overview" />
        <NavItem
          icon={FiRepeat}
          title="Transactions"
          href="/dashboard/transactions"
        />
        <NavItem
          icon={FiCreditCard}
          title="Accounts"
          href="/dashboard/accounts"
        />
        <NavItem
          icon={FiTrendingUp}
          title="Analytics"
          href="/dashboard/analytics"
        />
        <Divider h="1px" w="100%" bg="gray.2" mb="2rem" />
        <ListItem>
          <Icon boxSize="1.5rem" mr="0.5rem" as={FiLogOut} />
          <NextLink href="/" passHref>
            <Link fontSize="1.25rem">Log out</Link>
          </NextLink>
        </ListItem>
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
        <Icon width="6rem" height="3rem" as={Logo} />
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
      maxW="1920px"
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
