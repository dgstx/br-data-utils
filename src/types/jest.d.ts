// Tipos para Jest
import 'jest';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveClass(_className: string): R;
      toBeVisible(): R;
    }
  }
}

export {};