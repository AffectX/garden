import './Grid.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    columns = 1,
    children,
  } = props

  return (
    <ul
      className={clsx(className, 'grid', {
        [`grid--${columns}`]: columns > 1,
      })}
    >
      {children.map((child, index) => (
        <li
          className="grid__item"
          key={index}
        >
          {child}
        </li>
      ))}
    </ul>
  )
}

