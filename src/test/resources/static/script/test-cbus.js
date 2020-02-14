describe("test cbus", function() {

	describe("test cbusProtocol", function() {
		
		const test_cases = [
			{ description: "MIN_VALUE should return unknown", input: Number.MIN_VALUE, result: "unknown"},
			{ description: "0 should return unknown", input: 0, result: "unknown"},
			{ description: "1 should return CAN", input: 1, result: "CAN"},
			{ description: "2 should return ETH", input: 2, result: "ETH"},
			{ description: "3 should return unknown", input: 3, result: "unknown"},
			{ description: "MAX_VALUE should return unknown", input: Number.MAX_VALUE, result: "unknown"},
		];
		
		test_cases.forEach((parameter) => {
		  it(parameter.description, () => {
		    expect(cbusProtocol(parameter.input)).toBe(parameter.result);
		  });
		});
	});

	describe("test cbusManufacturer", function() {
		
		const test_cases = [
			{ description: "MIN_VALUE should return unknown", input: Number.MIN_VALUE, result: "unknown"},
			{ description: "69 should return unknown", input: 69, result: "unknown"},
			{ description: "70 should return ROCRAIL", input: 70, result: "ROCRAIL"},
			{ description: "71 should return unknown", input: 71, result: "unknown"},
			{ description: "79 should return unknown", input: 79, result: "unknown"},
			{ description: "80 should return SPECTRUM", input: 80, result: "SPECTRUM"},
			{ description: "81 should return unknown", input: 81, result: "unknown"},
			{ description: "164 should return unknown", input: 164, result: "unknown"},
			{ description: "165 should return MERG", input: 165, result: "MERG"},
			{ description: "166 should return unknown", input: 166, result: "unknown"},
			{ description: "MAX_VALUE should return unknown", input: Number.MAX_VALUE, result: "unknown"},
		];
		
		test_cases.forEach((parameter) => {
		  it(parameter.description, () => {
		    expect(cbusManufacturer(parameter.input)).toBe(parameter.result);
		  });
		});
	});


	// single test case, using arrow function
	  it("Single test example", () => {
	    expect(1).toBe(1);
	  });


});
