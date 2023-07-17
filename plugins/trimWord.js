
export default defineNuxtPlugin((text, isTitle) => {
    try {
      const words = text.split(' ');
      const maxWords = isTitle ? 3 : 3;
      const punctuationMarks = ['.', ',', '!', '?', ':', ';'];
      if (words.length <= maxWords) {
        return text;
      } else {
        let truncatedText = words.slice(0, maxWords).join(' ');
        const lastCharacter = truncatedText[truncatedText.length - 1];
        if (punctuationMarks.includes(lastCharacter)) {
          truncatedText = truncatedText.slice(0, -1);
        }
        return truncatedText + '...';
      }
    } catch {
      return text
    }
  })
  