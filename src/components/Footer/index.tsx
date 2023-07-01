import styles from "./styles.module.scss";
import Social from "../Social";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.background}>
        <div className="container-lg">
          <div className={styles.inner}>
            <nav className={styles.menu}>
              <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                  <Link className={styles.menu__link} href="#">
                    О клубе
                  </Link>
                </li>
                <li className={styles.menu__item}>
                  <Link className={styles.menu__link} href="#">
                    Блог
                  </Link>
                </li>
                <li className={styles.menu__item}>
                  <Link className={styles.menu__link} href="#">
                    Снаряжение
                  </Link>
                </li>
                <li className={styles.menu__item}>
                  <Link className={styles.menu__link} href="#">
                    Туры
                  </Link>
                </li>
                <li className={styles.menu__item}>
                  <Link className={styles.menu__link} href="#">
                    Акции
                  </Link>
                </li>
                <li className={styles.menu__item}>
                  <Link className={styles.menu__link} href="#">
                    Отзывы
                  </Link>
                </li>
                <li className={styles.menu__item}>
                  <Link className={styles.menu__link} href="#">
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={styles.bottom}>
              <div className={styles.contacts}>
                <a className={styles.tel} href="tel:+74955456702">
                  +7 (495) 545 67 02
                </a>
                <a className={styles.email} href="mailto:emails@mail.ru">
                  emails@mail.ru
                </a>
              </div>
              <div className={styles.info}>
                <Social />
                <p className={styles.copy}>Все права защищены © 2010-2013<br/>Обучение дайвингу в Москве</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
