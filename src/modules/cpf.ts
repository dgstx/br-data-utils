/**
 * CPF (Cadastro de Pessoas Físicas) - Brazilian Individual Taxpayer ID
 * Módulo para formatação e validação de CPF
 */

export const formatCPF = (cpf: string): string | null => {
  const cleaned = cpf.replace(/\D/g, '');

  if (cleaned.length !== 11) return null;

  return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

export const validateCPF = (cpf: string): boolean => {
  const cleaned = cpf.replace(/\D/g, '');

  if (cleaned.length !== 11) return false;

  const digits = cleaned.split('').map(Number);

  // Verifica sequências com todos os dígitos idênticos
  const allDigitsAreSame = digits.every(digit => digit === digits[0]);
  if (allDigitsAreSame) return false;

  // Calcula o primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += digits[i] * (10 - i);
  }
  let firstVerifier = 11 - (sum % 11);
  if (firstVerifier >= 10) firstVerifier = 0;

  // Calcula o segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += digits[i] * (11 - i);
  }
  let secondVerifier = 11 - (sum % 11);
  if (secondVerifier >= 10) secondVerifier = 0;

  return digits[9] === firstVerifier && digits[10] === secondVerifier;
};
