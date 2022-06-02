const fetch = require("node-fetch");
const { getConnection } = require("./sf_oauth");

let oauth = getConnection();

const query = `select Id, Name from Account`;
let sf_auth_url = oauth["sf_auth_url"] + "query?q=" + query;

fetch(sf_auth_url, { method: "GET", headers: { ...oauth.sf_auth } })
  .then((res) => res.json())
  .then((body) => {
    console.log(body);
  })
  .catch((err) => {
    console.log(err);
  });
