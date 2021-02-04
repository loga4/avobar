import React, { CSSProperties } from 'react'
import { StyleSheet } from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab'

import { getPassedStyles } from '../../helpers'
import {Colors} from "../../helpers/ui";

type Props = {
  values: string[],
  selectedIndex: number,
  onTabPress: (index: number) => void,
  containerStyles?: CSSProperties,
  tabsStyles?: CSSProperties
}

const CustomTabs: React.FC<Props> = (props) => {
  const {
    values,
    selectedIndex,
    onTabPress,
    tabsStyles
  } = props

  const tabsPassedStyles = getPassedStyles(tabsStyles)

  return (
    <SegmentedControlTab
      values={values}
      selectedIndex={selectedIndex}
      onTabPress={onTabPress}
      tabsContainerStyle={[styles.tabsContainer, { ...tabsPassedStyles }]}
      tabStyle={styles.tab}
      activeTabStyle={styles.activeTab}
      activeTabTextStyle={styles.activeTabText}
      tabTextStyle={styles.tabText}
    />
  )
}

const styles = StyleSheet.create({
  tabsContainer: {
    padding: 3,
    backgroundColor: Colors.gray300,
    borderRadius: 10,
    height: 40
  },
  tab: {
    borderWidth: 0,
    borderRadius: 8,
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  },
  tabText: {
    color: Colors.black
  },
  activeTab: {
    borderRadius: 8,
    backgroundColor: '#fff',
    color: Colors.black,
    borderWidth: 0,
    borderColor: 'transparent'
  },
  activeTabText: {
    color: Colors.black
  }
})

export default CustomTabs
