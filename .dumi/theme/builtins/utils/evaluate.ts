import * as math from 'mathjs';

export function evaluate(expression: string, scope = {}) {
  const result = math.evaluate(expression, scope);
  if (typeof result === 'number') {
    if (Number.isNaN(result) || !Number.isFinite(result)) {
      return null;
    }
    return math.round(result, 9);
  }
  if (result instanceof math.Matrix) {
    return result.toArray();
  }
  return result;
}

export default evaluate; 