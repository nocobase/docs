import * as functions from '@formulajs/formulajs';
import { round } from 'mathjs';

export function evaluate(expression: string, scope = {}) {
  const fnNames = Object.keys(functions).filter((key) => key !== 'default');
  const fns = fnNames.map((key) => functions[key as keyof typeof functions]);

  try {
    const fn = new Function(...fnNames, ...Object.keys(scope), `return ${expression}`);
    const result = fn(...fns, ...Object.values(scope));
    
    if (typeof result === 'number') {
      if (Number.isNaN(result) || !Number.isFinite(result)) {
        return null;
      }
      return round(result, 9);
    }
    return result;
  } catch (error: any) {
    return `Error: ${error.message}`;
  }
}

export default evaluate; 