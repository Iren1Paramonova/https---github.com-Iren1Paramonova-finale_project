import React from 'react';
import style from './ProductCard.module.scss';

export const ProductCard = (props: any) => {
  console.log(props);
  const { img, breed, country, timeOfBornBreed, weight, lifespan } = props.catData;
  return (
    <main className={style.card__image}>
      <img src={img} alt="cat" />
      <ul>
        <li>
          <strong>Название породы: </strong>
          {breed}
        </li>
        <li>
          <strong>Страна происхождения: </strong>
          {country}
        </li>
        <li>
          <strong>Время зарождения породы: </strong>
          {`${timeOfBornBreed as number} лет`}
        </li>
        <li>
          <strong>Вес: </strong>
          {`${weight as string} кг`}
        </li>
        <li>
          <strong>Продолжительность жизни: </strong>
          {`${lifespan as string} лет`}
        </li>
      </ul>
    </main>
  );
};
