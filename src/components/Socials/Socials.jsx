import './Socials.scss'
import clsx from 'clsx'
import Button from "@/components/Button";

export default (props) => {
  const {
    className,
    links = [],
  } = props

  return (
    <div
      className={clsx(className, 'soc1als')}
    >
      <ul className="soc1als__list">
        {links.map(({label, iconName}, index) => (
          <li className="socials__item" key={index}>
            <Button
              className="socials__link"
              href="/"
              target="_blank"
              label="Telegram"
              isLabelHidden
              hasFillIcon
              iconName={iconName}
              mode="transparent"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

