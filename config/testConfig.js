
var FlightSuretyApp = artifacts.require("FlightSuretyApp");
var FlightSuretyData = artifacts.require("FlightSuretyData");
var BigNumber = require('bignumber.js');

var Config = async function (accounts) {

	// These test addresses are useful when you need to add
	// multiple users in test scripts
  let testAddresses = [
        "0x13739C1FB34d8B501B3da414806b315E37103908",
        "0x82e69e41Fb83fd8135814cdC037C882Df9f7Acf4",
        "0x416b343C9af802A617EB0CD224b30Afef615668a",
        "0x9baFdC90EA3CA71e2C352538af78737D8903B829",
        "0x900F8CB90420b06836026914D248a7121eF073F3",
        "0x9E7260E605d582229C889F84CfE32affb43B7dcc",
        "0xDF862BAb572FDfE316ADFAd1B1af4fd6dc441d19",
        "0x96E0791412618977Ec86e817cCa358A408534421",
        "0xfE5C6a67ee92b81AB3B34BE7E189DfC905d91b1e"
    ];

	let owner = accounts[0];
	let firstAirline = accounts[1];

	let flightSuretyData = await FlightSuretyData.new();
	let flightSuretyApp = await FlightSuretyApp.new(flightSuretyData.address);


	return {
		owner: owner,
		firstAirline: firstAirline,
		weiMultiple: (new BigNumber(10)).pow(18),
		testAddresses: testAddresses,
		flightSuretyData: flightSuretyData,
		flightSuretyApp: flightSuretyApp
	}
}

module.exports = {
	Config: Config
};
