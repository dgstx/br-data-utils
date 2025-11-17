import { formatCEP, validateCEP } from './cep';

describe('CEP Module', () => {
  describe('formatCEP', () => {
    it('deve formatar CEP válido corretamente', () => {
      expect(formatCEP('12345678')).toBe('12345-678');
      expect(formatCEP('01234567')).toBe('01234-567');
    });

    it('deve formatar CEP com caracteres não numéricos', () => {
      expect(formatCEP('12345-678')).toBe('12345-678');
      expect(formatCEP('12345 678')).toBe('12345-678');
    });

    it('deve retornar null para CEP inválido', () => {
      expect(formatCEP('1234567')).toBeNull(); // 7 dígitos
      expect(formatCEP('123456789')).toBeNull(); // 9 dígitos
      expect(formatCEP('')).toBeNull();
      expect(formatCEP('abc')).toBeNull();
    });
  });

  describe('validateCEP', () => {
    it('deve validar CEPs válidos', () => {
      expect(validateCEP('12345-678')).toBe(true);
      expect(validateCEP('01234-567')).toBe(true);
      expect(validateCEP('12345678')).toBe(true);
      expect(validateCEP('01234567')).toBe(true);
    });

    it('deve rejeitar CEPs inválidos', () => {
      expect(validateCEP('1234567')).toBe(false); // 7 dígitos
      expect(validateCEP('123456789')).toBe(false); // 9 dígitos
      expect(validateCEP('1234-567')).toBe(false); // Formato incompleto
      expect(validateCEP('123456-789')).toBe(false); // Formato incorreto
    });

    it('deve lidar com caracteres não numéricos', () => {
      expect(validateCEP('12345-678')).toBe(true);
      expect(validateCEP('12345 678')).toBe(true);
      expect(validateCEP('12.345-678')).toBe(true);
    });

    it('deve rejeitar valores vazios ou nulos', () => {
      expect(validateCEP('')).toBe(false);
      expect(validateCEP('abc')).toBe(false);
    });
  });
});
