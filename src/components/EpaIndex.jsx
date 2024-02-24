import React from "react";
import Container from "../ui/Container";
import { UsEpaIndexToInfo } from "../utils/helpers";

function EpaIndex({ weather }) {
  const [index, info, color] = UsEpaIndexToInfo(
    weather.current.air_quality["us-epa-index"]
  );

  const {
    "us-epa-index": usEpaIndex,
    "gb-defra-index": gbDefraIndex,
    ...airQuality
  } = weather.current.air_quality;

  return (
    <Container extraClasses="h-[60%] gap-7">
      <h1 className="text-[#A0A0A0]">EPA US INDEX</h1>
      <h2 className={`text-${color}-500 text-3xl`}>
        {weather.current.air_quality["us-epa-index"]}{" "}
        <span className="text-base">{index}</span>
      </h2>
      <p className="text-center">{info}</p>
      <hr className="w-5/6 border-[#505050]" />
      <div className="grid grid-cols-3 gap-14 md:grid-cols-6">
        {Object.entries(airQuality).map(([key, value]) => (
          <h2 key={key} className="flex flex-col text-2xl items-center">
            {value}
            <span className="text-sm text-[#A0A0A0]">{key.toUpperCase()}</span>
          </h2>
        ))}
      </div>
    </Container>
  );
}

export default EpaIndex;
