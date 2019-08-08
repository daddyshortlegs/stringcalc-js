import {splitValuesByDelimiter} from "./splitter";

function add(theString) {
    if (theString === "") {
        return 0;
    }

    return totalUpRelevantNumbers(theString);
}

function totalUpRelevantNumbers(theString) {
    const numbers = splitNumbersFromInput(theString);
    throwErrorIfNegatives(numbers);
    const filteredNumbers = filterNumbers(numbers);
    return sumValues(filteredNumbers);
}

function splitNumbersFromInput(theString) {
    const strings = splitValuesByDelimiter(theString);
    return toArrayOfInts(strings);
}

function throwErrorIfNegatives(numbers) {
    let negatives = numbers.filter(i => i < 0);
    if (negatives.length > 0) {
        throw "error: negatives not allowed:" + negatives.reduce((acc, item) => acc + " " + item, "");
    }
}

function filterNumbers(numbers) {
    return numbers.filter(i => i < 1001);
}

function sumValues(numbers) {
    return numbers.reduce((total, acc) => total + acc);
}

function toArrayOfInts(strings) {
    return strings.map(s => parseInt(s));
}

export {add}
