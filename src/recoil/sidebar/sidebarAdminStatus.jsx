import { atom } from "recoil";

const sidebarAdminStatus = atom({
  key: "sidebarAdminStatus", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});

export default sidebarAdminStatus;
