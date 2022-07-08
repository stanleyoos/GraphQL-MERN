const express = require('express')
require('dotenv').config()
const colors = require('colors')
const cors = require('cors')

const port = process.env.PORT || 5000
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const app = express()

const connectDB = require('./config/db')

app.get('/', () => {
  console.log('Hello World!')
})

// connect to database
connectDB()

app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
)

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
