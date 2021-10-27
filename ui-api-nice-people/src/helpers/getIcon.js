export const icons = {
  Thunderstorm: "wi-thunderstorm",
  Drizzle: "wi-sleet",
  Rain: "wi-storm-showers",
  Snow: "wi-snow",
  Atmosphere: "wi-fog",
  Clear: "wi-day-sunny",
  Clouds: "wi-day-fog",
};

export const getIcon = (icons, rangeID) => {
	switch (true) {
    case rangeID >= 200 && rangeID <= 232:
      return icons.Thunderstorm;
    case rangeID >= 300 && rangeID <= 321:
      return icons.Drizzle;
    case rangeID >= 500 && rangeID <= 531:
      return icons.Rain;
    case rangeID >= 600 && rangeID <= 622:
      return icons.Snow;
    case rangeID >= 701 && rangeID <= 781:
      return icons.Atmosphere;
    case rangeID === 800:
      return icons.Clear;
    case rangeID >= 801 && rangeID <= 804:
      return icons.Clouds;
    default:
      return icons.Clouds;
  }
};

