// Import LSTM worker
var lstm = require('../index').lstm;

// Server Relay
var port = 3000;
var host = '0.0.0.0';

const fastify = require('fastify')()

fastify.get('/metrics', async (request, reply) => {
	await lstm(request,reply);
});

console.log('Starting Endpoint on', host, 'port', port)
const startServer = async () => {
        try {
          await fastify.listen(port,host)
        } catch (err) {
          console.log(err);
	  process.exit();
        }
}

startServer()

