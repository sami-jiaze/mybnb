import React, { memo } from 'react'
import { LongforWrapper } from './style'
import SectionHeader from '../../../../components/sectionHeader'
import LongforItem from '../../../../components/LongforItem'
import ScrollView from '../../../../base-ui/ScrollView'
const HomeLongfor = memo(props => {
  const { infoData } = props
  return (
    <LongforWrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map(item => {
            return <LongforItem itemData={item} key={item.city}></LongforItem>
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  )
})

export default HomeLongfor
