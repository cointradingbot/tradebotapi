import express from 'express'
import MatchedTransactions from '../models/matchedTransactionsModel'
const matchedTransactionsRouter = express.Router()

matchedTransactionsRouter
    .get('/', (req, res) => {
        console.log('matchedtransactions api called')
        MatchedTransactions.find({}, (error, matchedTransactions) => {
            res.json(matchedTransactions)
        })
    })

export default matchedTransactionsRouter