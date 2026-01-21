import './CardList.scss'
import clsx from 'clsx'
import Card from "@/components/Card";

export default (props) => {
  const popularItems = [
    {
      title: 'Эдельвейс альпийский',
      description: 'Это всемирно известный, очень редкий и охраняемый цветок',
      image: '/src/assets/images/popular/2.jpg',
      price: 2000,
    },
    {
      title: 'Китайская роза',
      description: 'Это всемирно известный, очень редкий и охраняемый цветок',
      image: '/src/assets/images/popular/2.jpg',
      price: 1500
    },
    {
      title: 'Флокс шиловидный',
      description: 'Это всемирно известный, очень редкий и охраняемый цветок',
      image: '/src/assets/images/popular/2.jpg',
      price: 1800,
    },
  ]

  const {
    className,
    children
  } = props

  return (
    <div
      className={clsx(className, 'card-list')}
    >
      {popularItems.map((popularItem, index ) => (
        <Card
          {...popularItem}
          key={index}
        />
      ))}
    </div>
  )
}

