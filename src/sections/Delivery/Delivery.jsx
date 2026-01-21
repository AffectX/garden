import './Delivery.scss'
import clsx from 'clsx'
import Section from "@/layouts/Section";
import InstructionsGroup from "@/components/InstructionsGroup";
import Button from "@/components/Button";


export default (props) => {
  const deliveryItems = [
    {
      title: "Напишите нам в личные сообщения",
      description: '',
    },
    {
      title: "Укажите данные для оформления заказа",
      description: '',
    },
    {
      title: "Подтверждение",
      description: 'Мы свяжемся с вами, уточним детали и рассчитаем стоимость и отправим реквизиты для оплаты.',
    },
    {
      title: "Доставка",
      description: 'Отправляем заказы по Иркутску и Иркутской области. Упаковываем растения бережно, чтобы они прибыли свежими и целыми. ',
    },
    {
      title: "Получение",
      description: 'При самовывозе — забираете заказ в удобное для вас время. При доставке — отслеживаете посылку по трек-номеру, который мы отправим. ',
    },
    {
      title: "Готовы оформить заказ?",
      description: 'Напишите нам прямо сейчас — подберем растения и подскажем оптимальный способ доставки.',
    },
  ]

  const {
    className,
  } = props

  return (
    <Section
      className={clsx(className, 'delivery')}
      title="Как оформить доставку"
      titleId="delivery-title"

    >
      <InstructionsGroup columns={2}>
        {deliveryItems}
      </InstructionsGroup>

    </Section>

  )
}

