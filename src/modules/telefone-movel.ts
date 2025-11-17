/**
 * Telefone Móvel - Brazilian Mobile Phone Numbers
 * Módulo para formatação e validação de telefones móveis brasileiros
 */

export const formatTelefoneMovel = (telefone: string): string | null => {
  const cleaned = telefone.replace(/\D/g, '');

  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  return null;
};

export const validateTelefoneMovel = (telefone: string): boolean => {
  const cleaned = telefone.replace(/\D/g, '');

  if (cleaned.length !== 11) {
    return false;
  }

  // Lista de códigos DDD válidos no Brasil
  const validDDDs = [
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '21',
    '22',
    '24',
    '27',
    '28',
    '31',
    '32',
    '33',
    '34',
    '35',
    '37',
    '38',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '51',
    '53',
    '54',
    '55',
    '61',
    '62',
    '64',
    '63',
    '65',
    '66',
    '67',
    '68',
    '69',
    '71',
    '73',
    '74',
    '75',
    '77',
    '79',
    '81',
    '82',
    '83',
    '85',
    '87',
    '88',
    '91',
    '92',
    '93',
    '94',
    '95',
    '96',
    '97',
    '98',
    '99',
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

  // Verifica prefixos válidos para telefone móvel (deve começar com 9 após o DDD)
  // Prefixos inválidos: 90, 91 (reservados para serviços especiais)
  // Prefixos 92-99 são válidos para números móveis
  const prefix = phoneNumber.substring(0, 2);
  if (phoneNumber[0] !== '9' || ['90', '91'].includes(prefix)) {
    return false;
  }

  return true;
};
