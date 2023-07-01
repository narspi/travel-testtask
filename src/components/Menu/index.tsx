import styles from "./styles.module.scss";
import { clsx } from "clsx";
import { useRouter } from "next/router";
import Link from "next/link";

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
  }
];

const Menu = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {data.map((link) => (
          <li className="menu__item" key={link.route}>
            <Link
              className={clsx(
                styles.menu__link,
                pathname === link.route && styles.active
              )}
              href={link.route}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
