import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <h2>Покупателю</h2>
          <a href="/">Акции</a>
          <a href="/footer">Доставка и оплата</a>
          <a href="/footer">Помощь</a>
          <a href="/footer">Возврат</a>
          <a href="/footer">Часто задаваемые вопросы</a>
        </div>
        <div className="footer">
          <h2>Навигация</h2>
          <a href="/clothes">Главная</a>
          <a href="/footer">Подарки</a>
          <a href="/footer">Зима</a>
          <a href="/footer">Весна</a>
          <a href="/footer">Лето</a>
          <a href="/footer">Осень</a>
        </div>
        <div className="footer">
          <h2>Работа в Clotnes</h2>
          <a href="/footer">Вакансии в магазинах</a>
          <a href="/footer">Вакансии в офисе</a>
          <a href="/footer">Заполнить анкету</a>
        </div>
        <div className="footer description">
          <h2>CLOTHES</h2>
          <p className="silver">
            Clotnes - Это это комфортный интернет-шопинг и более 630 розничных
            магазинов. 20 лет мы выпускаем одежду в стиле сasual для любых
            ситуаций, времени года и погоды, помогая покупателям создать свой
            собственный, неповторимый образ.
          </p>
          <p>8 123 456-7-890 7:00 - 22:00 МСК</p>
          <p>support@clotnes.ru</p>
        </div>
      </footer>
    </>
  );
}
