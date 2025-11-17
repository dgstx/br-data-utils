// Teste do sistema de roteamento para imports diretos sem /modules/
// Testando se os arquivos de roteamento funcionam corretamente

console.log('=== Testando Sistema de Roteamento ===');

// Teste 1: Importação direta sem /modules/ (API pública)
console.log('\n1. Testando importação direta (roteamento):');
import {
  formatCPF as formatCPFRoute,
  validateCPF as validateCPFRoute
} from '../src/cpf.ts';
import {
  formatCNPJ as formatCNPJRoute,
  validateCNPJ as validateCNPJRoute
} from '../src/cnpj.ts';
import {
  formatCEP as formatCEPRoute,
  validateCEP as validateCEPRoute
} from '../src/cep.ts';
import {
  formatTelefone as formatTelefoneRoute,
  validateTelefone as validateTelefoneRoute
} from '../src/telefone.ts';

console.log('CPF formatado (roteamento):', formatCPFRoute('12345678901'));
console.log('CPF válido (roteamento):', validateCPFRoute('123.456.789-01'));
console.log('CNPJ formatado (roteamento):', formatCNPJRoute('11222333000181'));
console.log('CNPJ válido (roteamento):', validateCNPJRoute('11.222.333/0001-81'));
console.log('CEP formatado (roteamento):', formatCEPRoute('12345678'));
console.log('CEP válido (roteamento):', validateCEPRoute('12345-678'));
console.log('Telefone formatado (roteamento):', formatTelefoneRoute('11987654321'));
console.log('Telefone válido (roteamento):', validateTelefoneRoute('(11) 98765-4321'));

// Teste 2: Importação de funções individuais via roteamento
console.log('\n2. Testando funções individuais (roteamento):');
import {
  formatCPF as formatCPFRoute2,
  validateCPF as validateCPFRoute2
} from '../src/cpf.ts';
import {
  formatCNPJ as formatCNPJRoute2,
  validateCNPJ as validateCNPJRoute2
} from '../src/cnpj.ts';
import {
  formatCEP as formatCEPRoute2,
  validateCEP as validateCEPRoute2
} from '../src/cep.ts';
import {
  formatTelefone as formatTelefoneRoute2,
  validateTelefone as validateTelefoneRoute2
} from '../src/telefone.ts';

console.log('CPF formatado (função individual):', formatCPFRoute2('98765432100'));
console.log('CPF válido (função individual):', validateCPFRoute2('987.654.321-00'));
console.log('CNPJ formatado (função individual):', formatCNPJRoute2('12345678901234'));
console.log('CNPJ válido (função individual):', validateCNPJRoute2('12.345.678/9012-34'));
console.log('CEP formatado (função individual):', formatCEPRoute2('87654321'));
console.log('CEP válido (função individual):', validateCEPRoute2('87654-321'));
console.log('Telefone formatado (função individual):', formatTelefoneRoute2('21987654321'));
console.log('Telefone válido (função individual):', validateTelefoneRoute2('(21) 98765-4321'));

// Teste 3: Importação via index.js (API principal)
console.log('\n3. Testando importação via index.js (API principal):');
import {
  formatCPF as formatCPFIndex,
  validateCPF as validateCPFIndex,
  formatCNPJ as formatCNPJIndex,
  validateCNPJ as validateCNPJIndex,
  formatCEP as formatCEPIndex,
  validateCEP as validateCEPIndex,
  formatTelefone as formatTelefoneIndex,
  validateTelefone as validateTelefoneIndex
} from '../src/index.ts';

console.log('CPF formatado (index):', formatCPFIndex('11122233344'));
console.log('CPF válido (index):', validateCPFIndex('111.222.333-44'));
console.log('CNPJ formatado (index):', formatCNPJIndex('11222333000181'));
console.log('CNPJ válido (index):', validateCNPJIndex('11.222.333/0001-81'));
console.log('CEP formatado (index):', formatCEPIndex('12345678'));
console.log('CEP válido (index):', validateCEPIndex('12345-678'));
console.log('Telefone formatado (index):', formatTelefoneIndex('11987654321'));
console.log('Telefone válido (index):', validateTelefoneIndex('(11) 98765-4321'));

// Teste 4: Importação de funções individuais via index.js
console.log('\n4. Testando funções individuais via index.js:');
import {
  formatCPF as formatCPFIndex2,
  validateCPF as validateCPFIndex2,
  formatCNPJ as formatCNPJIndex2,
  validateCNPJ as validateCNPJIndex2,
  formatCEP as formatCEPIndex2,
  validateCEP as validateCEPIndex2,
  formatTelefone as formatTelefoneIndex2,
  validateTelefone as validateTelefoneIndex2
} from '../src/index.ts';

console.log('CPF formatado (função via index):', formatCPFIndex2('55566677788'));
console.log('CPF válido (função via index):', validateCPFIndex2('555.666.777-88'));
console.log('CNPJ formatado (função via index):', formatCNPJIndex2('12345678901234'));
console.log('CNPJ válido (função via index):', validateCNPJIndex2('12.345.678/9012-34'));
console.log('CEP formatado (função via index):', formatCEPIndex2('98765432'));
console.log('CEP válido (função via index):', validateCEPIndex2('98765-432'));
console.log('Telefone formatado (função via index):', formatTelefoneIndex2('31987654321'));
console.log('Telefone válido (função via index):', validateTelefoneIndex2('(31) 98765-4321'));

console.log('\n=== Teste de Roteamento Concluído ===');