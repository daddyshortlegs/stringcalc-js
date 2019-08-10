export function splitNumbersFromInput(theString) {
    const strings = splitValuesByDelimiter(theString);
    return toArrayOfInts(strings);
}

export function splitValuesByDelimiter(theString) {
    let arbitraryLength = RegExp(/\/\/\[(.*)\]\n(.*)/)
    let regExpExecArray = arbitraryLength.exec(theString);
    let separator;

    if (regExpExecArray !== null) {
        separator = regExpExecArray[1];
        theString = regExpExecArray[2];

        return theString.split(separator);
    }




    let regExp = RegExp(/\/\/(.*)\n(.*)/);
    let matches = regExp.exec(theString);
    if (matches !== null) {
        separator = matches[1];
        theString = matches[2];
        return theString.split(separator);
    }



    return theString.split(/[,\n]/);
}


function toArrayOfInts(strings) {
    return strings.map(s => parseInt(s));
}