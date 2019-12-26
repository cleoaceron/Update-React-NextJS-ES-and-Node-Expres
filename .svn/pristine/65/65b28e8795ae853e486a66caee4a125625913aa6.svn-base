const express = require('express')
const next = require('next')
// const port = parseInt(process.env.PORT, 10) || 3000
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev: process.env.NODE_ENV !== 'production' })
// const handler = routes.getRequestHandler(app, ({ req, res, route, query }) => {
// 	app.render(req, res, route.page, query)
// })
// const routes = require('../server/routes/')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

var cors = require('cors')
var proxy = require('http-proxy-middleware')
const bodyParser = require('body-parser')

// app.use(cors())
// const express = require('express')
// app.prepare().then(() => {
// 	express().use(handler).listen(3000)
// })

app.prepare().then(() => {
	const server = express()
	server.use(bodyParser.urlencoded({ extended: true }))
	server.use(bodyParser.json())
	server.all('/', function (req, res, next) {
		res.header('Access-Control-Allow-Origin', '*')
		res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept')
		next()
	})

	server.use(function (req, res, next) {
		res.header('Access-Control-Allow-Origin', '*')
		res.header(
			'Access-Control-Allow-Headers',
			'Origin, X-Requested-With, Content-Type, Accept'
		)
		next()
	})

	//load routes
	const indexing = require('./routes/api/indexing')
	// const collection = require('./routes/api/endpoint-collection')

	//use routes
	server.use('/api', indexing)
	// server.use('/api', collection)

	server.get('/:query', cors(), (req, res) => {
		let actualPage = '/'
		let queryParams = { query: req.params.query.searchSensor }
		console.log(queryParams)
		return app.render(req, res, actualPage, queryParams)
	})

	server.get('/products/:query', cors(), (req, res) => {
		let actualPage = '/products'
		let queryParams = { query: req.params.query.searchSensor }
		console.log(queryParams)
		return app.render(req, res, actualPage, queryParams)
	})

	server.get('/artists/:query', cors(), (req, res) => {
		let actualPage = '/artists'
		let queryParams = { query: req.params.query.searchSensor }
		console.log(queryParams)
		return app.render(req, res, actualPage, queryParams)
	})

	server.get('/downloads/:query', cors(), (req, res) => {
		let actualPage = '/downloads'
		let queryParams = { query: req.params.query.searchSensor }
		console.log(queryParams)
		return app.render(req, res, actualPage, queryParams)
	})

	server.get('*', cors(), (req, res) => handle(req, res))

	server.listen(port, err => {
		if (err) throw err
		console.log(`🤘 on http://localhost:${port}`)
	})
})
