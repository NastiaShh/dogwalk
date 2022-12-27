import style from './Footer.module.css';
import youtubeIcon from './img/youtubeIcon.svg';
import vkIcon from './img/vkIcon.svg';
import tiktokIcon from './img/tiktokIcon.svg';

export default function Footer(): JSX.Element {
  return (
    <div className={style.container}>
      <div className={style.contacts}>
        <div className={style.title}>
          Контакты
        </div>
        <div>
          <img className={style.icon} src={youtubeIcon} alt={'YouTube'} />
          <img className={style.icon} src={vkIcon} alt={'VKontakte'} />
          <img className={style.icon} src={tiktokIcon} alt={'TikTok'} />
        </div>
        <div className={style.emailText}>
          dogwalk@cool.ru
        </div>
        <div className={style.copyright}>
          © 2018-2022 Dogwalk
        </div>
      </div>
      <div className={style.references}>
        <div className={style.ref}>
          <div>Услуги</div>
          <div>Стоимость</div>
          <div>Вопросы</div>
          <div>Отзывы</div>
        </div>
        <div className={style.userPolicy}>Пользовательское соглашение</div>
      </div>
    </div>
  );
};
