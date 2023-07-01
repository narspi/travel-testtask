import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

const Top = () => {
  return (
    <main className={styles.top}>
      <div className={clsx("container-lg", styles.top__inner)}>
        <div className={styles.top__body}>
          <h1 className={styles.top__title}>
            Путешествие в тысячу миль
            <br />
            Начинается с первого клика
          </h1>
          <button className={styles.top__btn}>Хочу нырять...</button>
          <ul className={styles.top__list}>
            <li className={clsx(styles['top__list-elem'],styles.calendar)}>Работаем с 2009 года</li>
            <li className={clsx(styles['top__list-elem'],styles.hat)}>Более 2500 учеников</li>
          </ul>
        </div>
        <div className={styles.top__items}>
          <div className={styles.top__item}>
            <h3 className={styles.top__item_title}>Доступный дайвинг</h3>
            <p className={styles['top__item-descr']}>
              Акции и горячие предложения на курсы обучения.
            </p>
          </div>
          <div className={styles.top__item}>
            <h3 className={styles.top__item_title}>Доступный дайвинг</h3>
            <p className={styles['top__item-descr']}>
              Акции и горячие предложения на курсы обучения.
            </p>
          </div>
          <div className={styles.top__item}>
            <h3 className={styles.top__item_title}>Доступный дайвинг</h3>
            <p className={styles['top__item-descr']}>
              Акции и горячие предложения на курсы обучения.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Top;
