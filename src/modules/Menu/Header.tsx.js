import CustomTabs from '../../elements/panel/CustomTabs';
import Banners from './Banners';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Sizes} from '../../helpers';

const Header = ({ activeTabIndex, setActiveTab, banners }) => {
  return (
    <>
      <CustomTabs
        values={['Menu', 'Favourites & Previous']}
        selectedIndex={activeTabIndex}
        onTabPress={setActiveTab}
        tabsStyles={styles.tabs}
      />

      <Banners banners={banners} />
    </>
  )
}

const styles = StyleSheet.create({
  tabs: {
    marginBottom: 8,
    marginHorizontal: Sizes.defaultHorizontalPadding,
  },
})

export default Header
