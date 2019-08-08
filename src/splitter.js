export function splitValuesByDelimiter(theString) {
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