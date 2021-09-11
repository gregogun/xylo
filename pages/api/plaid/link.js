import { plaidClient } from '@/lib/plaid';
import { formatError } from '@/utils/formatError';

export default async (_, res) => {
  const request = {
    user: {
      client_user_id: 'user-id'
    },
    client_name: 'Aqua Bank',
    language: 'en',
    products: ['auth', 'transactions'],
    country_codes: ['GB'],
    account_filters: {
      depository: {
        account_subtypes: ['checking']
      }
    }
  };

  try {
    const response = await plaidClient.linkTokenCreate(request);
    const linkToken = await response.data.link_token;
    const message = {
      greeting: 'hello'
    };
    return res.status(200).json({ linkToken, message });
  } catch (error) {
    return res.status(500).json(formatError(error));
  }
};
