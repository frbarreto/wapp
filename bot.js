// Importando o cliente e as funções utilitárias
const client = require('./client');
const { sendToWebhook } = require('./utils');
require('./server');

// Evento para capturar mensagens recebidas
client.on('message', msg => {
    console.log('Mensagem recebida:', msg.body);
    console.log('Número do remetente:', msg.from);
    console.log('Chamando sendToWebhook...');
    sendToWebhook(msg);
    console.log('sendToWebhook foi chamado.');
});

// Inicializando o cliente
client.initialize();
