export function generateRandomText(type = "ALPHABET" | "ALPHANUMERIC" | "NUMERIC", length) {
    let characters = '';
    if (type === "ALPHABET") {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    } else if (type === "ALPHANUMERIC") {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    } else if (type === "NUMERIC") {
        characters = '0123456789'
    } else {
        throw new Error('Invalid type. Use "ALPHABET", "ALPHANUMERIC", or "NUMERIC".');
    }
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}