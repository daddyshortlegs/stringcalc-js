import {add} from "./string_calc";

describe('String calculator', function() {
    it('should return 0 for empty string', () => {
        expect(add("")).toEqual(0);
    });

    it('should return 4 when passed in', () => {
        expect(add("4")).toEqual(4);
    });

    it('should sum 2 numbers', () => {
        expect(add("1,2")).toEqual(3);
    });

    it ('should sum arbitrary size of numbers', () => {
        expect(add("1,2,3,4,5,6,7,8,9")).toEqual(45);
    });

    it ('should cope with new line separator', () => {
        expect(add("1\n2,3")).toEqual(6);
    });

    it ('should cope with custom separators', () => {
        expect(add("//;\n1;2")).toEqual(3);
    });

    it ('should disallow negatives', function() {
        expect(() => {
            add("1,-2,-3");
        }).toThrowError("error: negatives not allowed: -2 -3");
    });
});
