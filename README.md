# GitHub Copilot com TDD - API de Produtos

Este é um projeto de aprendizado que demonstra como usar o GitHub Copilot com TDD (Test-Driven Development) para construir uma API de produtos. O objetivo é desenvolver uma API REST completa com operações CRUD para gerenciamento de produtos, utilizando dados mockados e seguindo as melhores práticas de desenvolvimento orientado por testes.

## 🎯 Objetivo do Projeto

Construir uma **API de Produtos** com as seguintes características:

- **CRUD completo**: Criar, listar, buscar, atualizar e remover produtos
- **Dados mockados**: Utilizar dados em memória para simular um banco de dados
- **TDD**: Desenvolver seguindo o ciclo Red-Green-Refactor
- **GitHub Copilot**: Acelerar o desenvolvimento com IA
- **Testes abrangentes**: Cobertura completa dos endpoints e funcionalidades
- **Validação de dados**: Garantir integridade dos dados de entrada

## 🚀 Configuração Inicial

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- GitHub Copilot habilitado no seu editor
- VS Code (recomendado)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/dev-pods/github-copilot-with-tdd-project.git

# Entre no diretório
cd github-copilot-with-tdd-project

# Instale as dependências
npm install
```

## 🧪 Executando os Testes

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch (desenvolvimento)
npm run test:watch

# Executar testes com coverage
npm run test:coverage
```

## 🏃‍♂️ Executando a Aplicação

```bash
# Modo desenvolvimento (com nodemon)
npm run dev

# Modo produção
npm start
```

A API estará disponível em `http://localhost:3000`

## 📚 Estrutura do Projeto

```
src/
├── index.js           # Servidor Express principal

tests/
├── api.test.js        # Testes dos endpoints da API

package.json           # Configurações e dependências
```

## 🛠️ Tecnologias Utilizadas

- **Express.js**: Framework web para Node.js
- **Jest**: Framework de testes
- **Supertest**: Biblioteca para testes de API
- **Nodemon**: Reinicialização automática durante desenvolvimento

## 📝 Endpoints da API de Produtos

### GET /
Endpoint de boas-vindas que retorna informações sobre a API.

**Resposta:**
```json
{
  "message": "API is running successfully"
}
```

### Endpoints de Produtos (a serem implementados)

#### GET /products
Lista todos os produtos.

#### GET /products/:id
Busca um produto específico por ID.

#### POST /products
Cria um novo produto.
**Body:**
```json
{
  "name": "Nome do Produto",
  "description": "Descrição do produto",
  "price": 99.99,
  "category": "Categoria",
  "stock": 10
}
```

#### PUT /products/:id
Atualiza um produto existente.

#### DELETE /products/:id
Remove um produto.

## 📦 Modelo de Dados - Produto

```javascript
{
  "id": "string", // UUID único do produto
  "name": "string", // Nome do produto (obrigatório)
  "description": "string", // Descrição detalhada
  "price": "number", // Preço em reais (obrigatório)
  "category": "string", // Categoria do produto
  "stock": "number", // Quantidade em estoque
  "createdAt": "string", // Data de criação (ISO 8601)
  "updatedAt": "string" // Data da última atualização (ISO 8601)
}
```

### Exemplo de Produto:
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "name": "Smartphone XYZ",
  "description": "Smartphone com 128GB de armazenamento e câmera de 48MP",
  "price": 899.99,
  "category": "Eletrônicos",
  "stock": 25,
  "createdAt": "2025-09-18T10:30:00.000Z",
  "updatedAt": "2025-09-18T10:30:00.000Z"
}
```

## 🔄 Fluxo TDD

Este projeto demonstra o ciclo TDD:

1. **Red**: Escreva um teste que falha
2. **Green**: Escreva o código mínimo para fazer o teste passar
3. **Refactor**: Melhore o código mantendo os testes passando

### Exemplo Prático - Desenvolvimento da API de Produtos

1. **Red**: Escrever teste para endpoint `GET /products`
2. **Green**: Implementar o endpoint básico para fazer o teste passar
3. **Refactor**: Melhorar a estrutura do código, extrair para controladores

Os testes demonstram como testar:
- Endpoints de API (GET, POST, PUT, DELETE)
- Validação de dados de entrada
- Respostas de sucesso e erro
- Estrutura de dados dos produtos
- Casos extremos e validações

## 💡 Dicas para usar GitHub Copilot com TDD

1. **Escreva os testes primeiro**: O Copilot entende melhor o contexto quando vê os testes
2. **Use comentários descritivos**: Ajudam o Copilot a gerar código mais preciso
3. **Nomeação clara**: Funções e variáveis bem nomeadas geram sugestões melhores
4. **Iteração**: Use o Copilot para refatorar e melhorar o código existente

## 🎯 Roadmap de Desenvolvimento

### Fase 1: Setup e Estrutura Base ✅
- [x] Configuração inicial do projeto
- [x] Setup de testes com Jest
- [x] Servidor Express básico

### Fase 2: API de Produtos (Em Desenvolvimento)
- [ ] Modelo de dados para produtos - Criar estrutura de dados mockados
- [ ] GET /products - Listar todos os produtos
- [ ] GET /products/:id - Buscar produto por ID
- [ ] POST /products - Criar novo produto
- [ ] PUT /products/:id - Atualizar produto
- [ ] DELETE /products/:id - Remover produto
- [ ] Validação de dados de entrada
- [ ] Tratamento de erros específicos

### Fase 3: Melhorias e Expansões
- [ ] Filtros e paginação para listagem
- [ ] Busca por nome/categoria
- [ ] Validação avançada de campos
- [ ] Middleware de logs
- [ ] Documentação com Swagger
- [ ] Containerização com Docker

## 📖 Recursos Adicionais

- [Documentação do Jest](https://jestjs.io/docs/getting-started)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [GitHub Copilot Docs](https://docs.github.com/en/copilot)
- [TDD Best Practices](https://github.com/testdouble/contributing-tests/wiki/Test-Driven-Development)

## 📄 Licença

Este projeto está sob a licença ISC.