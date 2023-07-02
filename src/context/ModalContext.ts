import { Dispatch, SetStateAction, createContext } from "react";

interface ITContext {
  isOpenCall: boolean;
  setOpenCall: Dispatch<SetStateAction<boolean>>;
  isOpenMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<ITContext>({
  isOpenCall: false,
  setOpenCall: () => {},
  isOpenMenu: false,
  setOpenMenu: ()=> {},
});

export default ModalContext.Provider;
