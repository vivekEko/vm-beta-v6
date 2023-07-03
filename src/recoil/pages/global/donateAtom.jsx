import { atom } from "recoil";

const donateAtom = atom({
  key: "donateAtom", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export default donateAtom;
