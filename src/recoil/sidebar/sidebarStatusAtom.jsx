import { atom } from "recoil";

const sidebarStatusAtom = atom({
  key: "sidebarStatusAtom", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export default sidebarStatusAtom;
