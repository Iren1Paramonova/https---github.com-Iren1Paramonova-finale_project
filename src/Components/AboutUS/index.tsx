import React from 'react';
import style from './AboutUs.module.scss';
import { routes } from 'Helpers/Constants/routes';
import { Link } from 'react-router-dom';

export const AboutText = () => {
  return (
    <main className={style.wrapper}>
      <h1>Main contacts</h1>
      <Link to={routes.main}>go to main</Link>
    </main>
  );
};
