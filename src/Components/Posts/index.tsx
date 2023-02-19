import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './PostsList.module.scss';

export const PostsList = () => {
  return (
    <main className={style.wrapperList}>
      <h1>Статьи про кошек</h1>
      <ul>
        <li>
          <Link to={routes.post1}>Для чего нам нужны кошки?</Link>
        </li>
        <li>
          <Link to={routes.post2}>Ночные хищники</Link>
        </li>
        <li>
          <Link to={routes.post3}>Язык жестов и поз кошки</Link>
        </li>
        <li>
          <Link to={routes.post4}>Как выбрать котенка</Link>
        </li>
        <li>
          <Link to={routes.post5}>Котенок в доме</Link>
        </li>
        <li>
          <Link to={routes.post6}>Лекарства для кошки</Link>
        </li>
      </ul>
      <Link to={routes.main}>на главную</Link>
    </main>
  );
};
