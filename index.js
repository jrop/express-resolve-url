const path = require('path')

module.exports = function resolveUrl() {
	return function (req, res, next) {
		req.resolveUrl = res.resolveUrl = function (subPath) {
			return path.join(req.baseUrl, subPath)
		}
		next()
	}
}
