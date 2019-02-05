import express from 'express'

const app = express()
const port = process.env.PORT || 5656

app.get('/api/matchedtransactions', (req, res) => {
    console.log('matchedtransactions api called')
    res.json([{
        id: 123,
        sellAccount: 'binance',
        buyAccount: 'bittrex'
    }])
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})