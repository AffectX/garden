import './Popular.scss'
import clsx from 'clsx'
import Section from "@/layouts/Section";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Grid from "@/components/Grid";
import popularItems from "@/sections/Popular/popularItems";

export default (props) => {

  const {
    className,
  } = props

  return (
    <Section
      className={clsx(className, 'popular')} title="Популярные товары"
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
      <Grid columns={3}>
        {popularItems.map((popularItem, index ) => (
          <Card
            {...popularItem}
            key={index}
          />
        ))}
      </Grid>
    </Section>
  )
}

