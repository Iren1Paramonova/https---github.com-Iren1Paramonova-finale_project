import React from 'react';
import style from './ProductCard.module.scss';

export const ProductCard = (props: any) => {
  console.log(props);
  const { img, breed, country, timeOfBornBreed, weight, lifespan } = props.catData;
  return (
    <main className={style.card__image}>
      <img src={img} alt="cat" id="img" />
      <span>
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
            {`${timeOfBornBreed as number} год`}
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
      </span>
    </main>
  );
};
const displayBox = () => {
  const boxMouseOverHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const box: HTMLDivElement = event.currentTarget;
    box.style.backgroundColor = 'lightblue';
  };
  const boxMouseOutHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const box: HTMLDivElement = event.currentTarget;
    box.style.backgroundColor = 'lightgreen';
  };
  return (
    <div style={styles.box} onMouseOver={boxMouseOverHandler} onMouseOut={boxMouseOutHandler}>
      <input
        onMouseOver={boxMouseOverHandler}
        onMouseOut={boxMouseOutHandler}
        style={styles.input}
        placeholder="Welcome to KindaCode.com"
      />
    </div>
  );
};
