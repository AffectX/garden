import './Footer.scss'
import Socials from "@/components/Socials";
import Button from "@/components/Button";

export default () => {

  const menuItems = [
    {
      type: 'links',
      title: 'Каталог',
      items: ['Проф семяна цветов', 'Проф семяна овощей', 'Гортензии'],
    },
    {
      type: 'links',
      title: 'Контакты',
      items: [
        { type: 'phone', value: '+7 (999) 999-99-99' },
        { type: 'email', value: 'info@gmail.com' },
        { type: 'address', value: 'Город Иркутск проспект Иванова' },
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
          {menuItems.map(({title, type, button, items}, index) => (
            <div className="footer__menu-column" key={index}>
              <a className="footer__menu-title" href={type === 'links' && title === 'Каталог' ? '/catalog' : undefined}>
                {title}
              </a>

              {/* Список ссылок */}
              {type === 'links' && (
                <ul className="footer__menu-list">
                  {items.map((item, i) => {
                    // для Каталога item — строка
                    if (title === 'Каталог') {
                      return (
                        <li className="footer__menu-item" key={i}>
                          <a className="footer__menu-link" href="/catalog">{item}</a>
                        </li>
                      )
                    }

                    // для Контактов item — объект с type и value
                    if (title === 'Контакты') {
                      let href;
                      if (item.type === 'phone') href = `tel:${item.value.replace(/\D/g,'')}`;
                      if (item.type === 'email') href = `mailto:${item.value}`;
                      if (item.type === 'address') href = undefined; // адрес без ссылки

                      return (
                        <li className="footer__menu-item" key={i}>
                          {href ? (
                            <a className="footer__menu-link" href={href}>{item.value}</a>
                          ) : (
                            <span>{item.value}</span>
                          )}
                        </li>
                      )
                    }

                    return null;
                  })}
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
