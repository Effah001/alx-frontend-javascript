export default function updateUniqueItems(arg) {
  if (arg instanceof Map) {
    for (const [key, value] of arg) {
      if (value === 1) arg.set(key, 100);
    }
  } else {
    throw new Error('Cannot process');
  }
}
