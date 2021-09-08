import { plaidClient } from '@/lib/plaid';
import moment from 'moment';

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.post('/api/info', function (request, response, next) {
  response.json({
    item_id: ITEM_ID,
    access_token: ACCESS_TOKEN,
    products: PLAID_PRODUCTS
  });
});

// Create a link token with configs which we can then use to initialize Plaid Link client-side.
// See https://plaid.com/docs/#create-link-token
app.post('/api/create_link_token', async function (request, response) {
  const configs = {
    user: {
      // This should correspond to a unique id for the current user.
      client_user_id: 'user-id'
    },
    client_name: 'Plaid Quickstart',
    products: PLAID_PRODUCTS,
    country_codes: PLAID_COUNTRY_CODES,
    language: 'en'
  };

  if (PLAID_REDIRECT_URI !== '') {
    configs.redirect_uri = PLAID_REDIRECT_URI;
  }

  if (PLAID_ANDROID_PACKAGE_NAME !== '') {
    configs.android_package_name = PLAID_ANDROID_PACKAGE_NAME;
  }
  try {
    const createTokenResponse = await client.linkTokenCreate(configs);
    prettyPrintResponse(createTokenResponse);
    response.json(createTokenResponse.data);
  } catch (error) {
    prettyPrintResponse(error.response);
    return response.json(formatError(error.response));
  }
});

// Create a link token with configs which we can then use to initialize Plaid Link client-side.
// See https://plaid.com/docs/#payment-initiation-create-link-token-request
app.post(
  '/api/create_link_token_for_payment',
  async function (request, response, next) {
    try {
      const createRecipientResponse =
        await client.paymentInitiationRecipientCreate({
          name: 'Harry Potter',
          iban: 'GB33BUKB20201555555555',
          address: {
            street: ['4 Privet Drive'],
            city: 'Little Whinging',
            postal_code: '11111',
            country: 'GB'
          }
        });
      const recipientId = createRecipientResponse.data.recipient_id;
      prettyPrintResponse(createRecipientResponse);

      const createPaymentResponse = await client.paymentInitiationPaymentCreate(
        {
          recipient_id: recipientId,
          reference: 'paymentRef',
          amount: {
            value: 12.34,
            currency: 'GBP'
          }
        }
      );
      prettyPrintResponse(createPaymentResponse);
      const paymentId = createPaymentResponse.data.payment_id;
      PAYMENT_ID = paymentId;
      const configs = {
        user: {
          // This should correspond to a unique id for the current user.
          client_user_id: 'user-id'
        },
        client_name: 'Plaid Quickstart',
        products: PLAID_PRODUCTS,
        country_codes: PLAID_COUNTRY_CODES,
        language: 'en',
        payment_initiation: {
          payment_id: paymentId
        }
      };
      if (PLAID_REDIRECT_URI !== '') {
        configs.redirect_uri = PLAID_REDIRECT_URI;
      }
      const createTokenResponse = await client.linkTokenCreate(configs);
      prettyPrintResponse(createTokenResponse);
      response.json(createTokenResponse.data);
    } catch (error) {
      prettyPrintResponse(error.response);
      return response.json(formatError(error.response));
    }
  }
);

// Exchange token flow - exchange a Link public_token for
// an API access_token
// https://plaid.com/docs/#exchange-token-flow
app.post('/api/set_access_token', async function (request, response, next) {
  PUBLIC_TOKEN = request.body.public_token;
  try {
    const tokenResponse = await client.itemPublicTokenExchange({
      public_token: PUBLIC_TOKEN
    });
    prettyPrintResponse(tokenResponse);
    ACCESS_TOKEN = tokenResponse.data.access_token;
    ITEM_ID = tokenResponse.data.item_id;
    response.json({
      access_token: ACCESS_TOKEN,
      item_id: ITEM_ID,
      error: null
    });
  } catch (error) {
    prettyPrintResponse(error.response);
    return response.json(formatError(error.response));
  }
});

// Retrieve ACH or ETF Auth data for an Item's accounts
// https://plaid.com/docs/#auth
app.get('/api/auth', async function (request, response, next) {
  try {
    const authResponse = await client.authGet({ access_token: ACCESS_TOKEN });
    prettyPrintResponse(authResponse);
    response.json(authResponse.data);
  } catch (error) {
    prettyPrintResponse(error.response);
    return response.json(formatError(error.response));
  }
});

// Retrieve Transactions for an Item
// https://plaid.com/docs/#transactions
app.get('/api/transactions', async function (request, response, next) {
  // Pull transactions for the Item for the last 30 days
  const startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
  const endDate = moment().format('YYYY-MM-DD');
  const configs = {
    access_token: ACCESS_TOKEN,
    start_date: startDate,
    end_date: endDate,
    options: {
      count: 250,
      offset: 0
    }
  };
  try {
    const transactionsResponse = await client.transactionsGet(configs);
    prettyPrintResponse(transactionsResponse);
    response.json(transactionsResponse.data);
  } catch (error) {
    prettyPrintResponse(error.response);
    return response.json(formatError(error.response));
  }
});

// Retrieve Investment Transactions for an Item
// https://plaid.com/docs/#investments
app.get(
  '/api/investment_transactions',
  async function (request, response, next) {
    const startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
    const endDate = moment().format('YYYY-MM-DD');
    const configs = {
      access_token: ACCESS_TOKEN,
      start_date: startDate,
      end_date: endDate
    };
    try {
      const investmentTransactionsResponse =
        await client.investmentTransactionsGet(configs);
      prettyPrintResponse(investmentTransactionsResponse);
      response.json({
        error: null,
        investment_transactions: investmentTransactionsResponse.data
      });
    } catch (error) {
      prettyPrintResponse(error.response);
      return response.json(formatError(error.response));
    }
  }
);

// Retrieve Identity for an Item
// https://plaid.com/docs/#identity
app.get('/api/identity', async function (request, response, next) {
  try {
    const identityResponse = await client.identityGet({
      access_token: ACCESS_TOKEN
    });
    prettyPrintResponse(identityResponse);
    response.json({ identity: identityResponse.data.accounts });
  } catch (error) {
    prettyPrintResponse(error.response);
    return response.json(formatError(error.response));
  }
});

// Retrieve real-time Balances for each of an Item's accounts
// https://plaid.com/docs/#balance
app.get('/api/balance', async function (request, response, next) {
  try {
    const balanceResponse = await client.accountsBalanceGet({
      access_token: ACCESS_TOKEN
    });
    prettyPrintResponse(balanceResponse);
    response.json(balanceResponse.data);
  } catch (error) {
    prettyPrintResponse(error.response);
    return response.json(formatError(error.response));
  }
});

// Retrieve information about an Item
// https://plaid.com/docs/#retrieve-item
app.get('/api/item', async function (request, response, next) {
  try {
    // Pull the Item - this includes information about available products,
    // billed products, webhook information, and more.
    const itemResponse = await client.itemGet({ access_token: ACCESS_TOKEN });
    // Also pull information about the institution
    const configs = {
      institution_id: itemResponse.data.item.institution_id,
      country_codes: ['US']
    };
    const instResponse = await client.institutionsGetById(configs);
    prettyPrintResponse(itemResponse);
    response.json({
      item: itemResponse.data.item,
      institution: instResponse.data.institution
    });
  } catch (error) {
    prettyPrintResponse(error.response);
    return response.json(formatError(error.response));
  }
});

// Retrieve an Item's accounts
// https://plaid.com/docs/#accounts
app.get('/api/accounts', async function (request, response, next) {
  try {
    const accountsResponse = await client.accountsGet({
      access_token: ACCESS_TOKEN
    });
    prettyPrintResponse(accountsResponse);
    response.json(accountsResponse.data);
  } catch (error) {
    prettyPrintResponse(error.response);
    return response.json(formatError(error.response));
  }
});

// const prettyPrintResponse = (response) => {
//   console.log(util.inspect(response.data, { colors: true, depth: 4 }));
// };

const formatError = (error) => {
  return {
    error: { ...error.data, status_code: error.status }
  };
};
