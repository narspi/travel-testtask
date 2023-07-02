import styles from "./styles.module.scss";
import { CloseBtnIcon } from "../SvgIcon";
import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";

const ModalCall = () => {
  const { setOpenCall } = useContext(ModalContext);
  const closeClickFoo = () => {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('padding-right');
    document.body.style.removeProperty('--modal-padding');
    setOpenCall(false);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.inner}>Форма обратного звонка</div>
      <button
        className={styles.close}
        aria-label="Закрыть окно"
        onClick={closeClickFoo}
      >
        <CloseBtnIcon />
      </button>
    </div>
  );
};

export default ModalCall;
