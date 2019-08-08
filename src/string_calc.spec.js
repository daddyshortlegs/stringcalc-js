import { add } from "./string_calc";

describe('just testing', function() {
    it('should return 0 for empty string', function() {
        const result = add("");
        expect(result).toEqual(0);
    });
});
