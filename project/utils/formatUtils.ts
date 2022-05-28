export const convertToPascalCase = (text: string) => {
    if (!text) {
        return '';
    }

    return text
        .split(/\s/)
        .filter((word) => !!word)
        .map((word) => `${word[0].toUpperCase()}${word.slice(1, word.length).toLowerCase()}`)
        .join('')
        .replace(/[^a-zA-Z0-9_]/g, '');
}