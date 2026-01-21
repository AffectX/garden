import './Popular.scss'
import clsx from 'clsx'
import Section from "@/layouts/Section";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CardList from "@/components/CardList";

export default (props) => {


  const {
    className,
  } = props

  return (
    <div
      className={clsx(className, 'popular')}
    >
      <Section
        title="Популярные товары"
        titleId="popular-title"
        description = "Самые востребованные растения и товары, которые выбирают наши покупатели"
        actions = {(
          <div>
            <Button
              className="popular__button"
              href="/"
              label="Смотреть товары"
            >
            </Button>
          </div>

        )}
      >
        <CardList>

        </CardList>



      </Section>
    </div>
  )
}

