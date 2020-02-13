describe("test cbus", function() {

	describe("test cbusProtocol", function() {
		
		const test_cases = [
			{ decription: "should return unknown", input: Number.MIN_VALUE, result: "unknown"},
			{ decription: "should return unknown", input: 0, result: "unknown"},
			{ decription: "should return CAN", input: 1, result: "CAN"},
			{ decription: "should return ETH", input: 2, result: "ETH"},
			{ decription: "should return unknown", input: 3, result: "unknown"},
			{ decription: "should return unknown", input: Number.MAX_VALUE, result: "unknown"},
		];
		
		test_cases.forEach((parameter) => {
		  it(parameter.description, () => {
		    expect(cbusProtocol(parameter.input)).toBe(parameter.result);
		  });
		});
	});

	describe("test cbusManufacturer", function() {
		
		const test_cases = [
			{ decription: "should return unknown", input: Number.MIN_VALUE, result: "unknown"},
			{ decription: "should return unknown", input: 69, result: "unknown"},
			{ decription: "should return CAN", input: 70, result: "ROCRAIL"},
			{ decription: "should return unknown", input: 71, result: "unknown"},
			{ decription: "should return unknown", input: 79, result: "unknown"},
			{ decription: "should return ETH", input: 80, result: "SPECTRUM"},
			{ decription: "should return unknown", input: 81, result: "unknown"},
			{ decription: "should return unknown", input: 164, result: "unknown"},
			{ decription: "should return unknown", input: 165, result: "MERG"},
			{ decription: "should return unknown", input: 166, result: "unknown"},
			{ decription: "should return unknown", input: Number.MAX_VALUE, result: "unknown"},
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
