import './InstructionsGroup.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    columns = 1,
    children,
    isOrderedList = true,
  } = props

  const ListTag = isOrderedList ? 'ol' : 'ul'

  return (
    <ListTag
      className={clsx(className, 'instructions-group', {
        [`instructions-group--${columns}-columns`]: columns > 1,
        'instructions-group--has-counter': isOrderedList,
      })}
    >
      {children.map(({title, description}, index) => (
        <li className="instructions-group__item" key={index}>
          <div className="instructions-group__info">
            <div className="instructions-group__item-title">
              {title}
            </div>
            {description && (
              <div className="instructions-group__item-description">
                <p>{description}</p>
              </div>
            )}
          </div>

        </li>
      ))}
    </ListTag>
  )
}

