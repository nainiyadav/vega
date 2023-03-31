import React, { AllHTMLAttributes, ElementType, forwardRef, MouseEvent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface LinkProps extends AllHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {

  active?: boolean
  className?: string
  component?: string | ElementType
  disabled?: boolean
  href?: string
}

export const Link = forwardRef<HTMLButtonElement | HTMLAnchorElement, LinkProps>(
  ({ children, active, className, component: Component = 'a', disabled, ...rest }, ref) => {
    return (
      <Component
        className={classNames(className, { active, disabled })}
        {...(active && { 'aria-current': 'page' })}
        {...(Component === 'a' && disabled && { 'aria-disabled': true, tabIndex: -1 })}
        {...((Component === 'a' || Component === 'button') && {
          onClick: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
            event.preventDefault
            !disabled && rest.onClick && rest.onClick(event)
          },
        })}
        disabled={disabled}
        {...rest}
        ref={ref}
      >
        {children}
      </Component>
    )
  },
)

Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
}

Link.displayName = 'Link'