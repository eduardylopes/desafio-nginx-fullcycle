# Desafio Full Cycle: Nginx com NodeJS

Este repositório foi criado como parte do Desafio Full Cycle, que tem como objetivo criar uma aplicação com o nginx na frente de um servidor nodejs com mysql.

## Tecnologias Utilizadas

- [Nodejs](https://nodejs.org/): A linguagem de programação utilizada para criar a aplicação.
- [Nginx](https://www.nginx.com/): Servidor web e proxy reverso de alto desempenho.
- [Docker](https://www.docker.com/): A ferramenta de containers para empacotar a aplicação em uma imagem.

## Instruções de Uso

1. Certifique-se de ter o Docker instalado em sua máquina.
2. Clone este repositório:
   ```bash
   git clone https://github.com/eduardylopes/desafio-nginx-fullcycle
   ```
3. Acesse a raiz do projeto:
   ```bash
   cd desafio-nginx-fullcycle
   ```
4. Execute os containers:
   ```bash
   docker compose up
   ```

### Endpoints

1. Criar um usuário:
   ```bash
   curl -X POST -H "Content-Type: application/json" -d '{"name":"Novo Usuário"}' localhost/people/create
   ```
2. Listagem de usuários cadastrados:
   ```bash
   curl localhost
   ```

### Docker Hub

- [Repositório da imagem nodejs](https://hub.docker.com/repository/docker/eduardylopes/desafio-nginx-fullcycle/general)
