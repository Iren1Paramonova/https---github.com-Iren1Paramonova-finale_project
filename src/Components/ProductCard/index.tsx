import React from 'react';
import style from 'ProductCard.module.scss';

type ProductPropsType = {
  image: string;
  name: string;
  country: string;
  age: number;
  weight: number;
  life: number;
};

export const ProductCard = (props: ProductPropsType) => {
  const { image, name, country, age, weight, life } = props;

  return (
    <div className={style.card__image}>
      <img src={image} alt="Cat" />
      <div className={style.atribut_vid}>
        <p>
          <strong>Порода: </strong>
          {name}
        </p>
      </div>
      <div className={style.atribut_nevid}>{life}</div>
      <p>
        <strong>Страна происхождения: </strong>
        {country}
      </p>
      <p>
        <strong>СВремя зарождения породы: </strong>
        {age}
      </p>
      <p>
        <strong>Вес: </strong>
        {weight}
      </p>
      <p>
        <strong>Продолжительность жизни: </strong>
        {life}
      </p>
    </div>
  );
};
