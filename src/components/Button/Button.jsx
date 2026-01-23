import './Button.scss'
import clsx from 'clsx'
import Icon from "@/components/Icon";

export default (props) => {
  const {
    className,
    type = 'button',
    href,
    target,
    label,
    isLabelHidden = false,
    iconName,
    // 'before'| 'after'
    iconPosition ='before',
    // ''(default) | 'red' | 'transparent'
    mode = '',
    hasFillIcon
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkAttributes = { href, target }
  const buttonAttributes = { type }
  const attributesByTag = isLink ? linkAttributes : buttonAttributes
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon
      className="button__icon"
      name={iconName}
      hasFill={hasFillIcon}
    />
  )


  return (
    <Component
      className={clsx('button', className, {
      [`button--${mode}`]: mode,
    })}
      title={title}
      aria-label={title}
      {...attributesByTag}
    >
        {iconPosition === "before" && iconComponent}
        {!isLabelHidden && (
          <span className="button__label">{label}</span>
        )}
      {iconPosition === "after" && iconComponent}
    </Component>
  )
}
