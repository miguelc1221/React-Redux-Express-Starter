import path from 'path'
import express from 'express'
import webpack from 'webpack'
import config from '../webpack.config.dev.js'

const app = express()
const compiler = webpack(config)

const isProduction = process.env.NODE_ENV === 'production'

if (!isProduction) {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler))
}

app.use(express.static(path.join(__dirname, '/../app/public')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/../app/public/index.html'))
})

app.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:3000')
})
