// Message Mixer App

// Random number generator
const generateRandomNumber = (arrayLength) => {
    return Math.floor(Math.random() * arrayLength);
}

// Creating object for storing all the different message parts
const mixedMessage = {
    start: ["You","Y'all","Yiz"],
    middle: ["look","seem","smell","talk"],
    end: ["tough", "well", "bad"],
    generateSentence(){
        const s = this.start[generateRandomNumber(this.start.length)];
        const m = this.middle[generateRandomNumber(this.middle.length)];
        const e = this.end[generateRandomNumber(this.end.length)];

        return `${s} ${m} ${e}`;
    }
}

const test = mixedMessage;
console.log(test.generateSentence());
