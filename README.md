# TRILHA: BACK-END REDE “RAIZES DO NORDESTE” - API REST

API REST desenvolvida em **Node.js**, **Angular** e **MongoDB** para gerenciamento de pedidos, produtos, usuários e pagamentos (mock).

Este projeto foi desenvolvido como parte do Projeto Multidisciplinar da Trilha Back-end Rede “Raízes do Nordeste”, do curso de Análise e Desenvolvimento de Sistemas na Uninter.

---

# Tecnologias

- Node.js (v20.11.1)
- Angular (v17.3.8)
- Express (v5.2.1)
- MongoDB (v8.0.24)
- Mongoose (v9.7.0)
- JWT (v9.0.3)
- bcrypt (v6.0.0)
- Swagger (v6.3.0)

---

# Arquitetura

```
└── src
│    │
│    ├── api
│    │   ├── controllers
│    │   ├── middleware
│    │   ├── routes
│    │   └── swagger
│    │
│    ├── application
│    │   └── useCases
│    │
│    ├── domain
│    │   ├── entities
│    │   └── enums
│    │
│    ├── infrastructure
│    │   └── database
│    │       ├── models
│    │       └── repositories
│    │
│    └── app.js
│
├── package.json
└── server.js
```

# Funcionalidades

## Usuários

- Cadastro de usuário
- Login
- Autenticação JWT
- Alteração de perfil (Role)

Perfis disponíveis:

- CLIENTE
- ATENDENTE
- COZINHA
- GERENTE
- ADMIN

---

## Produtos

- Cadastro de produtos
- Listagem de produtos
- Controle de estoque

---

## Pedidos

- Criação de pedidos
- Associação ao usuário autenticado
- Registro do canal do pedido
- Validação de estoque
- Cálculo do valor total
- Consulta do status do pedido

Status possíveis para o pedido:

- PENDENTE
- COZINHA
- PRONTO
- ENTREGUE
- CANCELADO

---

## Pagamento (Mock)

A API simula um gateway de pagamento.

Resultados possíveis:

- PENDENTE
- APROVADO
  - O status do pedido é atualizado para **COZINHA**
- RECUSADO
  - O status do pedido é atualizado para **CANCELADO**
  - O estoque é restaurado

---

# Segurança

A API utiliza autenticação baseada em **JWT**.

Todas as rotas protegidas exigem:

```
Authorization: Bearer <token>
```

---

# Regras de autorização

A API possui autorização baseada em perfis.

Exemplos:

- Apenas ADMIN pode cadastrar produtos.
- Apenas ADMIN pode alterar o perfil de outro usuário.
- Apenas usuários autenticados podem criar pedidos.
- Apenas usuários autenticados podem consultar seus pedidos.

---

# Instalação

Clone o projeto:

```bash
git clone https://github.com/VivianeMezzomo/raizes-do-nordeste.git
```

Entre na pasta:

```bash
cd raizes-do-nordeste
```

Instale as dependências:

```bash
npm install
```

---

# Variáveis de ambiente

Crie um arquivo **.env**

```
PORT=3000

MONGO_URI=mongodb+srv://<user>:<passsword>@raizesdonordeste.6uj7u3y.mongodb.net/

JWT_SECRET=chave_secreta
```

---

# Executando

```bash
npm run dev
```

---

# Documentação Swagger

Após iniciar a API:

```
http://localhost:3000/api-docs
```

## Autenticação

Algumas rotas exigem autenticação utilizando Bearer Token (JWT).

1. Execute a rota POST /auth/login utilizando um usuário já cadastrado. Para acessar todas as funcionalidades da API, recomenda-se utilizar um usuário com perfil ADMIN.
2. Copie o valor do campo accessToken retornado na resposta.
3. Na interface do Swagger, clique em Authorize e informe o token.
4. Após autorizar, todas as requisições protegidas poderão ser executadas diretamente pelo Swagger.

# Endpoints

## Autenticação

| Método | Endpoint       |
| ------ | -------------- |
| POST   | /auth/register |
| POST   | /auth/login    |

---

## Usuários

| Método | Endpoint        |
| ------ | --------------- |
| PATCH  | /users/:id/role |

---

## Produtos

| Método | Endpoint          |
| ------ | ----------------- |
| POST   | /products/create  |
| GET    | /products/findAll |

---

## Pedidos

| Método | Endpoint           |
| ------ | ------------------ |
| POST   | /orders/create     |
| GET    | /orders/:id/status |

---

## Pagamentos

| Método | Endpoint         |
| ------ | ---------------- |
| POST   | /payments/submit |

---

# Regras de negócio implementadas

- Cadastro de usuários
- Login com JWT
- Autorização por perfil
- Cadastro de produtos
- Controle de estoque
- Validação de estoque antes da criação do pedido
- Registro do canal do pedido
- Criação de pedidos
- Pagamento mock
- Atualização automática do status do pedido
- Restauração do estoque em caso de pagamento recusado

---

# Autor

**Viviane Mezzomo - RU 4739794**
