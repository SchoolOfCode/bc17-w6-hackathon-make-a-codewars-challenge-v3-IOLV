// !! I hope you're not cheating...

export function translateNumber(number) {
	const singleUnits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
	const midUnits = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	const tensUnits = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	const scaleUnits = ["zero", "hundred", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion"];
	
	switch (true) {
		case number < 0: 
			return `Invalid Input - Integer number (${number}) must be positive`;
	
		case number <= 9:
			return singleUnits[number];
	
		case number <= 19:
			return midUnits[number - 10];
	
		case number <= 99:
			const tens = Math.floor(number / 10);
			const unitsTens = number % 10;
			if (unitsTens > 0) {
				return `${tensUnits[tens]}-${singleUnits[unitsTens]}`;
			}
			return tensUnits[tens];
	
		case number <= 999: // ! Hundred
			const scaleHundo = Math.floor(number / 100);
			const unitsHundo = number % 100;
			if (unitsHundo > 0) {
				return `${singleUnits[scaleHundo]} ${scaleUnits[1]} and ${translateNumber([unitsHundo])}`
			} 
			return `${singleUnits[scaleHundo]} ${scaleUnits[1]}`
	
		case number <= 999999: // ! Thousand
			const scaleHundoThous = Math.floor(number / 1000);
			const unitsHundoThous = number % 1000;
			if (unitsHundoThous > 0) {
				return `${translateNumber([scaleHundoThous])} ${scaleUnits[2]}, ${translateNumber([unitsHundoThous])}`
			} 
			return `${singleUnits[scaleHundoThous]} ${scaleUnits[2]}`
	
		case number <= 999999999: // ! Million
			const scaleMill = Math.floor(number / 1000000);
			const unitsMill = number % 1000000;
			if (unitsMill > 0) {
				return `${translateNumber([scaleMill])} ${scaleUnits[3]}, ${translateNumber([unitsMill])}`
			} 
			return `${singleUnits[scaleMill]} ${scaleUnits[3]}`
	
		case number <= 999999999999: // ! Billion
			const scaleBill = Math.floor(number / 1000000000);
			const unitsBill = number % 1000000000;
			if (unitsBill > 0) {
				return `${translateNumber([scaleBill])} ${scaleUnits[4]}, ${translateNumber([unitsBill])}`
			} 
			return `${singleUnits[scaleBill]} ${scaleUnits[4]}`
	
		case number <= 999999999999999: // ! Trillion
			const scaleTrill = Math.floor(number / 1000000000000);
			const unitsTrill = number % 1000000000000;
			if (unitsTrill > 0) {
				return `${translateNumber([scaleTrill])} ${scaleUnits[5]}, ${translateNumber([unitsTrill])}`
			} 
			return `${singleUnits[scaleTrill]} ${scaleUnits[5]}`
		default:
			return `Invalid Input - '${number}' is not a valid number`;
	}
}
