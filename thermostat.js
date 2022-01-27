class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.powerSavingMode === true && this.temperature === 25) { return }
    if (this.temperature === 32) { return }
    this.temperature++;
  }

  down() {
    if (this.temperature === 10) { return }
    this.temperature--;
  }

  setPowerSavingMode(state) {
    this.powerSavingMode = state;
  }

  reset() {
    this.temperature = 20;
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
