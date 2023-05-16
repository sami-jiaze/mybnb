import PropTypes from "prop-types"
import React, { memo } from 'react'
import { SectionWrapper } from './style'

const SectionHeader = memo((props) => {
  const { title, subtitle = "默认数据" } = props
  return (
    <SectionWrapper>
      <h2 className="title">{title}</h2>
      <div className="subtitle">{subtitle}</div>
    </SectionWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default SectionHeader