# Projeto de Envio de Imagens via HTTP

Este projeto permite enviar imagens para um webhook usando requisições HTTP.

## Requisitos

- Node.js (versão 12 ou superior)
- NPM (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
   cd NOME_DO_REPOSITORIO
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

## Configuração

1. Certifique-se de que o servidor do webhook está rodando e acessível na URL especificada no código.

2. Ajuste o caminho da imagem e o URL do webhook no arquivo `utils.js` conforme necessário.

## Uso

Para enviar uma imagem para o webhook, execute o seguinte comando:

```bash
node utils.js
```

Substitua `caminho/para/sua/imagem.jpg` pelo caminho real da imagem que você deseja enviar.

## Estrutura do Projeto

- `utils.js`: Contém a lógica para enviar imagens para o webhook.
- `numeros.json`: Armazena informações sobre números de telefone.

## Contribuição

Contribuições são bem-vindas! Por favor, abra uma issue para discutir mudanças que você gostaria de fazer.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes. 