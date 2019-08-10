export function splitNumbersFromInput(theString) {
    const strings = splitValuesByDelimiter(theString);
    return toArrayOfInts(strings);
}

export function splitValuesByDelimiter(theString) {
    let splitItems = splitByArbitraryLengthDelimiter(theString);
    if (splitItems.length > 0) {
        return splitItems;
    }

    splitItems = splitByCustomDelimter(theString);
    if (splitItems.length > 0) {
        return splitItems;
    }

    return theString.split(/[,\n]/);
}

function splitByArbitraryLengthDelimiter(theString) {
    return splitByDelimiter(/\/\/\[(.*)\]\n(.*)/, theString);
}

function splitByCustomDelimter(theString) {
    return splitByDelimiter(/\/\/(.*)\n(.*)/, theString);
}

function splitByDelimiter(regExp1, theString) {
    let regExp = RegExp(regExp1)
    let groups = regExp.exec(theString);
    let splitItems = [];
    if (groups !== null) {
        theString = groups[2];
        splitItems = theString.split(groups[1]);
    }
    return splitItems;
}


function toArrayOfInts(strings) {
    return strings.map(s => parseInt(s));
}