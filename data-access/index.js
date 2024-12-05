const makeTaskDb = require('./taskdb')
const mongodb = require('mongodb')
const dotenv = require('dotenv')
dotenv.config()

const MongoClient = mongodb.MongoClient
const url = process.env.TASKS_DB_URL
const dbName = process.env.TASKS_DB_NAME
const client = new MongoClient(url)


const makeDb = async () => {
    await client.connect()
    return client.db(dbName)
}


const taskDb = makeTaskDb({ makeDb })
module.exports = taskDb


