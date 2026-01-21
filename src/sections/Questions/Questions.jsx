import './Questions.scss'
import clsx from 'clsx'
import Section from "@/layouts/Section";
import AccordionGroup from "@/components/AccordionGroup";
import Accordion from "@/components/Accordion";

export default (props) => {
  const {
    className,
  } = props

  const questionItems = [
    'Как оформить заказ?',
    'Как оформить заказ?',
    'Как оформить заказ?',
    'Как оформить заказ?',
    'Как оформить заказ?',
    'Как оформить заказ?',
  ]

  return (
    <Section
      className={clsx(className, 'questions')}
      title="Частые вопросы"
      titleId="questions-title"
      description="Мы собрали ответы на самые распространенные вопросы наших клиентов. Если не нашли нужный ответ — напишите нам, мы всегда на связи"
    >
      <AccordionGroup >
        {questionItems.map((question, index) => (
          <Accordion
            title={question}
            id = {`question-${index}`}
            name="questions"
            isOpen={index === 0}
            key={index}
          >
            <p>Напишите нам в личные сообщения в Telegram или WhatsApp. Укажите ФИО, телефон, способ получения, адрес (если доставка), сорт и количество.</p>
          </Accordion>
        ))}
      </AccordionGroup>
    </Section>
  )
}

