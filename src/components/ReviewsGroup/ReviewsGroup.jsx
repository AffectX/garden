import './ReviewsGroup.scss'
import clsx from 'clsx'
import Review from "@/components/Review";
import Section from "@/layouts/Section";

export default (props) => {
  const {
    className,
  } = props

  const reviewsItems = [
    {
      author: 'Юрий',
      content: 'Хочу выразить огромную благодарность команде! Заказывала букет для мамы на юбилей, находясь в другом городе. Очень переживала за свежесть и доставку. Но все прошло просто идеально!',
      product: 'Букет роз',
    },
    {
      author: 'Евгений',
      content: 'Хочу выразить огромную благодарность команде! Заказывала букет для мамы на юбилей, находясь в другом городе. Очень переживала за свежесть и доставку. Но все прошло просто идеально!',
      product: 'Букет роз',
    },
    {
      author: 'Елена',
      content: 'Хочу выразить огромную благодарность команде! Заказывала букет для мамы на юбилей, находясь в другом городе. Очень переживала за свежесть и доставку. Но все прошло просто идеально!',
      product: 'Букет роз',
    },
  ]


  return (
    <div
      className={clsx(className, 'reviews-group')}
    >
      {reviewsItems.map((review, index) => (
        <Review
          {...review}
          key={index}
        />
      ))}
    </div>
  )
}

