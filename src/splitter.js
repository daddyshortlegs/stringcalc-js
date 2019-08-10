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
    let arbitraryLength = RegExp(/\/\/\[(.*)\]\n(.*)/)
    let regExpExecArray = arbitraryLength.exec(theString);
    let splitItems = [];
    if (regExpExecArray !== null) {
        theString = regExpExecArray[2];
        splitItems = theString.split(regExpExecArray[1]);
    }
    return splitItems;
}

function splitByCustomDelimter(theString) {
    let regExp = RegExp(/\/\/(.*)\n(.*)/);
    let matches = regExp.exec(theString);
    let splitItems = [];
    if (matches !== null) {
        theString = matches[2];
        splitItems = theString.split(matches[1]);
    }
    return splitItems;
}


function toArrayOfInts(strings) {
    return strings.map(s => parseInt(s));
}