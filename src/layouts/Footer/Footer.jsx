import './Footer.scss'
import Socials from "@/components/Socials";
import Button from "@/components/Button";

export default () => {

  const menuItems = [
    {
      type: 'links',
      title: 'Каталог',
      items: ['Цветы', 'Цветы', 'Цветы'],
    },
    {
      type: 'links',
      title: 'Контакты',
      items: [
        '+7 (999) 999-99-99',
        'info@gmail.com',
        'Город Иркутск проспект Иванова',
      ],
    },
    {
      type: 'socials',
      title: 'Следите за нами',
      items: [
        {
          label: 'Telegram',
          iconName: 'telegram',
        },
      ],
    },
    {
      type: 'button',
      title: 'Хотите оформить заказ?',
      button: {
        label: 'Написать в Telegram',
        href: '/',
      },
    },
  ]


  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">
          {menuItems.map(({title,type, button, items}, index) => (
            <div className="footer__menu-column" key={index}>
              <a className="footer__menu-title" href="/">
                {title}
              </a>

              {/* Список ссылок */}
              {type === 'links' && (
                <ul className="footer__menu-list">
                  {items.map((text, i) => (
                    <li className="footer__menu-item" key={i}>
                      <a className="footer__menu-link" href="/">
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {/* Социальные иконки */}
              {type === 'socials' && (
                <Socials
                  className="footer__socials"
                  links={items}
                />
              )}

              {/* Кнопка */}
              {type === 'button' && (
                <div className="footer__menu-button-wrapper">
                  <Button
                    className="footer__menu-button"
                    {...button}
                  />
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="footer__extra">
          <div className="footer__copyright">
            <p>
              © <time dateTime="2025">2025</time> Райский сад Сибири.
              Все права защищены. Выращиваем с любовью
            </p>
          </div>
        </div>
      </div>
    </footer>

  )
}
