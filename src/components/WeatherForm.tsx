import React, { useCallback, useState } from "react";

import { useSetRecoilState } from "recoil";

import { cityIdState } from "../states/rootStates/cityId";
import { cities, CityId } from "../utils/city";

type Props = {
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
  changeCity: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Component: React.VFC<Props> = (props) => {
  const { changeCity, submit } = props;

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
    </form>
  );
};

export const WeatherForm: React.VFC = () => {
  const [city, setCity] = useState<CityId>();
  const setCityId = useSetRecoilState(cityIdState);

  const changeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cityId = e.currentTarget.value as CityId;
    setCity(cityId);
  };

  const submit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setCityId(city);
    },
    [city, setCityId]
  );

  return <Component changeCity={changeCity} submit={submit} />;
};
