const express = require('express')
const router = express.Router()

const axios = require('axios')
const esClient = require('../client.js')

router.post('/index', (req, res) => {
	const indexName = req.body.source.indexName
	const indexType = req.body.source.indexType
	const indexUrl = req.body.source.indexUrl

	const bulkIndex = function bulkIndex(index, type, data) {
		let bulkBody = []
		data.forEach(item => {
			bulkBody.push({
				index: {
					_index: index,
					_type: type,
					_id: item.id
				}
			})
			bulkBody.push(item)
		})
		//bulk index to elasticsearch instance
		esClient
			.bulk({ body: bulkBody })
			.then(response => {
				console.log(response)
				let errorCount = 0
				response.items.forEach(item => {
					if (item.index && item.index.error) {
						console.log(++errorCount, item.index.error)
					}
				})
				res.send({
					message: `Successfully indexed ${data.length -
						errorCount} out of ${data.length} items`
				})
			})
			.catch(console.err)

		// add endpoint data to endpoints collections
		esClient.index(
			{
				index: 'endpoints',
				type: 'endpont',
				body: {
					indexName: indexName,
					indexType: indexType,
					indexUrl: indexUrl
				}
			},
			function (err, resp, status) {
				console.log(resp)
			}
		)
	}

	//get name, type, and data from API endpoint for bulkindex
	const getApi = () => {
		let axiosConfig = {
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				'Access-Control-Allow-Origin': '*'
			}
		}
		try {
			return axios.get(indexUrl, axiosConfig)
		} catch (error) {
			console.error(error)
		}
	}
	//use promise api call
	const getEndpoint = async => {
		const api = getApi()
			.then(response => {
				if (response) {
					const data = response.data
					//get type of data
					for (let x in data) {
						let y = typeof data[x]
						//get the JSON object data to bulk index in Elasticsearch
						if (y == 'object') {
							const endpointData = data[x]
							bulkIndex(indexName, indexType, endpointData)
						}
					}
				}
			})
			.catch(error => {
				console.log(error)
			})
	}
	getEndpoint()
})

module.exports = router
