export default function createArrayBuffer(length, position, value) {
    const buffer = new ArrayBuffer(length);
    
    if (position >= 0 && position < length) {
        const dataView = new DataView(buffer);
        dataView.setInt8(position, value);
    } else {
        throw new Error('Position outside range');
    }
    
    return buffer;
}
