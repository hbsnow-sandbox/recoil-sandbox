import { useCallback } from "react";

import { useSetRecoilState } from "recoil";

import { weatherRequestIdState } from "../../states/rootStates/weatherRequestId";
import { CityId } from "../city";

export const useRefreshCityId = (cityId: CityId | undefined): (() => void) => {
  const setUserInfoQueryRequestID = useSetRecoilState(
    weatherRequestIdState(cityId)
  );

  const refresh = useCallback(() => {
    setUserInfoQueryRequestID((requestID) => requestID + 1);
  }, [setUserInfoQueryRequestID]);

  return refresh;
};
