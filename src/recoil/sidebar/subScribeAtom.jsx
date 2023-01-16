import { atom } from "recoil";

const subScribeAtom = atom({
  key: "subScribeAtom", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export default subScribeAtom;
