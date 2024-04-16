# Food Back-end

Criação de um back-end completo, contemplando API e banco de dados. Nesse projeto a API é capaz de criar um usuário. Criar seções de usuários autenticados por token. Verificar nível de permissão para cada usuário, e também possui tratamentos personalizados para os erros. 

### :arrow_forward: Rodando o projeto
Você precisa ter o node instalado. 

1. Faça o clone desse repositório.
2. Rode o comando `npm install`, para instalar as dependências.
3. Rode o comando `npm run migrate`, para criar o banco de dados.
4. Rode o comando `npm run dev`, para rodar o projeto. 

Arquivo insomnia com documentação da API na raiz do projeto.

Para acessar o repositório do front-end do projeto [clique aqui](https://github.com/viniciusxsousa/food-frontend).

### :globe_with_meridians: Deploy da api

* https://food-backend-ojx8.onrender.com


### :atom_symbol: Tecnologias 
* [Node](https://nodejs.org/en)
* [Express](https://expressjs.com/pt-br/)
* [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
* [Knex.js](https://knexjs.org/)
* [Multer](https://www.npmjs.com/package/multer)
* [bcrypt.js](bcrypt.js)
* [SQLite](https://www.sqlite.org/)


### :computer_mouse: Features
* API com cadastro de usuário
* API com CRUD completo de um produto
* Nível de permissão para criar, editar ou deletar produto.
* Criptografia das senhas.
* Validação do usuário por token JWT.
