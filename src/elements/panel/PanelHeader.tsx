import React, { CSSProperties } from 'react'
import {
  StyleSheet,
  View,
  Text, Image
} from 'react-native'


import {getPassedStyles, safeTop} from '../../helpers'
import {Colors} from "../../helpers/ui";

const ICON_ARROW_DOWN = require('../../images/icons/arrow_down_short.png')

type Props = {
  title?: string,
  onBackPress?: () => void,
  style?: CSSProperties,
}

const PanelHeader: React.FC<Props> = (props) => {
  const {
    title,
    children,
    style,
  } = props

  const passedStyles = getPassedStyles(style)

  return (
    <View style={[styles.container, { ...passedStyles }]}>
      <View style={styles.content}>
        <View style={styles.leftBlock}>
        </View>

        <View style={styles.centerBlock}>
          {title ? (
            <Text
              style={styles.title}
              numberOfLines={1}
            >
              {title}
            </Text>
          ): null}
          <Image source={ICON_ARROW_DOWN} style={styles.arrow}/>
        </View>


        <View style={styles.rightBlock}>
          {children}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: safeTop
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    paddingHorizontal: 24,
    color: Colors.black,
    justifyContent: 'space-between',
  },
  leftBlock: {
    width: 72,
    flexBasis: '33%',
  },
  centerBlock: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
    textAlign: 'center',
    letterSpacing: -0.52,
  },
  rightBlock: {
    width: 72,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  arrow: {
    marginLeft: 10,
    marginTop:4
  }
})

export default PanelHeader
