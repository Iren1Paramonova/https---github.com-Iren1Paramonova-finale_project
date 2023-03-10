import React from 'react';
import { routes } from 'Helpers/Constants/routes';
import { Link, useNavigate } from 'react-router-dom';
import style from './PostsList.module.scss';

export const PostText6 = () => {
  const navigate = useNavigate();
  return (
    <main className={style.wrapper}>
      <h1>Лекарства для кошки</h1>
      <p>
        Что именно из лекарственных средств необходимо держать «на всякий случай» под рукой, если вы
        держите кошку? Я неоднократно натыкалась в интернете на потрясающий по своей протяженности
        список медикаментов и медицинских средств, рекомендованный всем владельцам кошек. Так вот,
        этот списочек состоит из 20 или даже (было и такое!) из 50(!) пунктов. Я не всегда даже
        дочитывала его до конца… У меня человечьих-то лекарств в аптечке намного меньше. А для своих
        усатых питомцев я в обязательном порядке держу дома вазелиновое масло (на случай запора) и
        любой сорбент (активированный уголь, энтеросгель)– на случай отравления. Ну а градусник,
        бинт, вата – это у вас и так есть. А все остальное - для глаз, для ушей и для любых
        непредсказуемых ситуаций вы можете оперативно купить в аптеке, благо что найти
        круглосуточную аптеку сейчас проблем не составляет (по-крайней мере, в городе - точно). А
        держать дома запас лекарств, которые имеют ограниченный срок годности и которые, возможно,
        вам никогда не понадобятся (и дай Бог чтобы так и было), ну не знаю…. Если только вы
        привыкли всегда и во всем делать стратегический запас, тогда валяйте- обновляйте только
        периодически. И помните - человеческие лекарства могут быть смертельно опасны для кошек!
        Анальгин нельзя ни в коем случае! В обязательном порядке советуйтесь с врачом-ветеринаром!
        Не простите потом себе, если собственными руками дадите своему любимцу ядовитую таблетку…
      </p>
      <section className="style.post_nav">
        <Link to={routes.posts}>go to posts</Link>
        <button type="button" onClick={() => navigate(routes.post5)}>
          предыдущий пост
        </button>
      </section>
    </main>
  );
};
