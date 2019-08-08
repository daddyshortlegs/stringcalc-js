import {splitValuesByDelimiter} from "./splitter";

function add(theString) {
    if (theString === "") {
        return 0;
    }

    const strings = splitValuesByDelimiter(theString);
    throwErrorIfNegatives(strings);
    const filteredNumbers = filterNumbers(strings);
    return sumValues(filteredNumbers);
}

function throwErrorIfNegatives(strings) {
    let negatives = strings.map(s => parseInt(s)).filter(i => i < 0);
    if (negatives.length > 0) {
        throw "error: negatives not allowed:" + negatives.reduce((acc, item) => acc + " " + item, "");
    }
}

function filterNumbers(strings) {
    return strings.map(s => parseInt(s))
        .filter(i => i < 1001);
}

function sumValues(strings) {
    return strings.map(s => parseInt(s))
        .reduce((total, acc) => total + acc);
}

export {add}