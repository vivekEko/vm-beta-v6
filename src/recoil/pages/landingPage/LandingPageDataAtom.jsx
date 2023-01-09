import { atom } from "recoil";

const LandingPageDataAtom = atom({
  key: "LandingPageDataAtom", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export default LandingPageDataAtom;
