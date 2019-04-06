import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import style from './style'
import PropTypes from 'prop-types'

const HTag = props => {
  const { level, children, className } = props
  const Tag = `h${level}`
  const css = classNames('title', className)
  return (
    <Tag className={css} {...props}>
      {children}
    </Tag>
  )
}

HTag.propTypes = {
  level: PropTypes.number,
  children: PropTypes.any,
  className: PropTypes.string,
}

HTag.defaultProps = {
  level: 1,
  children: 'heading',
  className: 'title',
}

const H = styled(HTag)`
  ${style}
`

export default H
