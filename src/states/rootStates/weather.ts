import { selector } from "recoil";

import { CurrentWeather } from "../../models/currentWeather";
import { cityIdState } from "./cityId";

export const weatherState = selector<CurrentWeather>({
  key: "Weather",
  get: async ({ get }) => {
    const cityId = get(cityIdState);
    if (!cityId) {
      return;
    }

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&lang=ja&units=metric`
    );
    const json = await res.json();

    return json;
  },
});
