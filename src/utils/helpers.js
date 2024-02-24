export function SelectRandomColor() {
  const colors = ["blue", "green", "red", "purple", "pink"];
  return colors[Math.floor(Math.random() * colors.length)];
}

export function UsEpaIndexToInfo(index) {
  switch (index) {
    case 1:
      return [
        "Good",
        "The quality of the air is good. It’s a nice day to go out and walk!",
        "green",
      ];
    case 2:
      return ["Moderate", "The quality of the air is moderate.", "yellow"];
    case 3:
      return [
        "Unhealthy for sensitive groups",
        "The quality of the air is unhealthy for sensitive groups. It’s recommended to avoid outdoor activities.",
        "yellow",
      ];
    case 4:
      return [
        "Unhealthy",
        "The quality of the air is unhealthy. It’s recommended to avoid outdoor activities.",
        "red",
      ];
    case 5:
      return [
        "Very unhealthy",
        "The quality of the air is very unhealthy. It’s recommended to avoid outdoor activities.",
        "red",
      ];
    case 6:
      return [
        "Hazardous",
        "The quality of the air is hazardous. It’s recommended to avoid outdoor activities.",
        "red",
      ];
    default:
      return ["Unknown", "The quality of the air is unknown.", "green"];
  }
}

export function FormatHour(date) {
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  return new Date(date).toLocaleTimeString("en-US", options);
}

export function FormatShortDate(date) {
  const options = { weekday: "short", month: "short", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
}

export function FormatLongDate(date) {
  const options = {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return new Date(date).toLocaleDateString("en-US", options);
}
