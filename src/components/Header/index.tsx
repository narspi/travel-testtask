import styles from "./styles.module.scss";
import Social from "../Social";
import Link from "next/link";


const Header = () => {
  return (
    <header className={styles.header}>
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
                <Link href='/blog' className={styles.menu__link}>
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
          <button className={styles.call}>Обратный звонок</button>
          <Social />
        </div>
      </div>
    </header>
  );
};

export default Header;
