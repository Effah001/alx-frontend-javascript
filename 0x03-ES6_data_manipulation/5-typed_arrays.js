export default function createArrayBuffer(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new Uint8Array(buffer);
  if (position >= buffer.byteLength) {
    throw new Error('Position outside range');
  }
  view[position] = value;
  return new DataView(buffer);
}
