module.exports = {
	// crossOrigin: 'anonymous',
	exportPathMap: function () {
		return {
			'/': { page: '/' },
			'/Artists': { page: 'Artists' },
			'/test': { page: '/test' },
			'/source': { page: '/content-source' }
		}
	}
}

// scss config
// const scss = require('@zeit/next-sass')
// module.exports = scss({
// 	/* config options here */
// })

// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
	/* config options here */
})