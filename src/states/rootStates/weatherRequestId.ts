import { atomFamily } from "recoil";

export const weatherRequestIdState = atomFamily({
  key: "WeatherRequestID",
  default: 0,
});
