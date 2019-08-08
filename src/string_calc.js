function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let regExp = RegExp(/\/\/(.*)\n(.*)/);
    let matches = regExp.exec(numbers);
    let separator;
    if (matches !== null) {
        separator = matches[1];
        numbers = matches[2];
    } else {
        separator = /,|\n/
    }

    let strings = numbers.split(separator);
    return strings.map(s => parseInt(s))
        .reduce((total, acc) => total + acc);
}

export {add}