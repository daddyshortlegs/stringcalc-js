export function splitNumbersFromInput(theString) {
    const strings = splitValuesByDelimiter(theString);
    return toArrayOfInts(strings);
}

export function splitValuesByDelimiter(theString) {
    let regExp = RegExp(/\/\/(.*)\n(.*)/);
    let matches = regExp.exec(theString);
    let separator;
    if (matches !== null) {
        separator = matches[1];
        theString = matches[2];
    } else {
        separator = /[,\n]/
    }

    return theString.split(separator);
}

function toArrayOfInts(strings) {
    return strings.map(s => parseInt(s));
}