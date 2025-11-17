import { formatCNPJ, validateCNPJ } from './cnpj';

describe('CNPJ Module', () => {
  describe('formatCNPJ', () => {
    it('deve formatar CNPJ válido corretamente', () => {
      expect(formatCNPJ('11222333000181')).toBe('11.222.333/0001-81');
      expect(formatCNPJ('12345678901234')).toBe('12.345.678/9012-34');
    });

    it('deve formatar CNPJ com caracteres não numéricos', () => {
      expect(formatCNPJ('11.222.333/0001-81')).toBe('11.222.333/0001-81');
      expect(formatCNPJ('11-222-333-0001-81')).toBe('11.222.333/0001-81');
      expect(formatCNPJ('11 222 333 0001 81')).toBe('11.222.333/0001-81');
    });

    it('deve retornar null para CNPJ inválido', () => {
      expect(formatCNPJ('1122233300018')).toBeNull(); // 13 dígitos
      expect(formatCNPJ('112223330001811')).toBeNull(); // 15 dígitos
      expect(formatCNPJ('')).toBeNull();
      expect(formatCNPJ('abc')).toBeNull();
    });
  });

  describe('validateCNPJ', () => {
    it('deve validar CNPJs válidos', () => {
      expect(validateCNPJ('04.252.011/0001-10')).toBe(true);
      expect(validateCNPJ('11.222.333/0001-81')).toBe(true);
      expect(validateCNPJ('11222333000181')).toBe(true);
    });

    it('deve rejeitar CNPJs inválidos', () => {
      expect(validateCNPJ('11.222.333/0001-82')).toBe(false);
      expect(validateCNPJ('11.111.111/1111-11')).toBe(false); // Todos dígitos iguais
      expect(validateCNPJ('00.000.000/0000-00')).toBe(false); // Todos dígitos iguais
      expect(validateCNPJ('11.222.333/0001')).toBe(false); // Formato incompleto
      expect(validateCNPJ('1122233300018')).toBe(false); // 13 dígitos
      expect(validateCNPJ('112223330001811')).toBe(false); // 15 dígitos
    });

    it('deve lidar com caracteres não numéricos', () => {
      expect(validateCNPJ('11.222.333/0001-81')).toBe(true);
      expect(validateCNPJ('11-222-333-0001-81')).toBe(true);
      expect(validateCNPJ('11 222 333 0001 81')).toBe(true);
    });

    it('deve rejeitar valores vazios ou nulos', () => {
      expect(validateCNPJ('')).toBe(false);
      expect(validateCNPJ('abc')).toBe(false);
    });
  });
});
