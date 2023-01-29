import { ProductCard } from 'Components/ProductCard';
import { catsArr } from 'Helpers/Constants';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './Content.module.scss';

export const Content = () => {
  const navigate = useNavigate();

  const location = useLocation();

  console.log(location);

  return (
    <main className={style.content}>
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
      <div>
        {/* <ProductCard /> */}
        {catsArr?.length > 0 && catsArr.map((cat) => <ProductCard key={cat.id} catData={cat} />)}
      </div>
      <button type="button" onClick={() => navigate(-1)}>
        go back
      </button>
      <button type="button" onClick={() => navigate(1)}>
        go next
      </button>
    </main>
  );
};
