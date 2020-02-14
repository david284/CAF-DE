
describe("test cbus.js", function() {

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

	describe("test cbusOpc", function() {

		const test_cases = [
			{ input: 0, result: "ACK"},
			{ input: 1, result: "NAK"},
			{ input: 2, result: "HLT"},
			{ input: 3, result: "BON"},
			{ input: 4, result: "TOF"},
			{ input: 5, result: "TON"},
			{ input: 6, result: "ESTOP"},
			{ input: 7, result: "ARST"},
			{ input: 8, result: "RTOF"},
			{ input: 9, result: "RTON"},
			{ input: 10, result: "RESTP"},
			//
			{ input: 12, result: "RSTAT"},
			{ input: 13, result: "QNN"},
			//
			{ input: 16, result: "RQNP"},
			{ input: 17, result: "RQMN"},
			//
			{ input: 33, result: "KLOC"},
			{ input: 34, result: "QLOC"},
			{ input: 35, result: "DKEEP"},
			//
			{ input: 48, result: "DBG1"},
			//
			{ input: 63, result: "EXTC"},
			{ input: 64, result: "RLOC"},
			{ input: 65, result: "QCON"},
			{ input: 66, result: "SNN"},
			{ input: 67, result: "ALOC"},
			{ input: 68, result: "STMOD"},
			{ input: 69, result: "PCON"},
			{ input: 70, result: "KCON"},
			{ input: 71, result: "DSPD"},
			{ input: 72, result: "DFLG"},
			{ input: 73, result: "DFNON"},
			{ input: 74, result: "DFNOF"},
			//
			{ input: 76, result: "SSTAT"},
			//
			{ input: 79, result: "NNRSM"},
			{ input: 80, result: "RQNN"},
			{ input: 81, result: "NNREL"},
			{ input: 82, result: "NNACK"},
			{ input: 83, result: "NNLRN"},
			{ input: 84, result: "NNULN"},
			{ input: 85, result: "NNCLR"},
			{ input: 86, result: "NNEVN"},
			{ input: 87, result: "NERD"},
			{ input: 88, result: "RQEVN"},
			{ input: 89, result: "WRACK"},
			{ input: 90, result: "RQDAT"},
			{ input: 91, result: "RQDDS"},
			{ input: 92, result: "BOOT"},
			{ input: 93, result: "ENUM"},
			{ input: 94, result: "NNRST"},
			{ input: 95, result: "EXTC1"},
			{ input: 96, result: "DFUN"},
			{ input: 97, result: "GLOC"},
			{ input: 99, result: "ERR"},
			{ input: 100, result: "CMDERR"},
			//
			{ input: 112, result: "EVNLF"},
			{ input: 113, result: "NVRD"},
			{ input: 114, result: "NENRD"},
			{ input: 115, result: "RQNPN"},
			{ input: 116, result: "NUMEV"},
			{ input: 117, result: "CANID"},
			//
			{ input: 127, result: "EXTC2"},
			{ input: 128, result: "RDCC3"},
			{ input: 129, result: "unknown"},
			{ input: 130, result: "WCVO"},
			{ input: 131, result: "WCVB"},
			{ input: 132, result: "QCVS"},
			{ input: 133, result: "PCVS"},
			{ input: 134, result: "CABSIG"},
			//
			{ input: 144, result: "ACON"},
			{ input: 145, result: "ACOF"},
			{ input: 146, result: "AREQ"},
			{ input: 147, result: "ARON"},
			{ input: 148, result: "AROF"},
			{ input: 149, result: "EVULN"},
			{ input: 150, result: "NVSET"},
			{ input: 151, result: "NVANS"},
			{ input: 152, result: "ASON"},
			{ input: 153, result: "ASOF"},
			{ input: 154, result: "ASRQ"},
			{ input: 155, result: "PARAN"},
			{ input: 156, result: "REVAL"},
			{ input: 157, result: "ARSON"},
			{ input: 158, result: "ARSOF"},
			{ input: 159, result: "EXTC3"},

			{ input: 160, result: "RDCC4"},
			{ input: 162, result: "WCVS"},
			{ input: 176, result: "ACON1"},
			{ input: 177, result: "ACOF1"},
			{ input: 178, result: "REQEV"},
			{ input: 179, result: "ARON1"},
			{ input: 180, result: "AROF1"},
			{ input: 181, result: "NEVAL"},
			{ input: 182, result: "PNN"},
			{ input: 184, result: "ASON1"},
			{ input: 185, result: "ASOF1"},
			{ input: 189, result: "ARSON1"},
			{ input: 190, result: "ARSOF1"},
			{ input: 191, result: "EXTC4"},
			
			{ input: 192, result: "RDCC5"},
			{ input: 193, result: "WCVOA"},
			{ input: 207, result: "FCLK"},
			{ input: 208, result: "ACON2"},
			{ input: 209, result: "ACOF2"},
			{ input: 210, result: "EVLRN"},
			{ input: 211, result: "EVANS"},
			{ input: 212, result: "ARON2"},
			{ input: 213, result: "AROF2"},
			{ input: 216, result: "ASON2"},
			{ input: 217, result: "ASOF2"},
			{ input: 221, result: "ARSON2"},
			{ input: 222, result: "ARSOF2"},
			{ input: 223, result: "EXTC5"},
			
			{ input: 224, result: "RDCC6"},
			{ input: 225, result: "PLOC"},
			{ input: 226, result: "NAME"},
			{ input: 227, result: "STAT"},
			{ input: 239, result: "PARAMS"},
			
			{ input: 240, result: "ACON3"},
			{ input: 241, result: "ACOF3"},
			{ input: 242, result: "ENRSP"},
			{ input: 243, result: "ARON3"},
			{ input: 244, result: "AROF3"},
			{ input: 245, result: "EVLRNI"},
			{ input: 246, result: "ACDAT"},
			{ input: 247, result: "ARDAT"},
			{ input: 248, result: "ASON3"},
			{ input: 249, result: "ASOF3"},
			{ input: 250, result: "DDES"},
			{ input: 251, result: "DDRS"},
			{ input: 252, result: "DDWS"},
			{ input: 253, result: "ARSON3"},
			{ input: 254, result: "ARSOF3"},
			{ input: 255, result: "EXTC6"},
		];


		var i;
		for (i=-1; i <= 256; i++)
		{
			var result = findResult(i, test_cases);
    		test_my_times_ten(i, result);
		};
		
		function test_my_times_ten(input, output) {
		  	it(input + " should return " + output, () => {
		    	expect(cbusOpc(input)).toBe(output);
    		});
  		}
		
	});

	function findResult(value, array) {
		var j;
		for (j=0; j <array.length; j++) {
			if (array[j].input == value) return array[j].result;
		}
		return "unknown";
	}

});
