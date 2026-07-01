# Exemplo TDD: Adicionando Calculadora

Este é um exemplo prático de como usar TDD com GitHub Copilot para adicionar uma nova funcionalidade.

## Passo 1: Red - Escreva o teste primeiro

Crie um arquivo `tests/calculator.test.js`:

```javascript
const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Calculator', () => {
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add positive and negative numbers', () => {
      expect(add(5, -3)).toBe(2);
    });
  });

  describe('subtract', () => {
    test('should subtract two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });
  });

  // Continue com multiply e divide...
});
```

## Passo 2: Green - Implemente o código mínimo

Crie um arquivo `src/calculator.js`:

```javascript
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Continue implementando...

module.exports = { add, subtract };
```

## Passo 3: Refactor - Melhore o código

Adicione validações, tratamento de erros, etc.

## Dica: GitHub Copilot

Quando você escrever comentários como:
```javascript
// Função para calcular a média de um array de números
```

O Copilot irá sugerir automaticamente a implementação!