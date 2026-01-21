import './Reviews.scss'
import clsx from 'clsx'
import Section from "@/layouts/Section";
import Review from "@/components/Review";
import ReviewsGroup from "@/components/ReviewsGroup";

export default (props) => {
  const {
    className,
  } = props


  return (
    <Section
      className={clsx(className, 'reviews')}
      title="Отзывы наших покупателей"
      titleId="reviews-title"
      description="Нам приятно получать отзывы от клиентов.Благодарим вас за ваш выбор и доверие. "
    >
      <ReviewsGroup/>
    </Section>
  )
}

