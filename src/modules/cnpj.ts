/**
 * CNPJ (Cadastro Nacional da Pessoa Jurídica) - Brazilian Company ID
 * Módulo para formatação e validação de CNPJ
 */

export const formatCNPJ = (cnpj: string): string | null => {
  const cleaned = cnpj.toUpperCase().replace(/[^A-Z0-9]/g, '');

  if (cleaned.length !== 14) return null;

  return cleaned.replace(
    /([A-Z0-9]{2})([A-Z0-9]{3})([A-Z0-9]{3})([A-Z0-9]{4})(\d{2})/,
    '$1.$2.$3/$4-$5'
  );
};

export const validateCNPJ = (cnpj: string): boolean => {
  const cleaned = cnpj.toUpperCase().replace(/[^A-Z0-9]/g, '');

  if (cleaned.length !== 14) return false;
  if (!/^[A-Z0-9]{12}\d{2}$/.test(cleaned)) return false;

  const values = cleaned.split('').map(character => {
    if (/[A-Z]/.test(character)) {
      return character.charCodeAt(0) - 48;
    }

    return Number(character);
  });

  // Verifica sequências com todos os dígitos idênticos
  const allCharactersAreSame = cleaned
    .split('')
    .every(character => character === cleaned[0]);
  if (allCharactersAreSame) return false;

  // Algoritmo de validação do CNPJ
  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += values[i] * weights1[i];
  }
  let firstVerifier = sum % 11;
  if (firstVerifier < 2) firstVerifier = 0;
  else firstVerifier = 11 - firstVerifier;

  sum = 0;
  for (let i = 0; i < 13; i++) {
    sum += values[i] * weights2[i];
  }
  let secondVerifier = sum % 11;
  if (secondVerifier < 2) secondVerifier = 0;
  else secondVerifier = 11 - secondVerifier;

  return values[12] === firstVerifier && values[13] === secondVerifier;
};
