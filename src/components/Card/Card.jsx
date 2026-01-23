import './Card.scss'
import clsx from 'clsx'
import {Image} from "minista";
import Button from "@/components/Button";

export default (props) => {
  const {
    className,
    title,
    description,
    price,
    image,
    manufacturer,
    parameters,
  } = props

  return (
    <article
      className={clsx(className, 'card',)}
    >

      <div className="card__images">
        <Image className="card__image" alt={title} src={image}/>
      </div>
      <div className="card__body">
          <h3 className="card__title">{title}</h3>
          <div className="card__info">
            {manufacturer && (
              <div className="card__manufacturer">{manufacturer}</div>
            )}
            {parameters && (
              <div className="card__parameters">
                {parameters}
              </div>
            )}
            <div className="card__description">
              <p>{description}</p>
            </div>
          </div>


      </div>
      <div className="card__actions">
        <Button
          className="card__button"
          label="Оформить заказ"
          href="/"
        >

        </Button>
        <div className="card__price">
          <p>{`${price} рублей`}</p>
        </div>
      </div>
    </article>
  )
}

