import { atom } from "recoil";

const subScribeAtom = atom({
  key: "subScribeAtom", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});

export default subScribeAtom;
