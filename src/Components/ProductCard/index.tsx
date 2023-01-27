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
      <div className={style.content}>{name}</div>
      <div className={style.content}>{country}</div>
      <div className={style.content}>{age}</div>
      <div className={style.content}>{weight}</div>
      <div className={style.content}>{life}</div>
    </div>
  );
};
