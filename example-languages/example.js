// This test file has been based on:
// https://github.com/sharkdp/bat/blob/master/tests/syntax-tests/source/JavaScript/test.js

/**
 * #########
 * Multiline
 * comment
 * #########
 */

let test;
for (let i = 0; i < 10; i++) {
  if (test) continue;
  else test += 1; // random things
}

while (test < 100 && typeof test === 'number') {
  test = test > 30 ? test + 5 : test + 1;
}

function weatherSays(when = Date.now()) {
  return 'rain';
}

const thereAreClouds = true;
const cloudsCount = 20;
const list = ['thing', 'thing2', `foo`, ['bar']];

Array.isArray(list);

switch (weatherSays(Date.now())) {
  case 'rain':
    break;
  case 'sun':
  default:
    break;
}

let rain = false;
if ((thereAreClouds && cloudsCount >= 20) || weatherSays() === 'rain') {
  rain = false;
} else if (thereAreClouds && weatherSays() === 'rain') {
  rain = true;
} else {
  rain = !!cloudsCount;
}

console.warn(rain, ...list);

class Forecast {
  constructor(where, isGonnaRainA = true, ...randomArgs) {
    this.station = {
      location: [where.x, where.y, where.z],
      surroundings: {
        zoneA: {
          location: [1, 2, 3],
          isGonnaRain: isGonnaRainA,
        },
      },
    };
  }

  async getLocalPrevisions() {
    const rainZones = [this.station.surroundings.zoneA.isGonnaRain];
    return (await rainZones.filter((z) => !!z).length) > rainZones.length / 2;
  }

  communicatePrevisions(isGonnaRain = undefined) {
    if (isGonnaRain) console.log('Take the umbrella.');
  }

  destroy() {
    delete this.station;
  }

  static startHiring() {
    console.log("We're looking for weather presenters.");
  }

  *generateRainInZoneC(clouds = [1, 2, 3]) {
    this.station.surroundings.zoneC.isGonnaRain = true;
    const makeRain = () => {
      return 'raining!';
    };

    yield clouds;
    do {
      console.log(makeRain());
      yield clouds.pop();
    } while (clouds.length >= 1);
  }
}

Forecast.startHiring();
const forecasting = new Forecast([3, 3, 3]);
(async () => {
  const raining = forecasting.generateRainInZoneC();
  raining.next();
  forecasting.communicatePrevisions(await forecasting.getLocalPrevisions());
  raining.return('stop!');
  forecasting.destroy();
})();
