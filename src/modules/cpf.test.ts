import { formatCPF, validateCPF } from './cpf';

describe('CPF Module', () => {
  describe('formatCPF', () => {
    it('deve formatar CPF válido corretamente', () => {
      expect(formatCPF('12345678901')).toBe('123.456.789-01');
      expect(formatCPF('98765432100')).toBe('987.654.321-00');
    });

    it('deve formatar CPF com caracteres não numéricos', () => {
      expect(formatCPF('123.456.789-01')).toBe('123.456.789-01');
      expect(formatCPF('123-456-789-01')).toBe('123.456.789-01');
      expect(formatCPF('123 456 789 01')).toBe('123.456.789-01');
    });

    it('deve retornar null para CPF inválido', () => {
      expect(formatCPF('1234567890')).toBeNull(); // 10 dígitos
      expect(formatCPF('123456789012')).toBeNull(); // 12 dígitos
      expect(formatCPF('')).toBeNull();
      expect(formatCPF('abc')).toBeNull();
    });
  });

  describe('validateCPF', () => {
    it('deve validar CPFs válidos', () => {
      expect(validateCPF('529.982.247-25')).toBe(true);
      expect(validateCPF('123.456.789-09')).toBe(true);
      expect(validateCPF('12345678909')).toBe(true);
    });

    it('deve rejeitar CPFs inválidos', () => {
      expect(validateCPF('123.456.789-01')).toBe(false);
      expect(validateCPF('111.111.111-11')).toBe(false); // Todos dígitos iguais
      expect(validateCPF('000.000.000-00')).toBe(false); // Todos dígitos iguais
      expect(validateCPF('123.456.789')).toBe(false); // Formato incompleto
      expect(validateCPF('1234567890')).toBe(false); // 10 dígitos
      expect(validateCPF('123456789012')).toBe(false); // 12 dígitos
    });

    it('deve lidar com caracteres não numéricos', () => {
      expect(validateCPF('123.456.789-09')).toBe(true);
      expect(validateCPF('123-456-789-09')).toBe(true);
      expect(validateCPF('123 456 789 09')).toBe(true);
    });

    it('deve rejeitar valores vazios ou nulos', () => {
      expect(validateCPF('')).toBe(false);
      expect(validateCPF('abc')).toBe(false);
    });
  });
});
