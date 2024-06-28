export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    return 'Cannot divide by 0';
  }
  return numerator / denominator;
}
