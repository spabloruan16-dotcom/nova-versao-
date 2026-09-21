# Moda Center V5.2

Esta pasta e uma copia independente da V5. Ela preserva catalogo, lojas, pedidos, chats e a interface visual, mas prepara a autenticacao para MySQL com bcrypt.

## Rodar localmente

```powershell
npm install
npm start
```

Abra `http://localhost:3000`.

Por padrao, a aplicacao usa `server/data.json`, para continuar funcionando sem MySQL. Para ativar MySQL:

1. Copie `.env.example` para `.env`.
2. Altere `DB_MODE=mysql` e preencha as credenciais.
3. Crie o banco e a tabela executando `schema.sql` no MySQL.
4. Inicie com `npm start`.

A tabela `usuarios` armazena apenas o hash da senha. O cadastro e login aceitam as rotas atuais `/api/auth/register` e `/api/auth/login`, alem dos aliases `/api/register` e `/api/login`.

Teste a conexao com:

```powershell
npm run db:check
```

O arquivo `.env` nao deve ser enviado ao GitHub.