function add(theString) {
    if (theString === "") {
        return 0;
    }

    const strings = splitValuesByDelimiter(theString);
    let negatives = strings.map(s => parseInt(s)).
        filter(i => i < 0);
    if (negatives.length > 0) {
        throw "error: negatives not allowed: -2 -3";
    }

    return sumValues(strings);
}

function splitValuesByDelimiter(theString) {
    let regExp = RegExp(/\/\/(.*)\n(.*)/);
    let matches = regExp.exec(theString);
    let separator;
    if (matches !== null) {
        separator = matches[1];
        theString = matches[2];
    } else {
        separator = /,|\n/
    }

    return theString.split(separator);
}

function sumValues(strings) {
    return strings.map(s => parseInt(s))
        .reduce((total, acc) => total + acc);
}

export {add}