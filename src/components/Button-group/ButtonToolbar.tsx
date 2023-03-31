import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface ButtonToolbarProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const ButtonToolbar = forwardRef<HTMLDivElement, ButtonToolbarProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={classNames('btn-toolbar', className)} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

ButtonToolbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

ButtonToolbar.displayName = 'ButtonToolbar'