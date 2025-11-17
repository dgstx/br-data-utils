import { formatTelefoneFixo, validateTelefoneFixo } from './telefone-fixo';

describe('Telefone Fixo Module', () => {
  describe('formatTelefoneFixo', () => {
    it('deve formatar telefone fixo válido corretamente', () => {
      expect(formatTelefoneFixo('1123456789')).toBe('(11) 2345-6789');
      expect(formatTelefoneFixo('2122334455')).toBe('(21) 2233-4455');
    });

    it('deve formatar telefone fixo com caracteres não numéricos', () => {
      expect(formatTelefoneFixo('(11) 2345-6789')).toBe('(11) 2345-6789');
      expect(formatTelefoneFixo('11 2345 6789')).toBe('(11) 2345-6789');
      expect(formatTelefoneFixo('11.2345.6789')).toBe('(11) 2345-6789');
    });

    it('deve retornar null para telefone fixo inválido', () => {
      expect(formatTelefoneFixo('11987654321')).toBeNull(); // 11 dígitos (móvel)
      expect(formatTelefoneFixo('123456789')).toBeNull(); // 9 dígitos
      expect(formatTelefoneFixo('')).toBeNull();
      expect(formatTelefoneFixo('abc')).toBeNull();
    });
  });

  describe('validateTelefoneFixo', () => {
    it('deve validar telefones fixos válidos', () => {
      expect(validateTelefoneFixo('(11) 2345-6789')).toBe(true);
      expect(validateTelefoneFixo('1123456789')).toBe(true);
    });

    it('deve rejeitar telefones fixos inválidos', () => {
      expect(validateTelefoneFixo('(11) 98765-4321')).toBe(false); // Formato móvel
      expect(validateTelefoneFixo('11987654321')).toBe(false); // 11 dígitos
      expect(validateTelefoneFixo('123456789')).toBe(false); // 9 dígitos
      expect(validateTelefoneFixo('(11) 2345-678')).toBe(false); // Incompleto
      expect(validateTelefoneFixo('(11) 1111-1111')).toBe(false); // Dígitos iguais
      expect(validateTelefoneFixo('(00) 1234-5678')).toBe(false); // DDD inválido
    });

    it('deve lidar com caracteres não numéricos', () => {
      expect(validateTelefoneFixo('(11) 2345-6789')).toBe(true);
      expect(validateTelefoneFixo('11 2345 6789')).toBe(true);
      expect(validateTelefoneFixo('11.2345.6789')).toBe(true);
    });

    it('deve rejeitar valores vazios ou nulos', () => {
      expect(validateTelefoneFixo('')).toBe(false);
      expect(validateTelefoneFixo('abc')).toBe(false);
    });
  });
});
