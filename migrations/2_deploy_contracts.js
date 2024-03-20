const FlightSuretyApp = artifacts.require("FlightSuretyApp.sol");
const FlightSuretyData = artifacts.require("FlightSuretyData.sol");
const fs = require('fs');

module.exports = function (deployer) {

	let firstAirline = '0x13739C1FB34d8B501B3da414806b315E37103908';
	deployer.deploy(FlightSuretyData)
		.then(() => {
			return deployer.deploy(FlightSuretyApp, FlightSuretyData.address)
				.then(() => {
					let config = {
						localhost: {
							url: 'http://localhost:7545',
							dataAddress: FlightSuretyData.address,
							appAddress: FlightSuretyApp.address
						}
					}
					fs.writeFileSync(__dirname + '/../src/dapp/config.json', JSON.stringify(config, null, '\t'), 'utf-8');
					fs.writeFileSync(__dirname + '/../src/server/config.json', JSON.stringify(config, null, '\t'), 'utf-8');
				});
		});
}
