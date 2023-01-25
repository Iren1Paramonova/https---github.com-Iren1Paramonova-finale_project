import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './PostsList.module.scss';

export const PostsList = () => {
  return (
    <main className={style.wrapper}>
      <h1>Статьи про кошек</h1>
      <div>
        <p>
          <Link to={routes.post1}>Для чего нам нужны кошки?</Link>
        </p>
        <p>
          <Link to={routes.post2}>Ночные хищники</Link>
        </p>
        <p>
          <Link to={routes.post3}>Язык жестов и поз кошки</Link>
        </p>
        <p>
          <Link to={routes.post4}>Как выбрать котенка</Link>
        </p>
        <p>
          <Link to={routes.post5}>Котенок в доме</Link>
        </p>
        <p>
          <Link to={routes.post6}>Лекарства для кошки</Link>
        </p>
      </div>
      <Link to={routes.main}>go to main</Link>
    </main>
  );
};
