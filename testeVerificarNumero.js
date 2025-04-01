const { verificarNumeroNovo } = require('./utils');

const numeroTeste = '558296081343@c.us';
const resultado = verificarNumeroNovo(numeroTeste);

if (resultado === 1) {
    console.log(`Número ${numeroTeste} foi adicionado como novo.`);
} else {
    console.log(`Número ${numeroTeste} já existe no JSON.`);
}
