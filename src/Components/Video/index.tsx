import React from 'react';
import style from './Video.module.scss';
import { routes } from 'Helpers/Constants/routes';
import { Link } from 'react-router-dom';

export const VideoContent = () => {
  return (
    <main className={style.wrapper}>
      <h1>Вас приветствует сайт любителей кошек!</h1>
      <p>Рандомные видосики с YouTube</p>
      <Link to={routes.main}>go to main</Link>
    </main>
  );
};
