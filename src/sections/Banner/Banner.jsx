import './Banner.scss'
import clsx from 'clsx'
import Button from "@/components/Button";

const Banners = {
  question: {
    title: "Не нашли ответ на свой вопрос?",
    description: "Напишите нам - с радостью подскажем и поможем оформить заказ",
    buttonLabel: "Задать вопрос в Telegram",
    buttonHref: "/",
  },
  review: {
    title: "Свяжитесь с нами",
    description: "Поможем выбрать растения и ответим на любые вопросы",
    buttonLabel: "Telegram-сообщество",
    buttonHref: "https://t.me/Rayssad",
  }
}

export default (props) => {

  const {
    className,
    // 'question' | 'review'
    type = ''
  } = props

  const banner = Banners[type]

  if (!banner) return null

  return (
    <section className={clsx(className, 'banner')}>
      <div className="banner__inner container">
        <h2 className="banner__title">{banner.title}</h2>

        <div className="banner__description">
          <p>{banner.description}</p>
        </div>

        <Button
          className="banner__button"
          href={banner.buttonHref}
          target="_blank"
          mode="red"
          label={banner.buttonLabel}
        />
      </div>
    </section>
  )
}

