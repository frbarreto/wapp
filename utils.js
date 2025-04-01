const axios = require('axios');
const fs = require('fs');

function handleIncomingMessage(body, client) {
    const dadosRecebidos = JSON.parse(body);
    const resposta = dadosRecebidos.resposta;
    const numeroCelular = dadosRecebidos.numero_celular;

    client.sendMessage(numeroCelular, resposta)
        .then(() => {
            console.log(`Mensagem enviada para ${numeroCelular}: ${resposta}`);
        })
        .catch(error => {
            console.error(`Erro ao enviar mensagem para ${numeroCelular}: ${error}`);
        });
}

function verificarNumeroNovo(numero) {
    try {
        console.log('Lendo o arquivo numeros.json...');
        const data = fs.readFileSync('numeros.json');
        const json = JSON.parse(data);
        const numeros = json.numeros;

        console.log('Números atuais no JSON:', numeros);

        if (!numeros.includes(numero)) {
            console.log(`Número ${numero} não encontrado. Adicionando...`);
            numeros.push(numero);
            fs.writeFileSync('numeros.json', JSON.stringify({ numeros }, null, 2));
            console.log(`Número ${numero} adicionado ao JSON.`);
            return 1;
        }
        console.log(`Número ${numero} já existe no JSON.`);
        return 0;
    } catch (error) {
        console.error(`Erro ao acessar numeros.json: ${error.message}`);
        return 0;
    }
}

function sendToWebhook(msg) {
    console.log('sendToWebhook foi chamado.');
    const numero = msg.from;
    const novo = verificarNumeroNovo(numero);
    const url = 'http://localhost:5678/webhook/5b880f1b-cdd6-4e88-b2f3-de3bf7ceea8c';
    const data = {
        mensagem: msg.body,
        numero_celular: numero,
        novo: novo
    };

    console.log('Preparando para enviar ao webhook:', data);

    axios.post(url, data, { timeout: 5000 })
        .then(response => {
            console.log(`Mensagem enviada para o webhook: ${response.status}`);
        })
        .catch(error => {
            console.error(`Erro ao enviar mensagem para o webhook: ${error.message}`);
        });
}

module.exports = { handleIncomingMessage, sendToWebhook, verificarNumeroNovo };
