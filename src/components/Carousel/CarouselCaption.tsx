import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CarouselCaptionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const CarouselCaption = forwardRef<HTMLDivElement, CarouselCaptionProps>(
  ({ className, ...rest }, ref) => {
    return <div className={classNames('carousel-caption', className)} {...rest} ref={ref} />
  },
)

CarouselCaption.propTypes = {
  className: PropTypes.string,
}

CarouselCaption.displayName = 'CarouselCaption'