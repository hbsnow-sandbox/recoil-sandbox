import { atom } from "recoil";

import { CityId } from "../../utils/city";

export const cityIdState = atom<CityId | undefined>({
  key: "CityId",
  default: undefined,
});
