import express from 'express'
import matchedTransactionsRouter from './routes/matchedTransactionsRouter'
const app = express()
const port = process.env.PORT || 5656

app.use('/api/matchedtransactions', matchedTransactionsRouter)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})