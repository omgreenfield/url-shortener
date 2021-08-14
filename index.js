require("dotenv").config()

const got = require("got")

const private_key = process.env.PRIVATE_KEY
const domain = process.env.DOMAIN

if (process.argv.length < 2) {
  console.log("Must input URL as parameter")
  process.exit(1)
}

const inputUrl = process.argv[2]

const options = {
  method: "POST",
  url: "https://api.short.io/links",
  headers: {
    authorization: private_key,
  },
  json: {
    originalURL: inputUrl,
    domain: domain,
  },
  responseType: "json",
}

got(options)
  .then((response) => {
    console.log(response.body.shortURL)
  })
  .catch((error) => {
    console.error(error)
  })
