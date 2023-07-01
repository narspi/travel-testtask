import styles from "./styles.module.scss";
import { CloseBtnIcon } from "../SvgIcon";
import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";

const ModalCall = () => {
  const { setOpenModal } = useContext(ModalContext);
  const closeClickFoo = () => {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('padding-right');
    document.body.style.removeProperty('--modal-padding');
    setOpenModal(false);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.inner}>Какая нибудь форма</div>
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
