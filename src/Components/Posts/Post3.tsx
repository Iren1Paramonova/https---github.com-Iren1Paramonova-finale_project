import React from 'react';
import { routes } from 'Helpers/Constants/routes';
import { Link, useNavigate } from 'react-router-dom';
import style from './PostsList.module.scss';

export const PostText3 = () => {
  const navigate = useNavigate();
  return (
    <main className={style.wrapper}>
      <h1>Язык жестов и поз кошки</h1>
      <p>
        Однозначного истолкования жестов кошки не существует. Оно может быть различным у разных
        пород и быть индивидуальным у каждой кошки. Поэтому хозяину важно войти в контакт со своей
        питомицей, научиться понимать свою кошку. В язык жестов и поз у кошек входят движения
        хвоста, ушей, лап, усов, глаз, головы и тела. Хвост - очень выразительный «инструмент». Он
        может быть поднят вверх в знак удовольствия или приветствия, либо опущен вниз или поджат во
        время схватки двух кошек-соперниц. Если хвост, как плетка ходит «из стороны в сторону» - это
        проявление гнева, в отличие от собак, виляющих хвостом от удовольствия. У всех кошек (за
        исключением тех, у которых прижатые уши являются признаком породы) уши обычно стоят торчком
        или направлены в стороны, и как антенны-радары, могут поворачиваться, чтобы улавливать
        звуки. Чаще всего кошка лежит в полной неподвижности и только по движению ее ушей, можно
        сказать, что сквозь обманчивую дремоту она слушает все ваши разговоры. Уши, прижатые назад,
        означает приглашение поиграть, адресованное хозяину или другой кошке, но прижатые по бокам
        головы обычно знаменуют собой гнев или раздражение. Тело распласталось по земле, глаза
        полузакрыты, уши плотно прижаты – это поза подчинения. Лапами кошка-мать прижимает котят к
        земле, чтобы удерживать их возле себя и вымыть. Лапами кошки пользуются и для того, чтобы в
        драке атаковать соперника. Сильный удар, наносимый лапой с выпущенными когтями,
        подразумевает раздражение. Нежное поглаживание по щеке или носу лапой с втянутыми коготками
        может означать «я люблю тебя». Усы в соответствии с настроением меняют направление и
        подергиваются. Глаза могут быть широко открыты, тогда они демонстрируют интерес к тому, что
        вы делаете, либо полузакрытыми, когда кошка блаженствует от того, что вы ее гладите. Иногда
        кажется, что кошки способны останавливать свой взгляд на чем-то, чего просто не существует
        или мы, люди, этого просто не замечаем. Голова используется для такого выразительного жеста,
        как «бодание», с помощью которого кошка хочет привлечь к себе внимание человека или проявить
        свою привязанность. Если кошки дружески «бодают» друг друга, это безошибочный знак
        признания. Голова также используется в разнообразных позах во время ухаживания. Тело тоже
        может много рассказать о том, что думает или чувствует животное. Развернувшись боком, с
        выгнутой спиной и распушенной шерстью, кошка обороняется против другой кошки или собаки,
        посягающей на ее территорию. Такую позу часто принимает кошка-мать, чтобы защитить свой
        выводок. С другой стороны, агрессивное поведение часто проявляется в уверенной атаке: кошка
        наступает на непрошеного гостя, ожидая, что он отступится. Кошка, сидящая возле двери, с
        поднятой головой, как бы говорит: «Пожалуйста, отвори дверь, я хочу войти». Но если она
        сидит возле двери, опустив глаза в пол, ее поза может означать «за дверью котенок» или «за
        дверью кто-то есть». Некоторые кошки, стремясь выйти из дома, прыгают на дверные ручки, и
        немного попрактиковавшись, открывают их, причем иногда не только обычные, действующие по
        принципу рычага, но и круглые. Кошек можно приучить и к дверным молоточкам, постучав, кошка
        терпеливо усаживается возле двери и ждет, когда ей откроют. Кошка, свернувшаяся калачиком, с
        аккуратно поджатыми под себя лапами и обернутым вокруг тела хвостом, излучает счастье и
        покой. Кошка, которая выпрямившись, смотрит в окно, - живо интересуется людьми, птицами и
        любыми проявлениями жизни. Однако, увидев другую кошку, ступившую на ее территорию, наша
        наблюдательница, негодуя, начинает бить хвостом, открывать рот и издавать серию угрожающих
        звуков. Если вам пришлось наказать кошку, животное может выразить свое неудовольствие,
        повернувшись к вам спиной и начав чистить шерсть. Этот жест предназначен для того, чтобы
        заставить вас пуститься в уговоры, посуетиться вокруг нее, пока она, наконец не снизойдет до
        ответа. Ваша питомица в ответ на ваши мольбы и просьбы поупрямится, еще немного
        покапризничает, но, несомненно, останется довольна, что все неприятности позади и прощение
        получено.
      </p>
      <Link to={routes.posts}>go to posts</Link>
      <button type="button" onClick={() => navigate(routes.post2)}>
        предыдущий пост
      </button>
      <button type="button" onClick={() => navigate(routes.post4)}>
        следующий пост
      </button>
    </main>
  );
};
