import styles from "./styles.module.scss";
import Social from "../Social";
import Menu from "../Menu";
import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";
import { clsx } from 'clsx';
import { padding } from "@/utils/paddingRight";

const Header = () => {
  const { isOpenCall,setOpenCall } = useContext(ModalContext);
  const openClickFoo = () => {
    document.body.style.paddingRight = padding();
    document.body.style.setProperty("--modal-padding", padding());
    document.body.style.overflow = "hidden";
    setOpenCall(true);
  };
  return (
    <header className={clsx(styles.header,isOpenCall && styles.modal)}>
      <div className="container-lg">
        <div className={styles.inner}>
          <Menu />
          <button className={styles.call} onClick={openClickFoo}>
            Обратный звонок
          </button>
          <div className={styles.social}>
            <Social />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
