# Endpoints da API Ticketeria

Base URL: http://localhost:3000/api

## 📂 Pasta: Autenticação (Auth)

### 1. Registrar Usuário

- Método: POST
- URL: /auth/registro
- Descrição: Cria um novo usuário. Por padrão, ele nasce com role: "client".

Body (JSON):

```json
{
  "nome": "Usuário Teste",
  "email": "usuario@teste.com",
  "senha": "senhaSegura123"
}
```

### 2. Login

Método: POST

URL: /auth/login

Descrição: Autentica o usuário e retorna o Token JWT.

Body (JSON):

{
  "email": "usuario@teste.com",
  "senha": "senhaSegura123"
}


Resposta: Copie o valor de token para usar nas próximas requisições.

📂 Pasta: Eventos

3. Listar Eventos (Público)

Método: GET

URL: /eventos

Descrição: Retorna a lista de todos os eventos cadastrados.

4. Detalhes do Evento

Método: GET

URL: /eventos/:id

Exemplo URL: /eventos/64bf... (Use um ID real retornado na lista)

Descrição: Retorna dados detalhados de um evento específico.

5. Criar Evento (Admin)

Método: POST

URL: /eventos

Auth: Bearer Token (Usuário deve ser Admin)

Body (JSON):

{
  "titulo": "Festival de Tecnologia 2025",
  "descricao": "Um evento sobre Node.js e Arquitetura de Software.",
  "dataEvento": "2025-11-20",
  "local": "Centro de Convenções",
  "preco": 100.00,
  "capacidadeTotal": 200
}


6. Atualizar Evento (Admin)

Método: PUT

URL: /eventos/:id

Auth: Bearer Token (Admin)

Body (JSON):

{
  "titulo": "Festival Tech 2025 (Nova Data)",
  "dataEvento": "2025-12-01",
  "preco": 120.00,
  "capacidadeTotal": 250
}


7. Deletar Evento (Admin)

Método: DELETE

URL: /eventos/:id

Auth: Bearer Token (Admin)

Descrição: Remove o evento e cancela automaticamente todos os ingressos vinculados a ele.

📂 Pasta: Ingressos (Tickets)

8. Comprar Ingresso

Método: POST

URL: /tickets/comprar

Auth: Bearer Token (Qualquer usuário logado)

Body (JSON):

{
  "eventoId": "INSIRA_O_ID_DO_EVENTO_AQUI"
}


9. Meus Pedidos

Método: GET

URL: /tickets/meus-pedidos

Auth: Bearer Token

Descrição: Retorna todos os ingressos comprados pelo usuário logado.

10. Cancelar Ingresso

Método: POST

URL: /tickets/cancelar/:id

Exemplo URL: /tickets/cancelar/64bf... (Use o ID do TICKET, não do evento)

Auth: Bearer Token

Descrição: Cancela o ingresso e devolve a vaga para o estoque do evento.

📂 Pasta: Usuários (Users)

11. Meu Perfil

Método: GET

URL: /users/perfil

Auth: Bearer Token

Descrição: Retorna os dados do usuário logado.

12. Atualizar Perfil

Método: PUT

URL: /users/perfil

Auth: Bearer Token

Body (JSON):

{
  "nome": "Nome Atualizado da Silva"
}


13. Listar Todos Usuários (Admin)

Método: GET

URL: /users

Auth: Bearer Token (Admin)

Descrição: Retorna lista de todos os usuários cadastrados no sistema.

14. Deletar Usuário (Admin)

Método: DELETE

URL: /users/:id

Auth: Bearer Token (Admin)

Descrição: Remove um usuário do sistema pelo ID.
