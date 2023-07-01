import { Dispatch, SetStateAction,createContext } from "react";

interface ITContext {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<ITContext>({openModal: false, setOpenModal: ()=> {} });

export default ModalContext.Provider;
