export const kelvinToFahrenheit = (kelvinValue) =>
  Math.round(((kelvinValue - 273.15) * 9) / 5 + 32);
export const kelvinToCelsius = (kelvinValue) =>
  Math.round(kelvinValue - 273.15);
export const convertFahrenheitTempsToCelsius = (temps) =>
  temps.map((temp) => Math.round(((temp - 32) * 5) / 9));
export const convertCelsiusTempsToFahrenheit = (temps) =>
  temps.map((temp) => Math.round((temp * 9) / 5 + 32));
