
export default defineNuxtPlugin((text, isTitle) => {
    try {
        const words = text.split(' ');
        const maxWords = isTitle ? 3 : 4;
      
        if (words.length <= maxWords) {
          return text;
        } else {
          return words.slice(0, maxWords).join(' ') + '...';
        }
    } catch {
      return text
    }
  })
  