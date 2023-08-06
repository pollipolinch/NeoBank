export const api_key_exchange = 'dce9a9c25emsh2a7ea2c4c1d87a0p1fad7ajsn7d7e5b4f4da5'
export const api_host_exchange = 'currency-exchange.p.rapidapi.com'
export const url_exchange = `https://${api_host_exchange}/exchange?`

export const api_key_news = '50cf77a7789448ba90617689b12314a8'
export const api_host_news = 'newsapi.org'

const country = 'us'
const amount = '30'
const category = 'business'
export const url_news = `https://${api_host_news}/v2/top-headlines?country=${country}&pageSize=${amount}&category=${category}&apiKey=${api_key_news}`
