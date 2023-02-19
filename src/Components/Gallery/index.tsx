/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import style from './Gallery.module.scss';
import { TCat } from 'Helpers/types';

type TProps = { data: TCat[] | [] };
export const GalleryList = ({ data }: TProps) => {
  return (
    <main className={style.wrapper}>
      <section className={style.block}>
        <h1>Здесь красуются лучшие из лучших</h1>
        {data?.length === 0 ? (
          <pre>Идет загрузка котиков...</pre>
        ) : (
          data.map((cat) => <img src={cat.url} alt="myu" key={cat.id} />)
        )}
      </section>
      <Link to={routes.main}>на главную</Link>
    </main>
  );
};
