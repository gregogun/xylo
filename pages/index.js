import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';
import { PlaidLink } from 'react-plaid-link';

const BankData = () => {
  const [accounts, setAccounts] = useState(null);

  async function getAccounts() {
    const res = await fetch('api/plaid');
    const { accounts } = await res.json();
    console.log(accounts);
  }

  async function getTransactions() {
    const res = await fetch('api/plaid');
    const { transactions } = await res.json();
    console.log(transactions);
  }
  return (
    <div>
      <button onClick={getAccounts}>Connect a bank to get account info</button>
      <button onClick={getTransactions}>
        Connect a bank to get account info
      </button>
    </div>
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

  const onSuccess = (public_token, metadata) => {
    //console.log(metadata);

    fetch('api/plaid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        public_token: public_token
      })
    });
  };

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      {token === null ? (
        <p>loading...</p>
      ) : (
        <div>
          <PlaidLink token={token} onSuccess={onSuccess}>
            Connect a bank account
          </PlaidLink>
          <BankData />
        </div>
      )}
    </Layout>
  );
};

export default IndexPage;
