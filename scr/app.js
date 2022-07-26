const Fastify = require('fastify')

const buildApp = async (option = {}) => {
    const app = Fastify(option)


    return app
}

module.exports = buildApp