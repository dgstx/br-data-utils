// Teste da estrutura modular do br-data-utils
// Testando diferentes formas de importação

console.log('=== Testando Importação Completa ===');
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

console.log('CPF formatado:', formatCPFIndex('12345678901'));
console.log('CPF válido:', validateCPFIndex('123.456.789-01'));
console.log('CNPJ formatado:', formatCNPJIndex('11222333000181'));
console.log('CNPJ válido:', validateCNPJIndex('11.222.333/0001-81'));
console.log('CEP formatado:', formatCEPIndex('12345678'));
console.log('CEP válido:', validateCEPIndex('12345-678'));
console.log('Telefone formatado:', formatTelefoneIndex('11987654321'));
console.log('Telefone válido:', validateTelefoneIndex('(11) 98765-4321'));

console.log('\n=== Testando Importação Individual ===');
import {
  formatCPF as formatCPFModule,
  validateCPF as validateCPFModule
} from '../src/modules/cpf.ts';
import {
  formatCNPJ as formatCNPJModule,
  validateCNPJ as validateCNPJModule
} from '../src/modules/cnpj.ts';
import {
  formatCEP as formatCEPModule,
  validateCEP as validateCEPModule
} from '../src/modules/cep.ts';
import {
  formatTelefone as formatTelefoneModule,
  validateTelefone as validateTelefoneModule
} from '../src/modules/telefone.ts';

console.log('CPF formatado (função individual):', formatCPFModule('98765432100'));
console.log('CPF válido (função individual):', validateCPFModule('987.654.321-00'));
console.log('CNPJ formatado (função individual):', formatCNPJModule('12345678901234'));
console.log('CNPJ válido (função individual):', validateCNPJModule('12.345.678/9012-34'));
console.log('CEP formatado (função individual):', formatCEPModule('87654321'));
console.log('CEP válido (função individual):', validateCEPModule('87654-321'));
console.log('Telefone formatado (função individual):', formatTelefoneModule('21987654321'));
console.log('Telefone válido (função individual):', validateTelefoneModule('(21) 98765-4321'));

console.log('\n=== Testando Importação de Funções Específicas ===');
import { formatCPF as formatCPFOnly } from '../src/modules/cpf.ts';
import { validateCNPJ as validateCNPJOnly } from '../src/modules/cnpj.ts';
import { formatCEP as formatCEPOOnly } from '../src/modules/cep.ts';
import { validateTelefone as validateTelefoneOnly } from '../src/modules/telefone.ts';

console.log('CPF formatado (função específica):', formatCPFOnly('11122233344'));
console.log('CNPJ válido (função específica):', validateCNPJOnly('11.122.333/4444-55'));
console.log('CEP formatado (função específica):', formatCEPOOnly('55555777'));
console.log('Telefone válido (função específica):', validateTelefoneOnly('(55) 5555-7777'));

console.log('\n=== Teste Concluído ===');