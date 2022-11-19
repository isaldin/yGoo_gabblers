const Fastify = require('fastify')
const server = Fastify()

server.register(require('@fastify/http-proxy'), {
    upstream: 'http://95.216.241.177/secret/gobble/',
})

server.listen({ port: 8545 })
console.log('Proxy server started')
