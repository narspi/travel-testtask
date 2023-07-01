import styles from "./header.module.scss";
import Social from "../Social";
import Link from "next/link";

const HeaderBlog = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className="container-lg">
          <button className={styles.call}>Обратный звонок</button>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container-lg">
          <div className={styles.inner}>
            <nav className={styles.menu}>
              <ul className={styles.menu__list}>
                <li className="menu__item">
                  <Link className={styles.menu__link} href="#">
                    О клубе
                  </Link>
                </li>
                <li className="menu__item">
                  <Link href="/blog" className={styles.menu__link}>
                    Блог
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className={styles.menu__link} href="#">
                    Снаряжение
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className={styles.menu__link} href="#">
                    Туры
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className={styles.menu__link} href="#">
                    Акции
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className={styles.menu__link} href="#">
                    Отзывы
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className={styles.menu__link} href="#">
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
            <Social />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBlog;
