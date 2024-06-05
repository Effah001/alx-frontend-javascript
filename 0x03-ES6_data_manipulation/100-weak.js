export const weakMap = new WeakMap();
export function queryAPI(endPoint) {
  const num = weakMap.get(endPoint) || 0;
  weakMap.set(endPoint, num + 1);
  if (weakMap.get(endPoint) >= 5) throw new Error('Endpoint load is high');
  return num;
}
