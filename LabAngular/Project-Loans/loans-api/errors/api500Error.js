const httpStatusCodes = require('./httpStatusCodes')
const BaseError = require('./baseError')

class Api500Error extends BaseError {
    constructor (
        name,
        statusCode = httpStatusCodes.INTERNAL_SERVER,
        description = 'Internal Server Error.',
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}

module.exports = Api500Error
