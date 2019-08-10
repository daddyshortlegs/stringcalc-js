import {splitNumbersFromInput} from "./splitter";

function splitBy(input, delim) {
    let strings = input.split(delim);


    return input.replace(/[***]/g, ",");
}

describe('String splitter', function() {
    it('should split by arbitrary length', () => {
        let numbers = splitNumbersFromInput("//[***]\n1***2***3");
        expect(numbers).toEqual([1, 2, 3]);
    });
});