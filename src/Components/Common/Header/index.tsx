import { navigation } from 'Helpers/Constants';
import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.wrapper}>
      <img className={style.wrapper_logo} src=" /logo.png" />
      <div className={style.mainNav}>
        {navigation.map((item) => (
          <Link key={item.name} to={item.route}>
            {item.name}
          </Link>
        ))}
      </div>
      <Link to={routes.auth}>Авторизация</Link>
    </header>
  );
};
