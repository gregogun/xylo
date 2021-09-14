import { Box, Button, Center, Heading, Icon, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState, FC } from 'react';
import { usePlaidLink, PlaidLinkOptions } from 'react-plaid-link';
import Connect from '@/components/icons/connect';
import Logo from '@/components/icons/logo';

interface Props {
  token: string;
  children?: string;
}

const PlaidLink: FC<Props> = ({ token }) => {
  const router = useRouter();

  const onSuccess = (public_token, metadata) => {
    //console.log(metadata);

    fetch('/api/plaid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        public_token: public_token,
      }),
    }).then((res) => {
      if (res.ok) {
        router.push('/dashboard/overview');
      }
    });
  };

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open, ready, error } = usePlaidLink(config);

  return (
    <Button
      onClick={() => open()}
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
      disabled={!ready}
    >
      Connect a bank account
    </Button>
  );
};

const IndexPage = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    async function createLinkToken() {
      const res = await fetch('api/plaid/link');
      const { linkToken } = await res.json();
      setToken(linkToken);
    }
    createLinkToken();
  }, []);

  return (
    <Box p="2rem 1rem" w="100vw" minH="100vh">
      <Icon
        display="block"
        mx="auto"
        width="6rem"
        height="3rem"
        mb="6rem"
        align="center"
        as={Logo}
      />
      <Heading
        fontWeight="semibold"
        fontSize={{ base: '2xl', xl: '5xl' }}
        align="center"
        mb="4rem"
      >
        Take control of your spending
      </Heading>
      <Connect boxSize="12.5rem" mb="4rem" mx="auto" display="block" />
      <Text fontSize="xl" align="center" mb="4rem">
        The best way to manage your finance is here.
      </Text>
      {token ? (
        <Center>
          <PlaidLink token={token}>Connect a bank account</PlaidLink>
        </Center>
      ) : (
        <Center>
          <Button
            isLoading
            onClick={() => open()}
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
          />
        </Center>
      )}
    </Box>
  );
};

export default IndexPage;
