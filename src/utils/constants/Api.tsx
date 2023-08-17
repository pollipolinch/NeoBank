const api_key_exchange = 'dce9a9c25emsh2a7ea2c4c1d87a0p1fad7ajsn7d7e5b4f4da5'
const api_host_exchange = 'currency-exchange.p.rapidapi.com'
const url_exchange = `https://${api_host_exchange}/exchange?`
const typesOfCur = ['USD', 'EUR', 'CNY', 'JPY', 'CHF', 'TRY']



const api_key_news = '9abc340193ac44d590d21b155b38dee1'
const api_host_news = 'newsapi.org'

const country = 'us'
const amount = '30'
const category = 'business'
const url_news = `https://${api_host_news}/v2/top-headlines?country=${country}&pageSize=${amount}&category=${category}&apiKey=${api_key_news}`



export { api_key_exchange, api_host_exchange, url_exchange, typesOfCur, url_news }