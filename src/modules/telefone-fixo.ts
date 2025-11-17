/**
 * Telefone Fixo - Brazilian Landline Phone Numbers
 * Módulo para formatação e validação de telefones fixos brasileiros
 */

export const formatTelefoneFixo = (telefone: string): string | null => {
  const cleaned = telefone.replace(/\D/g, '');

  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }

  return null;
};

export const validateTelefoneFixo = (telefone: string): boolean => {
  const cleaned = telefone.replace(/\D/g, '');

  if (cleaned.length !== 10) {
    return false;
  }

  // Lista de códigos DDD válidos no Brasil
  const validDDDs = [
    '11', '12', '13', '14', '15', '16', '17', '18', '19', // São Paulo
    '21', '22', '24', // Rio de Janeiro
    '27', '28', // Espírito Santo
    '31', '32', '33', '34', '35', '37', '38', // Minas Gerais
    '41', '42', '43', '44', '45', '46', // Paraná
    '47', '48', '49', // Santa Catarina
    '51', '53', '54', '55', // Rio Grande do Sul
    '61', // Distrito Federal
    '62', '64', // Goiás
    '63', // Tocantins
    '65', '66', // Mato Grosso
    '67', // Mato Grosso do Sul
    '68', // Acre
    '69', // Rondônia
    '71', '73', '74', '75', '77', // Bahia
    '79', // Sergipe
    '81', '82', '83', '85', '87', '88', // Pernambuco, Paraíba, Rio Grande do Norte, Ceará, Piauí
    '91', '92', '93', '94', '95', '96', '97', '98', '99', // Pará, Amazonas, Amapá, etc.
  ];

  // Valida DDD
  const ddd = cleaned.substring(0, 2);
  if (!validDDDs.includes(ddd)) {
    return false;
  }

  // Verifica padrões inválidos (todos os dígitos iguais)
  const phoneNumber = cleaned.substring(2);
  const allDigitsAreSame = phoneNumber
    .split('')
    .every(digit => digit === phoneNumber[0]);
  if (allDigitsAreSame) {
    return false;
  }

  // Verifica prefixos válidos para telefone fixo (não pode começar com 0 ou 1)
  const firstDigit = phoneNumber[0];
  if (firstDigit === '0' || firstDigit === '1') {
    return false;
  }

  return true;
};
