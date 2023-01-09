import { atom } from "recoil";

const currentCallPathAtom = atom({
  key: "currentCallPathAtom", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export default currentCallPathAtom;
