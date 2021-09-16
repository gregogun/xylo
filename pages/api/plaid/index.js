import { plaidClient, PLAID_CLIENT_ID, PLAID_SECRET } from '@/lib/plaid';
import moment from 'moment';

let ACCESS_TOKEN = null;
let ITEM_ID = null;

const getData = async (public_token) => {
  // req object for access token
  const tokenRequest = {
    public_token: public_token,
    client_id: PLAID_CLIENT_ID,
    secret: PLAID_SECRET,
  };

  // set access token
  if (public_token) {
    const tokenResponse = await plaidClient.itemPublicTokenExchange(
      tokenRequest
    );
    ACCESS_TOKEN = tokenResponse.data.access_token;
    ITEM_ID = tokenResponse.data.item_id;
  }

  // get accounts data
  const accountsRes = await plaidClient.accountsGet({
    access_token: ACCESS_TOKEN,
  });
  const accounts = await accountsRes.data.accounts;

  //Pull transactions for the last 30 days
  const startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
  const endDate = moment().format('YYYY-MM-DD');

  const transactionsRes = await plaidClient.transactionsGet({
    access_token: ACCESS_TOKEN,
    client_id: PLAID_CLIENT_ID,
    secret: PLAID_SECRET,
    // TRY MANUALLY ENTERING DATE
    start_date: startDate,
    end_date: endDate,
  });
  const transactions = await transactionsRes.data.transactions;

  return { accounts, transactions };
};

export default async (req, res) => {
  const { public_token } = req.body;

  try {
    const { accounts, transactions } = await getData(public_token);
    return res.status(200).json({
      accounts,
      transactions,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};
