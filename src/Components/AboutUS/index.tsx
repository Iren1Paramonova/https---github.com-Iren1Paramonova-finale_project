import React from 'react';
import style from './AboutUs.module.scss';
import { routes } from 'Helpers/Constants/routes';
import { Link } from 'react-router-dom';

export const AboutText = () => {
  return (
    <main className={style.wrapper}>
      <h1>Привет!</h1>
      <p className={style.about}>
        Меня зовут Ирина и это мой первый собственноручно написанный сайт.
        <br />
        Поскольку в моем доме живет кошка, долгого выбора темы данного проекта не было. Коты, кошки,
        котята - это те, кто поднимет настроение большенству людей. В разделе Галерея можно
        зависнуть надолго, а в Постах почитать интересную информацию.
      </p>
      <img src="/Darkness.jpg" width="30%" alt="Черный котенок" />
      <Link to={routes.main}>на главную</Link>
    </main>
  );
};
