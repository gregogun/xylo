import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  List,
  ListItem,
  Text
} from '@chakra-ui/react';
import Layout from '@/components/layout';
import { FiMail, FiBell } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';

const TopBar = () => {
  return (
    <Flex justify="space-between" align="center">
      <Heading>Overview</Heading>
      <List display="flex" alignItems="center">
        <ListItem mr="1.5rem">
          <Icon as={FiMail} boxSize="1.5rem" strokeWidth="2px" />
        </ListItem>
        <ListItem mr="1.5rem">
          <Icon as={FiBell} boxSize="1.5rem" strokeWidth="2px" />
        </ListItem>
        <ListItem
          borderRadius="full"
          p="0.125rem"
          boxShadow="0 0 0 0.125rem black"
        >
          <Image
            boxSize="3rem"
            borderRadius="full"
            fallbackSrc="https://via.placeholder.com/50"
          />
        </ListItem>
      </List>
    </Flex>
  );
};

const LeftSide = () => {
  return (
    <Box>
      <Heading fontSize="lg" as="h2" mb="1rem">
        Balances
      </Heading>
      <Flex mb="2.5rem">
        <Balances />
        <Divider
          h="4rem"
          w="1px"
          bg="gray.2"
          orientation="vertical"
          mx="1rem"
        />
        <Balances />
      </Flex>
      <Heading fontSize="lg" as="h2" mb="1rem">
        Cards
      </Heading>
      <Flex mb="1.5rem">
        <Card bg="gray.1" mr="1rem" />
        <Card />
      </Flex>
      <Button
        color="white"
        bg="default.black"
        _hover={{ bg: 'gray.5' }}
        fontSize="md"
        p="1.5rem 2rem"
        mb="4rem"
      >
        See all Cards
      </Button>
      <Heading fontSize="lg" as="h2" mb="1rem">
        Analytics
      </Heading>
    </Box>
  );
};

const RightSide = () => {
  return (
    <Box overflowY="auto" h="800px" w="400px">
      <Flex justify="space-between" alignItems="center" mb="2rem">
        <Heading fontSize="xl">Recent Transactions</Heading>
        <Text fontSize="md" color="gray.3">
          last 30 days
        </Text>
      </Flex>
      <Transaction />
      <Transaction active />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
    </Box>
  );
};

const Balances = () => {
  return (
    <Box>
      <Flex>
        <Text mr="0.25rem">Total Available Balance</Text>
        <Text
          display="inline"
          bg="gray.1"
          borderRadius="full"
          p="0.06rem 0.4rem"
        >
          ?
        </Text>
      </Flex>
      <Text fontWeight="bold" fontSize="xl">
        £2,378
        <Text as="span" fontWeight="bold" fontSize="md">
          .00
        </Text>
      </Text>
    </Box>
  );
};

const BalanceAmount = ({ whole, decimal }) => {
  return (
    <Text fontWeight="bold" fontSize="xl">
      £{whole}
      <Text as="span" fontWeight="bold" fontSize="md">
        .{decimal}
      </Text>
    </Text>
  );
};

const Card = ({ bg = 'red.500', ...props }) => {
  const color = bg === 'red.500' ? 'default.white' : 'default.black';
  return (
    <Box>
      <Text>Plaid Checking</Text>
      <Flex
        {...props}
        flexDirection="column"
        justify="space-between"
        bg={bg}
        w="280px"
        h="140px"
        p="1rem"
        borderRadius="md"
        color={color}
      >
        <Flex justify="space-between" alignItems="center">
          <BalanceAmount whole="1,678" decimal="00" />
          <Text fontWeight="bold">Visa</Text>
        </Flex>
        <Text fontWeight="bold">**** **** **** 3333</Text>
      </Flex>
    </Box>
  );
};

const Transaction = ({ active = false, ...props }) => {
  return (
    <Flex
      {...props}
      bg={active === true ? 'gray.1' : null}
      borderRadius="md"
      align="center"
      w="100%"
      p="0.875rem"
      justify="space-between"
    >
      <Flex>
        <Center
          mr="1rem"
          p="0.5rem"
          boxSize="2.5rem"
          bg="gray.1"
          borderRadius="full"
        >
          <Icon boxSize="1.5rem" as={SiGithub} />
        </Center>
        <Box>
          <Text fontWeight="bold" fontSize="sm">
            Github
          </Text>
          <Text fontSize="sm">15 Sep 2021</Text>
        </Box>
      </Flex>
      <Text>£30</Text>
    </Flex>
  );
};

const Overview = () => {
  return (
    <Layout>
      <Box as="main" w="100%" ml="2rem" pr="7rem">
        <TopBar />
        <Divider mt="0.5rem" mb="1rem" />
        <Flex justify="space-between">
          <LeftSide />
          <RightSide />
        </Flex>
      </Box>
    </Layout>
  );
};

export default Overview;
