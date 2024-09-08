function countLettersUpTo(limit) {
    const words = [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    const tens = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    let totalLetters = 0;

    for (let i = 1; i <= limit; i++) {
        let number = i;
        let currentLetters = 0;

        if (number >= 1000) {
            currentLetters += words[Math.floor(number / 1000)].length + 'thousand'.length;
            number %= 1000;
        }

        if (number >= 100) {
            currentLetters += words[Math.floor(number / 100)].length + 'hundred'.length;
            if (number % 100 !== 0) {
                currentLetters += 'and'.length;
            }
            number %= 100;
        }

        if (number >= 20) {
            currentLetters += tens[Math.floor(number / 10)].length;
            number %= 10;
        }

        currentLetters += words[number].length;
        totalLetters += currentLetters;
    }

    return totalLetters;
}

// Example usage:
console.log(countLettersUpTo(5))
