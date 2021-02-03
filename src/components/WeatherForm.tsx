import React, { useState } from "react";

import { useRecoilState } from "recoil";

import { cityIdState } from "../states/rootStates/cityId";
import { cities, CityId } from "../utils/city";
import { useRefreshCityId } from "../utils/hooks/useRefreshCityId";

export const WeatherForm: React.VFC = () => {
  const [cityId, setCityId] = useState<CityId>();
  const [stateCityId, setStateCityId] = useRecoilState(cityIdState);
  const refresh = useRefreshCityId(stateCityId);

  const changeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.currentTarget.value as CityId;
    setCityId(id);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStateCityId(cityId);
  };

  return (
    <form onSubmit={submit}>
      <select onChange={changeCity}>
        <option value="">選択なし</option>
        {cities.map((city) => (
          <option value={city.id} key={city.id}>
            {city.name}
          </option>
        ))}
      </select>
      <button type="submit">submit</button>
      <button onClick={() => refresh()}>refresh</button>
    </form>
  );
};
