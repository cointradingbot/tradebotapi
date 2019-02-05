import mongoose, {
    mongo
} from 'mongoose'

const Schema = mongoose.Schema

const matchedTransactionModel = new mongoose.Schema({
    datetime: Date,
    token: String,
    sellAccount: {
        exchange: String,
        sellPrice: Number,
        volume: Number
    },
    buyAccount: {
        exchange: String,
        buyPrice: Number,
        volume: Number
    },
    delta: Number,
    profit: Number,
    coinQty: Number
})

export default mongoose.model('matchedTransactions', matchedTransactionModel)