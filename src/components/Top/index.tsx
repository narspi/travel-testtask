import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Top = () => {
  return (
    <main className={styles.top}>
      <div className={clsx("container-lg", styles.inner)}>
        <div className={styles.body}>
          <h1 className={styles.title}>
            Путешествие в тысячу миль
            <br />
            Начинается с первого клика
          </h1>
          <button className={styles.top__btn}>Хочу нырять...</button>
          <ul className={styles.list}>
            <li className={clsx(styles.list__elem, styles.calendar)}>
              Работаем с 2009 года
            </li>
            <li className={clsx(styles.list__elem, styles.hat)}>
              Более 2500 учеников
            </li>
          </ul>
        </div>
        <div className={styles.slider}>
          <Swiper
            spaceBetween={12}
            slidesPerView={3}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 12
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 12
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 71
              }
            }}
          >
            <SwiperSlide>
              <div className={styles.item}>
                <h3 className={clsx(styles.item__title, styles.dive)}>
                  Доступный дайвинг
                </h3>
                <p className={styles.item__descr}>
                  Акции и горячие предложения на курсы обучения.
                </p>
                <button className={styles.item__btn}>Узнать больше</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.item}>
                <h3 className={clsx(styles.item__title, styles.msg)}>
                  Онлайн запись
                </h3>
                <p className={styles.item__descr}>
                  Акции и горячие предложения на курсы обучения.
                </p>
                <button className={styles.item__btn}>Оставить вопрос</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.item}>
                <h3 className={clsx(styles.item__title, styles.sert)}>
                  Сертификаты
                </h3>
                <p className={styles.item__descr}>
                  Акции и горячие предложения на курсы обучения.
                </p>
                <button className={styles.item__btn}>Приобрести</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Top;
