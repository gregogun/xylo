import { plaidClient } from '@/lib/plaid';
// import fetch from 'isomorphic-unfetch';

export default async function handler(_, res) {
  try {
    const { access_token } = await fetch(
      'http://localhost:3000/api/plaid/access'
    );

    console.log(access_token);

    const accountsRes = await plaidClient.accountsGet({
      access_token: access_token
    });
    const accounts = await accountsRes.data.accounts;

    return res.status(200).json({ accounts });
  } catch (error) {
    return res.status(500).json(error);
  }
}
