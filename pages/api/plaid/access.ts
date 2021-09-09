import { plaidClient, PLAID_CLIENT_ID, PLAID_SECRET } from '@/lib/plaid';

let ACCESS_TOKEN = null;
let ITEM_ID = null;

export default async function handler(req, res) {
  const { public_token } = req.body;
  const tokenRequest = {
    public_token: public_token,
    client_id: PLAID_CLIENT_ID,
    secret: PLAID_SECRET
  };

  try {
    const tokenResponse = await plaidClient.itemPublicTokenExchange(
      tokenRequest
    );
    ACCESS_TOKEN = tokenResponse.data.access_token;
    ITEM_ID = tokenResponse.data.item_id;
    console.log({ access_token: ACCESS_TOKEN, item_id: ITEM_ID, error: null });
    return res.status(200).json({
      access_token: ACCESS_TOKEN,
      item_id: ITEM_ID,
      error: null
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}
