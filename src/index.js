import express from 'express'
import matchedTransactionsRouter from './routes/matchedTransactionsRouter'
import mongoose from 'mongoose'
import config from 'config'

const app = express()
const port = process.env.PORT || 5656
const db = mongoose.connect(config['connectionString']) 
app.use('/api/matchedtransactions', matchedTransactionsRouter)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})