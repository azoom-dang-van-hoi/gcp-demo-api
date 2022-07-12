import "dotenv/config"
import express from "express"
import cors from "cors"
import nnnRouter from "nnn-router"
import promiseRouter from 'express-promise-router'
import statuses from 'statuses'

const port = process.env.PORT || 8000
const app = express()
express.response.sendStatus = function (statusCode) {
  const body = { message: statuses(statusCode) || String(statusCode) }
  this.statusCode = statusCode
  this.type("json")
  this.send(body)
}

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

app.use(
  nnnRouter({ routeDir: "/routes", baseRouter: promiseRouter() }),
  (error, req, res, next) => {
    console.error(error)
    return res.sendStatus(500)
  }
)

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
