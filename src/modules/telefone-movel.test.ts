import { formatTelefoneMovel, validateTelefoneMovel } from './telefone-movel';

describe('Telefone Móvel Module', () => {
  describe('formatTelefoneMovel', () => {
    it('deve formatar telefone móvel válido corretamente', () => {
      expect(formatTelefoneMovel('11987654321')).toBe('(11) 98765-4321');
      expect(formatTelefoneMovel('21987654321')).toBe('(21) 98765-4321');
    });

    it('deve formatar telefone móvel com caracteres não numéricos', () => {
      expect(formatTelefoneMovel('(11) 98765-4321')).toBe('(11) 98765-4321');
      expect(formatTelefoneMovel('11 98765 4321')).toBe('(11) 98765-4321');
      expect(formatTelefoneMovel('11.98765.4321')).toBe('(11) 98765-4321');
    });

    it('deve retornar null para telefone móvel inválido', () => {
      expect(formatTelefoneMovel('1123456789')).toBeNull(); // 10 dígitos (fixo)
      expect(formatTelefoneMovel('987654321')).toBeNull(); // 9 dígitos
      expect(formatTelefoneMovel('')).toBeNull();
      expect(formatTelefoneMovel('abc')).toBeNull();
    });
  });

  describe('validateTelefoneMovel', () => {
    it('deve validar telefones móveis válidos', () => {
      expect(validateTelefoneMovel('(11) 98765-4321')).toBe(true);
      expect(validateTelefoneMovel('11987654321')).toBe(true);
    });

    it('deve rejeitar telefones móveis inválidos', () => {
      expect(validateTelefoneMovel('(11) 2345-6789')).toBe(false); // Formato fixo
      expect(validateTelefoneMovel('1123456789')).toBe(false); // 10 dígitos
      expect(validateTelefoneMovel('987654321')).toBe(false); // 9 dígitos
      expect(validateTelefoneMovel('(11) 98765-432')).toBe(false); // Incompleto
      expect(validateTelefoneMovel('(11) 99999-9999')).toBe(false); // Dígitos iguais
      expect(validateTelefoneMovel('(00) 98765-4321')).toBe(false); // DDD inválido
      expect(validateTelefoneMovel('(11) 88765-4321')).toBe(false); // Não começa com 9
      expect(validateTelefoneMovel('(11) 90765-4321')).toBe(false); // Prefixo 90 inválido
      expect(validateTelefoneMovel('(11) 91765-4321')).toBe(false); // Prefixo 91 inválido
    });

    it('deve aceitar telefones móveis com prefixos 92-99', () => {
      expect(validateTelefoneMovel('(11) 92765-4321')).toBe(true); // Prefixo 92 válido
      expect(validateTelefoneMovel('(11) 93765-4321')).toBe(true); // Prefixo 93 válido
      expect(validateTelefoneMovel('(11) 94765-4321')).toBe(true); // Prefixo 94 válido
      expect(validateTelefoneMovel('(11) 95765-4321')).toBe(true); // Prefixo 95 válido
      expect(validateTelefoneMovel('(11) 96765-4321')).toBe(true); // Prefixo 96 válido
      expect(validateTelefoneMovel('(11) 97765-4321')).toBe(true); // Prefixo 97 válido
      expect(validateTelefoneMovel('(11) 98765-4321')).toBe(true); // Prefixo 98 válido
      expect(validateTelefoneMovel('(11) 99765-4321')).toBe(true); // Prefixo 99 válido
    });

    it('deve aceitar telefone com DDD 92 e prefixo válido', () => {
      expect(validateTelefoneMovel('(92) 98765-4321')).toBe(true); // DDD 92 (Amazonas) com prefixo 98
      expect(formatTelefoneMovel('92987654321')).toBe('(92) 98765-4321');
    });

    it('deve lidar com caracteres não numéricos', () => {
      expect(validateTelefoneMovel('(11) 98765-4321')).toBe(true);
      expect(validateTelefoneMovel('11 98765 4321')).toBe(true);
      expect(validateTelefoneMovel('11.98765.4321')).toBe(true);
    });

    it('deve rejeitar valores vazios ou nulos', () => {
      expect(validateTelefoneMovel('')).toBe(false);
      expect(validateTelefoneMovel('abc')).toBe(false);
    });
  });
});
