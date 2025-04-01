const http = require('http');
const querystring = require('querystring');

// Função que simula o envio de uma mensagem para o webhook
function enviarParaWebhook(mensagem, numeroCelular, callback) {
    const queryParams = querystring.stringify({
        mensagem: mensagem,
        numero_celular: numeroCelular
    });

    console.log('Enviando dados:', queryParams);

    const options = {
        hostname: 'localhost',
        port: 5678,
        path: `/webhook/5b880f1b-cdd6-4e88-b2f3-de3bf7ceea8c?${queryParams}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    console.log('Opções da requisição:', options);

    const req = http.request(options, (res) => {
        console.log(`Status Code da resposta: ${res.statusCode}`);
        console.log('Headers da resposta:', res.headers);

        let responseData = '';
        res.on('data', (chunk) => {
            console.log('Chunk recebido:', chunk.toString());
            responseData += chunk;
        });
        res.on('end', () => {
            console.log('Resposta completa recebida');
            callback(null, res.statusCode, responseData);
        });
    });

    req.on('error', (error) => {
        console.error('Erro na requisição:', error);
        callback(error);
    });

    req.end();
}

// Teste simples
function testeEnvioWebhook() {
    const mensagem = 'Teste de mensagem';
    const numeroCelular = '+5511999999999';

    enviarParaWebhook(mensagem, numeroCelular, (error, statusCode, responseData) => {
        if (error) {
            console.error('Erro ao enviar para o webhook:', error);
        } else {
            console.log('Status Code:', statusCode);
            console.log('Response Data:', responseData);
        }
    });
}

// Executa o teste
testeEnvioWebhook();
