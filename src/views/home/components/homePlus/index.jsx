import React, { memo } from 'react'
import { PlusWrapper } from './style'
import SectionHeader from '../../../../components/SectionHeader'
import ScrollView from '@/base-ui/ScrollView'
import SectionFooter from '../../../../components/SectionFooter'
import RoomItem from '../../../../components/RoomItem'

const HomePlus = memo(props => {
  const { infoData } = props
  return (
    <PlusWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="room-list">
        <ScrollView>
          {infoData.list.map(item => {
            return <RoomItem itemData={item} itemWidth="20%" key={item.id} />
          })}
        </ScrollView>
      </div>
      <SectionFooter name="plus" />
    </PlusWrapper>
  )
})

export default HomePlus
