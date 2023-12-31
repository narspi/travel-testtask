import styles from "./header.module.scss";
import Social from "../Social";
import Menu from "../Menu";
import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";
import { padding } from "@/utils/paddingRight";

const HeaderBlog = () => {
  const { setOpenCall } = useContext(ModalContext);
  const openClickFoo = () => {
    document.body.style.paddingRight = padding();
    document.body.style.setProperty("--modal-padding", padding());
    document.body.style.overflow = "hidden";
    setOpenCall(true);
  };
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className="container-lg">
          <button className={styles.call} onClick={openClickFoo}>Обратный звонок</button>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container-lg">
          <div className={styles.inner}>
            <Menu />
            <div className={styles.social}>
              <Social />
            </div>
            <button className={styles.call} onClick={openClickFoo}>Обратный звонок</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBlog;
