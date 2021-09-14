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
  Spinner,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import Layout from '@/components/layout';
import { FiMail, FiBell } from 'react-icons/fi';
import { SiVisa } from 'react-icons/si';
import { useEffect } from 'react';
import moment from 'moment';
import { formatBalance } from '@/utils/formatBalance';
import useIcon from '@/utils/useIcon';
import SpendingChart from '@/components/chart';

const TopBarUtils = ({ ...props }) => {
  return (
    <List {...props} alignItems="center">
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
  );
};

const TopBar = () => {
  return (
    <Flex
      mt="0.5rem"
      mb={{ base: '2rem', sm: '4rem', xl: 0 }}
      justify="space-between"
      align="center"
    >
      <Heading
        mx={{ base: 'auto', xl: 0 }}
        fontWeight="normal"
        fontSize={{ base: '2xl', xl: '3xl' }}
      >
        Welcome back,{' '}
        <Box as="span" fontWeight="bold">
          Greg!
        </Box>
      </Heading>
      <TopBarUtils display={{ base: 'none', xl: 'flex' }} />
    </Flex>
  );
};

const LeftSide = ({ accounts }) => {
  const [isMd] = useMediaQuery('(min-width: 768px)');

  function getTotalBalance(arr): any {
    // const slicedArr = arr.slice(0, 2);
    const amounts = retrieveAmounts(arr);
    return getSum(amounts);
  }

  function retrieveAmounts(arr) {
    let storage = [];

    arr.map((item) => storage.push(item.balances.available));

    return storage;
  }

  function getSum(arr) {
    const reducer = (prev, current) => prev + current;

    return arr.reduce(reducer);
  }

  useEffect(() => {
    if (accounts) {
      getTotalBalance(accounts);
    }
  }, [accounts]);

  return (
    <Box display={{ base: 'grid', xl: 'block' }} placeItems="center">
      <Heading
        color="gray.4"
        fontWeight="normal"
        fontSize={{ base: 'lg', xl: 'xl' }}
        as="h2"
      >
        Total Balance
      </Heading>
      <Text mb="2.5rem" fontSize={{ base: '2xl', xl: '4xl' }}>
        £{formatBalance(getTotalBalance(accounts))}
      </Text>
      <Heading fontSize="lg" as="h2" mb="1rem">
        Cards
      </Heading>
      <Flex
        mx={{ base: 'auto', xl: null }}
        flexDir={{ base: 'column', xl: 'row' }}
        as="ul"
        mb="1rem"
      >
        {accounts.slice(0, 2).map((account) => (
          <Card
            key={account.id}
            account={account}
            mr="1rem"
            mb={{ base: '2rem', xl: 0 }}
          />
        ))}
      </Flex>
      <Cta />
      {isMd && (
        <>
          <Heading fontSize="lg" as="h2" mb="1rem">
            Analytics
          </Heading>
          <Box w="100%" mb="10rem">
            <SpendingChart />
          </Box>
        </>
      )}
    </Box>
  );
};

const Cta = () => {
  const [isMd] = useMediaQuery('(min-width: 768px)');
  return (
    <Box display="grid" placeItems="center" mx="auto">
      <Button
        fontWeight="normal"
        color="white"
        bg="default.black"
        _hover={{
          bg: 'transparent',
          color: 'default.black',
          boxShadow: '0 0 0 1px',
        }}
        transitionDuration="250ms"
        fontSize="md"
        p="1.5rem 2rem"
        mb={{ base: '8rem', xl: '3rem' }}
      >
        See all Cards
      </Button>
      {!isMd && (
        <Box>
          <Button
            fontWeight="normal"
            color="default.black"
            variant="outline"
            boxShadow="0 0 0 1px"
            _hover={{ bg: 'gray.5', color: 'default.white' }}
            fontSize="md"
            p="1.5rem 2rem"
            mb="8rem"
          >
            See Analytics
          </Button>
        </Box>
      )}
    </Box>
  );
};

const generateColor = (subtype) => {
  switch (subtype) {
    case 'checking':
      return { bg: 'gray.1', color: 'black' };
    case 'savings':
      return { bg: 'accent.red', color: 'white' };
    case 'cd' || 'mortgage':
      return { bg: 'brand.salmon', color: 'black' };
    case 'ira' || '401k':
      return { bg: 'brand.green', color: 'white' };
    case 'credit card':
      return { bg: 'brand.teal', color: 'black' };
    case 'student':
      return { bg: 'brand.skyblue', color: 'black' };
    default:
      return { bg: 'gray.1', color: 'black' };
  }
};

const Card = ({ account, ...props }) => {
  const { bg } = generateColor(account.subtype);
  const { color } = generateColor(account.subtype);
  return (
    <Box>
      <Text>{account.name ? account.name : account.official_name}</Text>
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
          <Text fontSize="x-large" fontWeight="bold">
            £{formatBalance(account.balances.available)}
          </Text>
          <Icon as={SiVisa} boxSize="2.5rem" fill="#2325a5" />
        </Flex>
        <Flex justify="space-between" fontWeight="bold">
          <Text>****</Text>
          <Text>****</Text>
          <Text>****</Text>
          <Text>{account.mask}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

const RecentTransactions = ({ transactions }) => {
  return (
    <Box
      overflowY={{ base: 'hidden' }}
      _hover={{ overflowY: { xl: 'auto' } }}
      h="800px"
      w="100%"
      maxW={{ base: '400px', '2xl': '600px' }}
      mx="auto"
    >
      <Flex justify="space-between" alignItems="center" mb="2rem">
        <Heading fontSize="xl">Recent Transactions</Heading>
        <Text fontSize="md" color="gray.3">
          last 30 days
        </Text>
      </Flex>
      <List h="100%">
        {transactions &&
          transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
      </List>
    </Box>
  );
};

const Transaction = ({ transaction }) => {
  const { getBrand } = useIcon();
  const name = transaction.merchant_name
    ? transaction.merchant_name
    : transaction.name;
  const category = transaction.category;
  const transactionDate = transaction.date
    ? moment(transaction.date).format('MMM Do YYYY')
    : null;
  return (
    <Flex
      _hover={{ bg: 'gray.1' }}
      borderRadius="lg"
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
          <Icon boxSize="1.5rem" as={getBrand(name, category)} />
        </Center>
        <Box>
          <Text w="10rem" isTruncated fontWeight="bold" fontSize="sm">
            {transaction.name}
          </Text>
          <Text fontSize="sm">{transactionDate}</Text>
        </Box>
      </Flex>
      <Text>-£{formatBalance(transaction.amount)}</Text>
    </Flex>
  );
};

const Overview = ({ accounts, transactions }) => {
  useEffect(() => {
    console.log(accounts, transactions);
  }, []);
  return (
    <Layout>
      <Box
        id="skip"
        mx="auto"
        display={accounts ? 'block' : 'grid'}
        placeItems={accounts ? 'unset' : 'center'}
        as="main"
        w={{ base: '100%', sm: '80%', xl: '100%' }}
        ml={{ xl: '2rem' }}
        pr={{ base: null, '2xl': '4rem' }}
      >
        {accounts ? (
          <>
            <TopBar />
            <Divider
              display={{ base: 'none', xl: 'block' }}
              mt="0.5rem"
              mb="2rem"
            />
            <Flex
              w="100%"
              flexDir={{ base: 'column', xl: 'row' }}
              justify="space-between"
            >
              <LeftSide accounts={accounts} />
              <RecentTransactions transactions={transactions} />
            </Flex>
          </>
        ) : (
          <Spinner size="xl" />
        )}
      </Box>
    </Layout>
  );
};

export default Overview;

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/plaid');
  const { accounts, transactions } = await res.json();

  return { props: { accounts, transactions } };
}
