module.exports = function toReadable(number) {
    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) {
        return units[number];
    }
    const numberArr = number.toString().split('');

    if (20 <= number && number < 100) {
        let humanReadableNumber = tens[numberArr[0]];
        if (parseInt(numberArr[1]) !== 0) {
            humanReadableNumber += (' ' + units[numberArr[1]]);
        }
        return humanReadableNumber;
    }
    if (100 <= number && number < 1000) {
        let humanReadableNumber = (units[numberArr[0]] + ' hundred');
        if (parseInt(numberArr[1]) !== 0) {
            if (parseInt(numberArr[1]) === 1) {
                let index = numberArr[1] + numberArr[2];
                humanReadableNumber += (' ' + units[index]);
                return humanReadableNumber;
            } else {
                humanReadableNumber += (' ' + tens[numberArr[1]]);
            }
        }
        if (parseInt(numberArr[2]) !== 0) {
            humanReadableNumber += (' ' + units[numberArr[2]]);
        }
        return humanReadableNumber;
    }

};
