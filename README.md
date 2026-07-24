# 🇧🇷 BR Data Utils

> **Sua biblioteca brasileira para formatar e validar CPF, CNPJ, CEP e telefones sem dor de cabeça! / Your go-to Brazilian library for formatting and validating CPF, CNPJ, ZIP codes and phones hassle-free!**

## 🇧🇷 Português (Brasil)

### 📋 O que é isso basicamente?

Uma biblioteca TypeScript super leve e modular que te ajuda a trabalhar com dados brasileiros na sua aplicação. Chega de quebrar a cabeça com formatação e validação de CPF, CNPJ, CEP e telefones!

### 🚀 Como instalar

```bash
npm install br-data-utils
```

### 📖 Como usar

#### Importação individual (o jeito mais top para tree-shaking)

```javascript
// Importa só o que você precisa (melhor pro bundle size)
import { formatCPF, validateCPF } from 'br-data-utils/cpf';
import { formatCNPJ, validateCNPJ } from 'br-data-utils/cnpj';
import { formatCEP, validateCEP } from 'br-data-utils/cep';
import { formatTelefoneFixo, validateTelefoneFixo } from 'br-data-utils/telefone-fixo';
import { formatTelefoneMovel, validateTelefoneMovel } from 'br-data-utils/telefone-movel';

// CPF
const cpfFormatado = formatCPF('12345678901'); // '123.456.789-01'
const cpfValido = validateCPF('123.456.789-01'); // true

// CNPJ
const cnpjFormatado = formatCNPJ('11222333000181'); // '11.222.333/0001-81'
const cnpjValido = validateCNPJ('11.222.333/0001-81'); // true
const cnpjAlfanumerico = formatCNPJ('12ABC34501DE35'); // '12.ABC.345/01DE-35'
const cnpjAlfanumericoValido = validateCNPJ('12.ABC.345/01DE-35'); // true

// CEP
const cepFormatado = formatCEP('12345678'); // '12345-678'
const cepValido = validateCEP('12345-678'); // true

// Telefone Fixo
const foneFixoFormatado = formatTelefoneFixo('1131234567'); // '(11) 3123-4567'
const foneFixoValido = validateTelefoneFixo('(11) 3123-4567'); // true

// Telefone Móvel
const foneMovelFormatado = formatTelefoneMovel('11987654321'); // '(11) 98765-4321'
const foneMovelValido = validateTelefoneMovel('(11) 98765-4321'); // true
```

#### Importação completa (se não estiver ligando pro bundle size)

```javascript
// Importa tudo de uma vez
import {
  formatCPF, validateCPF,
  formatCNPJ, validateCNPJ,
  formatCEP, validateCEP,
  formatTelefoneFixo, validateTelefoneFixo,
  formatTelefoneMovel, validateTelefoneMovel
} from 'br-data-utils';
```

### 🏗️ Arquitetura do projeto

A biblioteca foi pensada para ser modular e performática:

```
src/
├── index.ts              # Ponto central de exportação
├── cpf.ts                # Roteamento direto CPF
├── cnpj.ts               # Roteamento direto CNPJ
├── cep.ts                # Roteamento direto CEP
├── modules/              # Módulos principais
│   ├── cpf.ts            # Lógica de CPF
│   ├── cnpj.ts           # Lógica de CNPJ
│   ├── cep.ts            # Lógica de CEP
│   ├── telefone-fixo.ts  # Lógica de telefone fixo
│   └── telefone-movel.ts # Lógica de telefone móvel
└── types/                # Tipos TypeScript
    └── jest.d.ts         # Tipos para testes
```

### ✅ O que cada validação faz

- **CPF**: Algoritmo oficial com dígitos verificadores e bloqueio de sequências óbvias (111.111.111-11, etc.)
- **CNPJ**: Aceita CNPJs numéricos e alfanuméricos, usando o algoritmo oficial de dígitos verificadores
- **CEP**: Valida formato de 8 dígitos e bloqueia CEPs impossíveis
- **Telefone Fixo**: Valida DDDs brasileiros reais e formato de 10 dígitos
- **Telefone Móvel**: Valida DDDs, formato de 11 dígitos e prefixos válidos (começa com 9)

### 📦 API Reference

#### CPF
- `formatCPF(cpf: string): string | null` - Formata CPF ou retorna null se inválido
- `validateCPF(cpf: string): boolean` - Valida CPF usando algoritmo oficial

#### CNPJ
- `formatCNPJ(cnpj: string): string | null` - Formata CNPJ numérico ou alfanumérico, ou retorna null se inválido
- `validateCNPJ(cnpj: string): boolean` - Valida CNPJ numérico ou alfanumérico usando algoritmo oficial

CNPJs alfanuméricos possuem 14 posições: as 12 primeiras aceitam letras maiúsculas e números, e as duas últimas são dígitos verificadores numéricos. A máscara continua sendo `XX.XXX.XXX/XXXX-XX`. Letras minúsculas são convertidas para maiúsculas.

As regras seguem a [documentação técnica da Receita Federal](https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/documentos-tecnicos/cnpj/manual-dv-cnpj.pdf).

```javascript
formatCNPJ('12ABC34501DE35'); // '12.ABC.345/01DE-35'
validateCNPJ('12.ABC.345/01DE-35'); // true
```

#### CEP
- `formatCEP(cep: string): string | null` - Formata CEP ou retorna null se inválido
- `validateCEP(cep: string): boolean` - Valida formato do CEP

#### Telefone Fixo
- `formatTelefoneFixo(telefone: string): string | null` - Formata telefone fixo ou retorna null se inválido
- `validateTelefoneFixo(telefone: string): boolean` - Valida telefone fixo

#### Telefone Móvel
- `formatTelefoneMovel(telefone: string): string | null` - Formata telefone móvel ou retorna null se inválido
- `validateTelefoneMovel(telefone: string): boolean` - Valida telefone móvel

### 🛠️ Tech Stack

- **TypeScript**: Type safety pra não ter erro bobo
- **ESM**: Módulos ES6 modernos
- **Zero dependências**: Nenhum pacote externo pra não pesar seu bundle
- **Testes automatizados**: Cobertura completa com Jest
- **Tree-shaking friendly**: Importe só o que usar

### 🎯 Por que usar essa biblioteca?

- **Leve**: Zero dependências de produção
- **Modular**: Importe só o que precisa
- **TypeScript**: Autocompletar e segurança de tipos
- **Testada**: 37+ testes cobrindo todos os casos edge
- **Atualizada**: Segue as regras mais recentes de validação brasileiras

## 🇺🇸 English (US)

### 📋 What's this basically?

A super lightweight and modular TypeScript library that helps you work with Brazilian data in your application. No more headaches with formatting and validating CPF, CNPJ, ZIP codes and phone numbers!

### 🚀 Installation

```bash
npm install br-data-utils
```

### 📖 How to use

#### Individual import (the best way for tree-shaking)

```javascript
// Import only what you need (better for bundle size)
import { formatCPF, validateCPF } from 'br-data-utils/cpf';
import { formatCNPJ, validateCNPJ } from 'br-data-utils/cnpj';
import { formatCEP, validateCEP } from 'br-data-utils/cep';
import { formatTelefoneFixo, validateTelefoneFixo } from 'br-data-utils/telefone-fixo';
import { formatTelefoneMovel, validateTelefoneMovel } from 'br-data-utils/telefone-movel';

// CPF (Brazilian individual taxpayer ID)
const formattedCPF = formatCPF('12345678901'); // '123.456.789-01'
const isCPFValid = validateCPF('123.456.789-01'); // true

// CNPJ (Brazilian company ID)
const formattedCNPJ = formatCNPJ('11222333000181'); // '11.222.333/0001-81'
const isCNPJValid = validateCNPJ('11.222.333/0001-81'); // true
const formattedAlphanumericCNPJ = formatCNPJ('12ABC34501DE35'); // '12.ABC.345/01DE-35'
const isAlphanumericCNPJValid = validateCNPJ('12.ABC.345/01DE-35'); // true

// CEP (ZIP code)
const formattedCEP = formatCEP('12345678'); // '12345-678'
const isCEPValid = validateCEP('12345-678'); // true

// Landline Phone
const formattedLandline = formatTelefoneFixo('1131234567'); // '(11) 3123-4567'
const isLandlineValid = validateTelefoneFixo('(11) 3123-4567'); // true

// Mobile Phone
const formattedMobile = formatTelefoneMovel('11987654321'); // '(11) 98765-4321'
const isMobileValid = validateTelefoneMovel('(11) 98765-4321'); // true
```

#### Complete import (if you don't care about bundle size)

```javascript
// Import everything at once
import {
  formatCPF, validateCPF,
  formatCNPJ, validateCNPJ,
  formatCEP, validateCEP,
  formatTelefoneFixo, validateTelefoneFixo,
  formatTelefoneMovel, validateTelefoneMovel
} from 'br-data-utils';
```

### 🏗️ Project Architecture

The library was designed to be modular and performant:

```
src/
├── index.ts              # Central export point
├── cpf.ts                # Direct CPF routing
├── cnpj.ts               # Direct CNPJ routing
├── cep.ts                # Direct CEP routing
├── modules/              # Main modules
│   ├── cpf.ts            # CPF logic
│   ├── cnpj.ts           # CNPJ logic
│   ├── cep.ts            # CEP logic
│   ├── telefone-fixo.ts  # Landline phone logic
│   └── telefone-movel.ts # Mobile phone logic
└── types/                # TypeScript types
    └── jest.d.ts         # Test types
```

### ✅ What each validation does

- **CPF**: Official algorithm with check digits and blocks obvious sequences (111.111.111-11, etc.)
- **CNPJ**: Supports numeric and alphanumeric CNPJs using the official check digit algorithm
- **CEP**: Validates 8-digit format and blocks impossible ZIP codes
- **Landline Phone**: Validates real Brazilian DDDs and 10-digit format
- **Mobile Phone**: Validates DDDs, 11-digit format and valid prefixes (starts with 9)

### 📦 API Reference

#### CPF
- `formatCPF(cpf: string): string | null` - Formats CPF or returns null if invalid
- `validateCPF(cpf: string): boolean` - Validates CPF using official algorithm

#### CNPJ
- `formatCNPJ(cnpj: string): string | null` - Formats numeric or alphanumeric CNPJ, or returns null if invalid
- `validateCNPJ(cnpj: string): boolean` - Validates numeric or alphanumeric CNPJ using the official algorithm

Alphanumeric CNPJs have 14 positions: the first 12 accept uppercase letters and numbers, while the last two positions remain numeric check digits. The mask remains `XX.XXX.XXX/XXXX-XX`. Lowercase letters are converted to uppercase.

The rules follow the [Brazilian Federal Revenue technical documentation](https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/documentos-tecnicos/cnpj/manual-dv-cnpj.pdf).

```javascript
formatCNPJ('12ABC34501DE35'); // '12.ABC.345/01DE-35'
validateCNPJ('12.ABC.345/01DE-35'); // true
```

#### CEP
- `formatCEP(cep: string): string | null` - Formats CEP or returns null if invalid
- `validateCEP(cep: string): boolean` - Validates CEP format

#### Landline Phone
- `formatTelefoneFixo(telefone: string): string | null` - Formats landline or returns null if invalid
- `validateTelefoneFixo(telefone: string): boolean` - Validates landline phone

#### Mobile Phone
- `formatTelefoneMovel(telefone: string): string | null` - Formats mobile or returns null if invalid
- `validateTelefoneMovel(telefone: string): boolean` - Validates mobile phone

### 🛠️ Tech Stack

- **TypeScript**: Type safety to avoid silly mistakes
- **ESM**: Modern ES6 modules
- **Zero dependencies**: No external packages to weigh down your bundle
- **Automated tests**: Complete coverage with Jest
- **Tree-shaking friendly**: Import only what you use

### 🎯 Why use this library?

- **Lightweight**: Zero production dependencies
- **Modular**: Import only what you need
- **TypeScript**: Autocomplete and type safety
- **Well-tested**: 37+ tests covering all edge cases
- **Up-to-date**: Follows the latest Brazilian validation rules

## 🤝 Contribuição / Contributing

Contribuições são super bem-vindas! Só abrir uma PR ou issue. / Contributions are super welcome! Just open a PR or issue.
