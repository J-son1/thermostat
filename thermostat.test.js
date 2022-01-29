const Thermostat = require('./thermostat');

let thermostat;
beforeEach(() => {
  thermostat = new Thermostat();
});

describe('Thermostat', () => {
  it('starts with an initial temperature of 20 degrees', () => {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('increases temperature by 2', () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(22);
  });

  it('decreases temperature by 1', () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it('has a minimum possible temperature of 10', () => {
    for (let i = 0; i < 15; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toEqual(10);
  });

  it('has power saving mode on by default', () => {
    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  });

  it('can turn power saving mode off with a max temperature of 32', () => {
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 20; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(32);
  });

  it('returns power saving mode on', () => {
    expect(thermostat.getPowerSavingMode()).toBe(true);
  })

  it('returns power saving mode off', () => {
    thermostat.setPowerSavingMode(false);
    expect(thermostat.getPowerSavingMode()).toBe(false);
  })

  it('can reset the temperature back to the default of 20', () => {
    for (let i = 0; i < 5; i++) {
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('returns the current energy usage when the usage is low', () => {
    for (let i = 0; i < 5; i++) {
      thermostat.down();
    }
    expect(thermostat.currentEnergyUsage()).toMatch('Low');
  });

  it('returns the current energy usage when the usage is medium', () => {
    expect(thermostat.currentEnergyUsage()).toMatch('Medium');
  });

  it('returns the current energy usage when the usage is high', () => {
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.currentEnergyUsage()).toMatch('High');
  });
});
