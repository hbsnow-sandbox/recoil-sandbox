import { selectorFamily } from "recoil";

import { CurrentWeather } from "../../models/currentWeather";
import { CityId } from "../../utils/city";
import { weatherRequestIdState } from "./weatherRequestId";

export const weatherState = selectorFamily<CurrentWeather, CityId | undefined>({
  key: "Weather",
  get: (cityId) => async ({ get }) => {
    if (!cityId) {
      return;
    }
    get(weatherRequestIdState(cityId));
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&lang=ja&units=metric`
    );
    const json = await res.json();

    return json;
  },
});
