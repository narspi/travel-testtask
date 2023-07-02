import styles from "./styles.module.scss";
import { clsx } from "clsx";
import { useRouter } from "next/router";
import Link from "next/link";
import { BurgerIcon, CloseMenuIcon } from "../SvgIcon";
import Social from "../Social";
import { ModalContext } from "@/context/ModalContext";
import { useContext } from "react";

const data = [
  {
    route: "/#1",
    name: "O клубе",
  },
  {
    route: "/blog",
    name: "Блог",
  },
  {
    route: "/#2",
    name: "Обучение",
  },
  {
    route: "/#3",
    name: "Снаряжение",
  },
  {
    route: "/#4",
    name: "Туры",
  },
  {
    route: "/#5",
    name: "Акции",
  },
  {
    route: "/#6",
    name: "Отзывы",
  },
  {
    route: "/#7",
    name: "Контакты",
  },
];

const Menu = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const { isOpenMenu, setOpenMenu } = useContext(ModalContext);
  const burgerClickFoo = () => {
    document.body.style.overflow = "hidden";
    setOpenMenu(true);
  };
  const closeClickFoo = () => {
    document.body.style.removeProperty('--modal-padding');
    setOpenMenu(false);
  };
  return (
    <nav className={styles.menu}>
      <button
        className={styles.burger}
        aria-label="открыть меню"
        onClick={burgerClickFoo}
      >
        <BurgerIcon />
      </button>
      <div className={clsx(styles.modal, isOpenMenu && styles.open)}>
        <div className={styles.top}>
          <button className={styles.close} onClick={closeClickFoo}>
            <CloseMenuIcon />
          </button>
          <div className={styles.modal__social}>
            <Social />
          </div>
        </div>
        <ul className={styles.menu__list}>
          {data.map((link) => (
            <li className={styles.menu__item} key={link.route}>
              <Link
                className={clsx(
                  styles.menu__link,
                  pathname === link.route && styles.active
                )}
                href={link.route}
                onClick={closeClickFoo}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
