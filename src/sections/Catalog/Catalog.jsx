import './Catalog.scss'
import clsx from 'clsx'
import Card from "@/components/Card";
import catalogGroups from "@/sections/Catalog/catalogGroups";
import Grid from "@/components/Grid";

export default (props) => {
  const catalogId="catalog-title"
  const {
    className,

  } = props

  return (
    <section
      className={clsx(className, 'catalog container')}
      aria-labelledby={catalogId}
    >
      <header className="catalog__header">
        <h1 className="catalog__title" id={catalogId}>
          Райский сад Сибири <br/> Каталог
        </h1>
      </header>
      <div className="catalog__body">
        <div className="catalog__actions">
          <button

            type="button"
          >
            КНОПКА ВСЕ
          </button>
          <button

            type="button"
          >
            КНОПКА ЦВЕТЫ
          </button>
          <button

            type="button"
          >
            КНОПКА КУСТАРНИКИ
          </button>
          <button

            type="button"
          >
            Садовый инвентарь
          </button>
        </div>
        <Grid columns={3}>
          {catalogGroups[0].items.map((catalogItem, index) => (
            <Card
              {...catalogItem}
              key={index}
            />
          ))}
        </Grid>

      </div>
    </section>
  )
}

