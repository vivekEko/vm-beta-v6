import { atom } from "recoil";

const currentPathAtom = atom({
  key: "currentPathAtom", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export default currentPathAtom;
