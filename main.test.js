import { test, expect, describe } from 'vitest';
import { translateNumber } from "./main";

// Write a new test that checks whether `calculateScrabbleScore` correctly calculates the score for the word `A`.

//## Test 1/8
describe("Check the inputs are valid", () => {
    test("Check that the input 'eleventy-twenteen' is a number (integer)", () => {
        const input =  'eleventy-twenteen'
        const result = translateNumber(input);
        expect(result).toBe(`Invalid Input - '${input}' is not a valid number`);
        console.log(`ERROR: '${result}'`);
        return result;
    });

    test("Check that the number entered is positive", () => {
        const input = -69;
        const result = translateNumber(input);
        expect(result).toBe(`Invalid Input - Integer number (${input}) must be positive`);
        console.log(`ERROR: '${result}'`);
        return result;
    });
});

//## Test 2/8
describe("Validate singleUnit translation is correct.", () => {
    test("Validate the translation of '0' is correct.", () => {
        const result = translateNumber(0);
        expect(result).toBe("zero");
        console.log(`Input '0' translated to '${result}'`);
        return result;
    });

    test("Validate the translation of '0-9' is correct.", () => {
        const expectedSingleUnits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        for (let i = 0; i < expectedSingleUnits.length; i++) { 
            const result = translateNumber(i);
            expect(result).toBe(expectedSingleUnits[i]);
            console.log(`Input '${i}' translated to '${result}'`);
        }
    });
});

//## Test 3/8
describe("Validate midUnit translation is correct.", () => {
    test("Validate the translation of '11' is correct.", () => {
        const result = translateNumber(11);
        expect(result).toBe("eleven");
        console.log(`Input '11' translated to '${result}'`)
    });

    test("Validate the translation of '10-19' is correct.", () => {
        const expectedMidUnits = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
        for (let i = 0; i < expectedMidUnits.length; i++) {
            const result = translateNumber(i + 10);
            expect(result).toBe(expectedMidUnits[i]);
            console.log(`Input '${i + 10} translated to '${result}'`)
        }
    });
});

//## Test 4/8
describe("Validate scaleUnit translation is correct.", () => {
    test("Validate the translation of '100' is correct.", () => {
        const result = translateNumber(100);
        expect(result).toBe("one hundred");
        console.log(`Input '100' translated to '${result}'`)
    });
    
    test("Validate the translation of '420' is correct.", () => {
        const result = translateNumber(420);
        expect(result).toBe("four hundred and twenty");
        console.log(`Input '420' translated to '${result}'`)
    });
    
    test("Validate the translation of '1000' is correct.", () => {
        const result = translateNumber(1000);
        expect(result).toBe("one thousand");
        console.log(`Input '1000' translated to '${result}'`)
    });

    test("Validate the translation of '7219' is correct.", () => {
        const result = translateNumber(7219);
        expect(result).toBe("seven thousand, two hundred and nineteen");
        console.log(`Input '7219' translated to '${result}'`)
    });
});

//## Test 5/8
describe("Validate scaleUnit in thousands translation is correct.", () => {

    test("Validate the translation of '32458' is correct.", () => {
        const result = translateNumber(32458);
        expect(result).toBe("thirty-two thousand, four hundred and fifty-eight");
        console.log(`Input '32458' translated to '${result}'`)
    });

    test("Validate the translation of '657234' is correct.", () => {
        const result = translateNumber(657234);
        expect(result).toBe("six hundred and fifty-seven thousand, two hundred and thirty-four");
        console.log(`Input '657234' translated to '${result}'`)
    });
});

//## Test 6/8
describe("Validate scaleUnit in millions translation is correct.", () => {
    test("Validate the translation of '7352150' is correct.", () => {
        const result = translateNumber(7352150);
        expect(result).toBe("seven million, three hundred and fifty-two thousand, one hundred and fifty");
        console.log(`Input '7352150' translated to '${result}'`)
    });

    test("Validate the translation of '45685543' is correct.", () => {
        const result = translateNumber(45685543);
        expect(result).toBe("forty-five million, six hundred and eighty-five thousand, five hundred and forty-three");
        console.log(`Input '45685543' translated to '${result}'`)
    });

    test("Validate the translation of '354321537' is correct.", () => {
        const result = translateNumber(354321537);
        expect(result).toBe("three hundred and fifty-four million, three hundred and twenty-one thousand, five hundred and thirty-seven");
        console.log(`Input '354321537' translated to '${result}'`)
    });
});

//## Test 7/8
describe("Validate scaleUnit in billions translation is correct.", () => {
    test("Validate the translation of '2543543354' is correct.", () => {
        const result = translateNumber(2543543354);
        expect(result).toBe("two billion, five hundred and forty-three million, five hundred and forty-three thousand, three hundred and fifty-four");
        console.log(`Input '2543543354' translated to '${result}'`)
    });

    test("Validate the translation of '54568423815' is correct.", () => {
        const result = translateNumber(54568423815);
        expect(result).toBe("fifty-four billion, five hundred and sixty-eight million, four hundred and twenty-three thousand, eight hundred and fifteen");
        console.log(`Input '54568423815' translated to '${result}'`)
    });

    test("Validate the translation of '235816452489' is correct.", () => {
        const result = translateNumber(235816452489);
        expect(result).toBe("two hundred and thirty-five billion, eight hundred and sixteen million, four hundred and fifty-two thousand, four hundred and eighty-nine");
        console.log(`Input '235816452489' translated to '${result}'`)
    });
});

//## Test 8/8
describe("Validate scaleUnit in trillions translation is correct.", () => {
    test("Validate the translation of '3542186452782' is correct.", () => {
        const result = translateNumber(3542186452782);
        expect(result).toBe("three trillion, five hundred and forty-two billion, one hundred and eighty-six million, four hundred and fifty-two thousand, seven hundred and eighty-two");
        console.log(`Input '3542186452782' translated to '${result}'`)
    });

    test("Validate the translation of '82434832952341' is correct.", () => {
        const result = translateNumber(82434832952341);
        expect(result).toBe("eighty-two trillion, four hundred and thirty-four billion, eight hundred and thirty-two million, nine hundred and fifty-two thousand, three hundred and forty-one");
        console.log(`Input '82434832952341' translated to '${result}'`)
    });

    test("Validate the translation of '684512384569751' is correct.", () => {
        const result = translateNumber(684512384569751);
        expect(result).toBe("six hundred and eighty-four trillion, five hundred and twelve billion, three hundred and eighty-four million, five hundred and sixty-nine thousand, seven hundred and fifty-one");
        console.log(`Input '684512384569751' translated to '${result}'`)
    });
});