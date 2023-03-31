import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  size?: 'sm' | 'lg'
  vertical?: boolean
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, className, size, vertical, ...rest }, ref) => {
    return (
      <div
        className={classNames(
          vertical ? 'btn-group-vertical' : 'btn-group',
          { [`btn-group-${size}`]: size },
          className,
        )}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    )
  },
)

ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  vertical: PropTypes.bool,
}

ButtonGroup.displayName = 'ButtonGroup'