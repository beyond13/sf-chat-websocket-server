var nforce = require("nforce");

const client_id =
  "3MVG9wt4IL4O5wvLCwubQOLFDvd8uYoFOck7Fyveb7Huj.aZA3SLQTPHgl5zltsGdN70oShuzBcn2b9EaMS4h";
const client_secret =
  "F393B313018C6A046C8DF01DE2FD677679B1B46D9EAE4E2B274AFE6C01F47D28";
const redirect_uri = "https://login.salesforce.com/services/oauth2/success";
const sfdc_user = "wenbo.d.zhang@accenture.com.pd.cpf-dev";
const sfdc_pass = "Zhang210328@";

const credentials = {
  client_id: client_id,
  client_secret: client_secret,
  grant_type: "password",
  username: sfdc_user,
  password: sfdc_pass,
};

async function getConnection() {
  const loginUrl = "https://login.salesforce.com/services/oauth2/token";

  var org = nforce.createConnection({
    clientId: credentials.client_id,
    clientSecret: credentials.client_secret,
    redirectUri: redirect_uri,
  });
  let oauth = await org.authenticate({
    username: credentials.username,
    password: credentials.password,
  });

  const access_token = oauth.access_token;
  const sf_auth_url = oauth.instance_url + "/services/data/v48.0/";
  sf_auth = {
    Authorization: "Bearer " + access_token,
    "Content-type": "application/json",
    "Accept-Encoding": "gzip",
  };
  return { sf_auth, sf_auth_url };
}

module.exports = { getConnection };
