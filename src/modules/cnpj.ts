/**
 * CNPJ (Cadastro Nacional da Pessoa Jurídica) - Brazilian Company ID
 * Módulo para formatação e validação de CNPJ
 */

export const formatCNPJ = (cnpj: string): string | null => {
  const cleaned = cnpj.replace(/\D/g, '');

  if (cleaned.length !== 14) return null;

  return cleaned.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    '$1.$2.$3/$4-$5'
  );
};

export const validateCNPJ = (cnpj: string): boolean => {
  const cleaned = cnpj.replace(/\D/g, '');

  if (cleaned.length !== 14) return false;

  const digits = cleaned.split('').map(Number);

  // Verifica sequências com todos os dígitos idênticos
  const allDigitsAreSame = digits.every(digit => digit === digits[0]);
  if (allDigitsAreSame) return false;

  // Algoritmo de validação do CNPJ
  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += digits[i] * weights1[i];
  }
  let firstVerifier = sum % 11;
  if (firstVerifier < 2) firstVerifier = 0;
  else firstVerifier = 11 - firstVerifier;

  sum = 0;
  for (let i = 0; i < 13; i++) {
    sum += digits[i] * weights2[i];
  }
  let secondVerifier = sum % 11;
  if (secondVerifier < 2) secondVerifier = 0;
  else secondVerifier = 11 - secondVerifier;

  return digits[12] === firstVerifier && digits[13] === secondVerifier;
};
