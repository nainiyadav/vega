import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { colorPropType, shapePropType, textColorsPropType } from '../../props'
import type { Colors, Shapes, TextColors } from '../../types'

export interface CBadgeProps extends HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  
  className?: string
  color?: Colors
  component?: string | ElementType
  position?: 'top-start' | 'top-end' | 'bottom-end' | 'bottom-start'
  shape?: Shapes
  size?: 'sm'
  textColor?: TextColors
}
export const Badge = forwardRef<HTMLDivElement | HTMLSpanElement, CBadgeProps>(
  (
    {
      children,
      className,
      color,
      component: Component = 'span',
      position,
      shape,
      size,
      textColor,
      ...rest
    },
    ref,
  ) => {
    return (
      <Component
        className={classNames(
          'badge',
          {
            [`bg-${color}`]: color,
            'position-absolute translate-middle': position,
            'top-0': position?.includes('top'),
            'top-100': position?.includes('bottom'),
            'start-100': position?.includes('end'),
            'start-0': position?.includes('start'),
            [`badge-${size}`]: size,
            [`text-${textColor}`]: textColor,
          },
          shape,
          className,
        )}
        {...rest}
        ref={ref}
      >
        {children}
      </Component>
    )
  },
)

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  component: PropTypes.string,
  position: PropTypes.oneOf(['top-start', 'top-end', 'bottom-end', 'bottom-start']),
  shape: shapePropType,
  size: PropTypes.oneOf(['sm']),
  textColor: textColorsPropType,
}

Badge.displayName = 'Badge'