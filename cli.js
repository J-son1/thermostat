const Thermostat = require("./thermostat");
const readline = require("readline");

const thermostat = new Thermostat();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const psmMaxTemp = 25;
const maxTemp = 32;
const minTemp = 10;
const maxMessage = " (maximum reached)";
const minMessage = " (minimum reached)";
let psm = thermostat.getPowerSavingMode();
let temperature = thermostat.getTemperature();

let recursiveAsyncReadLine = () => {
  rl.question("Enter command > ", (command) => {
    command = command.toLowerCase();

    switch (command) {
      case "up":
        if (psm == true && temperature == psmMaxTemp) {
          break;
        } else {
          thermostat.up();
          break;
        }
      case "down":
        thermostat.down();
        break;
      case "psm on":
        thermostat.setPowerSavingMode(true);
        break;
      case "psm off":
        thermostat.setPowerSavingMode(false);
        break;
      case "exit":
        rl.close();
        return;
      default:
        console.log("Command not valid");
    }

    psm = thermostat.getPowerSavingMode();
    temperature = thermostat.getTemperature();
    let message = `Temperature is ${temperature}`;

    if ((psm == true && temperature == psmMaxTemp) || (temperature == maxTemp)) {
      message = message + maxMessage;
    } else if (temperature == minTemp) {
      message = message + minMessage;
    }

    console.log(message);

    recursiveAsyncReadLine();
  });
};

recursiveAsyncReadLine();
