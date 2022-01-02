const axios = require("axios");

function handler(req, res) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${req.query.coin}&vs_currencies=usd&include_24hr_change=true`
      )
      .then((response) => {
        console.log(response.data[req.query.coin].usd_24h_change);
        res
          .status(200)
          .send(
            response.data[req.query.coin].usd_24h_change === null
              ? 0
              : response.data[req.query.coin].usd_24h_change
          );
        resolve();
      })
      .catch((error) => {
        res.status(200).send(0);
        resolve();
      });
  });
}

export default handler;
