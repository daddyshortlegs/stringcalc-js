function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let strings = numbers.split(",");
    return strings.map(s => parseInt(s))
        .reduce((total, acc) => total + acc);
}

export {add}