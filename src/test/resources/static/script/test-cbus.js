describe("test cbus", function() {

	describe("test cbusProtocol", function() {
		
		const test_cases = [
			{ input: Number.MIN_VALUE, result: "unknown"},
			{ input: 0, result: "unknown"},
			{ input: 1, result: "CAN"},
			{ input: 2, result: "ETH"},
			{ input: 3, result: "unknown"},
			{ input: Number.MAX_VALUE, result: "unknown"},
		];
		
		test_cases.forEach((parameter) => {
		  it(parameter.input + " should return " + parameter.result, () => {
		    expect(cbusProtocol(parameter.input)).toBe(parameter.result);
		  });
		});
	});

	describe("test cbusManufacturer", function() {
		
		const test_cases = [
			{ input: Number.MIN_VALUE, result: "unknown"},
			{ input: 69, result: "unknown"},
			{ input: 70, result: "ROCRAIL"},
			{ input: 71, result: "unknown"},
			{ input: 79, result: "unknown"},
			{ input: 80, result: "SPECTRUM"},
			{ input: 81, result: "unknown"},
			{ input: 164, result: "unknown"},
			{ input: 165, result: "MERG"},
			{ input: 166, result: "unknown"},
			{ input: Number.MAX_VALUE, result: "unknown"},
		];
		
		test_cases.forEach((parameter) => {
		  it(parameter.input + " should return " + parameter.result, () => {
		    expect(cbusManufacturer(parameter.input)).toBe(parameter.result);
		  });
		});
	});

});
