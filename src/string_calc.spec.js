import {add} from "./string_calc";

describe('just testing', function() {
    it('should return 0 for empty string', function() {
        expect(add("")).toEqual(0);
    });

    it('should return 4 when passed in', function() {
        expect(add("4")).toEqual(4);
    });

    it('should sum 2 numbers', function() {
        expect(add("1,2")).toEqual(3);
    });

    it ('should sum arbitrary size of numbers', function() {
        expect(add("1,2,3,4,5,6,7,8,9")).toEqual(45);
    })
});
