import styles from "./styles.module.scss";
import Social from "../Social";
import Menu from "../Menu";
import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";
import { clsx } from 'clsx';
import { padding } from "@/utils/paddingRight";

const Header = () => {
  const { openModal,setOpenModal } = useContext(ModalContext);
  const openClickFoo = () => {
    document.body.style.paddingRight = padding();
    document.body.style.setProperty("--modal-padding", padding());
    document.body.style.overflow = "hidden";
    setOpenModal(true);
  };
  return (
    <header className={clsx(styles.header,openModal && styles.modal)}>
      <div className="container-lg">
        <div className={styles.inner}>
          <Menu />
          <button className={styles.call} onClick={openClickFoo}>
            Обратный звонок
          </button>
          <Social />
        </div>
      </div>
    </header>
  );
};

export default Header;
