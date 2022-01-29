class Thermostat {
  #defaultTemp = 20;
  #psmMaxTemp = 25;
  #maxTemp = 32;
  #minTemp = 10;

  constructor() {
    this.temperature = this.#defaultTemp;
    this.powerSavingMode = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.powerSavingMode === true && this.temperature === this.#psmMaxTemp) { return; }
    if (this.temperature === this.#maxTemp) { return; }
    this.temperature++;
  }

  down() {
    if (this.temperature === this.#minTemp) { return; }
    this.temperature--;
  }

  getPowerSavingMode() {
    return this.powerSavingMode ? true : false;
  }

  setPowerSavingMode(state) {
    this.powerSavingMode = state;
    if (state === true && this.temperature > this.#psmMaxTemp) {
      this.temperature = this.#psmMaxTemp;
    }
  }

  reset() {
    this.temperature = this.#defaultTemp;
  }

  currentEnergyUsage() {
    let temperature = this.temperature;
    if (temperature < 18) {
      return 'Low';
    } else if (temperature <= 25) {
      return 'Medium';
    } else {
      return 'High';
    }
  }
}

module.exports = Thermostat;
