const http = require('http');
const client = require('./client');
const { handleIncomingMessage } = require('./utils');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/webhook-listener') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            console.log('Dados recebidos:', body);
            handleIncomingMessage(body, client);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Dados recebidos com sucesso!');
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Rota não encontrada');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});
