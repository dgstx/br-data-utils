/**
 * CEP (Código de Endereçamento Postal) - Brazilian ZIP Code
 * Módulo para formatação e validação de CEP
 */

export const formatCEP = (cep: string): string | null => {
  const cleaned = cep.replace(/\D/g, '');

  if (cleaned.length !== 8) return null;

  return cleaned.replace(/(\d{5})(\d{3})/, '$1-$2');
};

export const validateCEP = (cep: string): boolean => {
  const cleaned = cep.replace(/\D/g, '');

  if (cleaned.length !== 8) return false;

  // Verifica padrões inválidos (todos os dígitos iguais)
  const allDigitsAreSame = cleaned
    .split('')
    .every(digit => digit === cleaned[0]);
  if (allDigitsAreSame) return false;

  // Validação básica de intervalo - CEPs começando com 0000 não são atribuídos
  const firstDigit = parseInt(cleaned[0]);
  const secondDigit = parseInt(cleaned[1]);

  if (
    firstDigit === 0 &&
    secondDigit === 0 &&
    cleaned.substring(2, 4) === '00'
  ) {
    return false;
  }

  return true;
};
