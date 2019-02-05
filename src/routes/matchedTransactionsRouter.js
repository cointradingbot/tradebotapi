import express from 'express'
const matchedTransactionsRouter = express.Router()

matchedTransactionsRouter
    .get('/', (req, res) => {
        console.log('matchedtransactions api called')
        res.json([{
            id: 123,
            sellAccount: 'binance',
            buyAccount: 'bittrex'
        }])
    })
export default matchedTransactionsRouter