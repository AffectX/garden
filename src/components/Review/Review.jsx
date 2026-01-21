import './Review.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    author,
    content,
    product
  } = props

  return (
    <article
      className={clsx(className, 'review')}
    >
      <header className="review__header">
        <h3 className="review__author h3">{author}</h3>
      </header>
      <div className="review__content">
        <p>{content}</p>
      </div>
      <div className="review__product">
        <p className="review__quantity">Товары в заказе:</p>
        <p>{product}</p>
      </div>

    </article>
  )
}

