import React from 'react';
import style from './AboutUs.module.scss';
import { routes } from 'Helpers/Constants/routes';
import { Link } from 'react-router-dom';

export const AboutText = () => {
  return (
    <main className={style.wrapper}>
      <h1>Вас приветствует сайт любителей кошек!</h1>
      <p>
        Этот сайт о кошках. О НАШИХ с вами кошках, об их взаимоотношениях между собой (если у вас их
        два и более), об их взаимоотношений с нами или с другими членами семьи (собаками, хомяками,
        птичками и т.д.). Мне кажется, каждому любителю кошек есть что рассказать про свое лохматое
        (или не совсем лохматое, ну или совсем не лохматое) чадо. Какие они своеобразные, гордые,
        неприступные, ласковые, очаровательные, любимые и любящие нас, своих хозяев (родителей,
        партнеров, друзей, - вот кем они нас считают?). Я люблю кошек. И думаю, что таких, как и я,
        кошатниц, очень и очень много... Кошатники! Расскажите о своих четвероногих членах семьи. У
        них такая не долгая жизнь, но они приносят нам в дом огромную радость общения с ними. За
        тем, как играет кошка, можно наблюдать часами. Делитесь своими впечатлениями, рассказами,
        размещайте фотографии своих любимцев.
      </p>
      <Link to={routes.aboutUs}>go to aboutUs</Link>
    </main>
  );
};
