import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

const Top = () => {
  return (
    <main className={styles.top}>
      <div className={clsx("container-lg", styles.inner)}>
        <div className={styles.body}>
          <h1 className={styles.top__title}>
            Путешествие в тысячу миль
            <br />
            Начинается с первого клика
          </h1>
          <button className={styles.top__btn}>Хочу нырять...</button>
          <ul className={styles.list}>
            <li className={clsx(styles.list__elem,styles.calendar)}>Работаем с 2009 года</li>
            <li className={clsx(styles.list__elem,styles.hat)}>Более 2500 учеников</li>
          </ul>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <h3 className={styles.item__title}>Доступный дайвинг</h3>
            <p className={styles.item__descr}>
              Акции и горячие предложения на курсы обучения.
            </p>
            <button className={styles.item__btn}>Узнать больше</button>
          </div>
          <div className={styles.item}>
            <h3 className={styles.item__title}>Онлайн запись</h3>
            <p className={styles.item__descr}>
              Акции и горячие предложения на курсы обучения.
            </p>
            <button className={styles.item__btn}>Оставить вопрос</button>
          </div>
          <div className={styles.item}>
            <h3 className={styles.item__title}>Сертификаты</h3>
            <p className={styles.item__descr}>
              Акции и горячие предложения на курсы обучения.
            </p>
            <button className={styles.item__btn}>Приобрести</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Top;
