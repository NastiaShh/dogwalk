import style from './Footer.module.css';
import youtubeIcon from './img/youtubeIcon.svg';
import vkIcon from './img/vkIcon.svg';
import tiktokIcon from './img/tiktokIcon.svg';

export default function Footer(): JSX.Element {
  return (
    <div className={style.container}>
      <div>
        <div>
          Контакты
        </div>
        <div>
          <img src={youtubeIcon} alt={'YouTube'} />
          <img src={vkIcon} alt={'VKontakte'} />
          <img src={tiktokIcon} alt={'TikTok'} />
        </div>
        <div>
          dogwalk@cool.ru
        </div>
        <div>
          © 2018-2022 Dogwalk
        </div>
      </div>
      <div>
        <div>
          <div>Услуги</div>
          <div>Стоимость</div>
          <div>Вопросы</div>
          <div>Отзывы</div>
        </div>
        <div>Пользовательское соглашение</div>
      </div>
    </div>
  );
};
