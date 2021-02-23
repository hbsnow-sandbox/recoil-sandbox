import React from "react";

import { useRecoilValue } from "recoil";

import { cityIdState } from "../states/rootStates/cityId";
import { weatherState } from "../states/rootStates/weather";

export const WeatherResult: React.VFC = () => {
  const cityId = useRecoilValue(cityIdState);
  const weather = useRecoilValue(weatherState(cityId));

  if (!weather) {
    return null;
  }

  return (
    <section>
      <h2>{weather.name}の天気</h2>

      <div>
        {weather.weather.map((item, i) => {
          return (
            <div key={i}>
              {item.main} / {item.description}
            </div>
          );
        })}
      </div>
      <div>気温: {weather.main.temp} 度</div>
      <div>湿度: {weather.main.humidity} %</div>
      <div>気圧: {weather.main.pressure} hPa</div>
    </section>
  );
};
