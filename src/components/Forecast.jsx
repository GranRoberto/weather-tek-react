import React from "react";
import Container from "../ui/Container";
import ForecastElement from "../ui/ForecastElement";
import { FormatHour, FormatShortDate } from "../utils/helpers";

function Forecast({ weather }) {
  const currentHourWeather = weather.location.localtime;

  const forecastHours = [
    ...weather.forecast.forecastday[0].hour,
    ...weather.forecast.forecastday[1].hour,
  ];

  const forecastDays = forecastHours.filter(
    (hour) => hour.time >= currentHourWeather
  );

  return (
    <Container extraClasses="">
      <div className="relative w-full flex gap-10 overflow-x-auto pb-6 forecast-content">
        {forecastDays.map((hour, hourIndex) => (
          <ForecastElement
            key={hourIndex}
            time={
              FormatHour(hour.time) !== "12:00 AM"
                ? FormatHour(hour.time)
                : FormatShortDate(hour.time)
            }
            image={hour.condition.icon}
            temp={hour.temp_c}
            humidity={hour.humidity}
          />
        ))}
      </div>
    </Container>
  );
}

export default Forecast;
