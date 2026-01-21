import './Hero.scss'
import {Image} from "minista";
import Button from "@/components/Button";

export default () => {
  const titleId = 'hero-title'

  return (
    <section className="hero container" aria-labelledby={titleId}>
      <div className="hero__inner ">
        <div className="hero__body ">

          <h1 className="hero__title" id={titleId}>
            Райский сад Сибири <br/>
            Растения, грунты и всё для ухода
          </h1>
          <div className="hero__description">
            <p>Цветы, кустарники, деревья, садовый инвентарь и грунты — всё в одном месте. Выращиваем, консультируем и доставляем по Иркутской области.</p>
          </div>
          <div className="hero__body-actions">
            <Button
              className="hero__button"
              href="/"
              label="Каталог"
            >

            </Button>
            <Button
              className="hero__button"
              href="/"
              label="Получить консультацию"
            >
            </Button>
          </div>

        </div>
        <div className="hero__images">
          <Image  className="hero__image" src="/src/assets/images/Logo.jpg"/>
        </div>
      </div>


    </section>
  )
}
