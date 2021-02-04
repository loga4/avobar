import React, {useEffect, useState} from 'react';
import {SectionList, StyleSheet, Text, View, Image } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {MENU_LOAD} from '../../store/menu/actions';
import {Colors} from "../../helpers/ui";
import {deviceWidth, Sizes} from "../../helpers";
import PanelHeader from "../../elements/panel/PanelHeader";
import Actions from "../../modules/Menu/Actions";
import Header from "../../modules/Menu/Header.tsx";

const panelWidth = (deviceWidth - 2 * Sizes.defaultHorizontalPadding -10) /2
const ICON_USER = require('../../images/icons/user.png')

const ItemHeader = ({ section }) => (
  <Text style={styles.header}>{section.category.name}</Text>
)

const Item = ({ item }) => (
  <View style={styles.item}>
    <Image source={{ uri: item.photo.big_thumb.url }} style={styles.promoImage} />
    <Text style={styles.promoName}>{item.name}</Text>
    <Text style={styles.promoPrice}>£{item.price}</Text>
  </View>
)

const Section = ({ item }) => (
  <View style={styles.sectionContainer}>
    {item.map((val) => (
      <Item item={val} key={val.id} />
    ))}
  </View>
)

const MenuScreen = () => {
  let section;

  const dispatch = useDispatch();
  const [activeTabIndex, setActiveTab] = useState(0)

  useEffect(() => {
    dispatch({type: MENU_LOAD});
  }, []);

  const { items, categories, banners } = useSelector(({ menu }) => ({
    items: menu.items,
    categories: menu.categories,
    banners: menu.banners,
  }))

  const onPress = (index) => {
    const params = {
      itemIndex: 0,
      sectionIndex: index,
    }
    section.scrollToLocation(params)
  }

  return (
    <View style={styles.container}>
      <PanelHeader
        title={'Avtobar 2'}
        longArrow
        style={styles.header}
      >
        <Image source={ICON_USER} style={styles.icon__m} />
      </PanelHeader>


      <SectionList
        ref={ c => section = c}
        ListHeaderComponent={<Header banners={banners} activeTabIndex={activeTabIndex} setActiveTab={setActiveTab} />}
        sections={items}
        keyExtractor={(item, index) => item + index}
        renderItem={Section}
        renderSectionHeader={ItemHeader}
        contentContainerStyle={styles.contentContainerStyle}
        stickySectionHeadersEnabled={true}
      />

      <Actions categories={categories} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.homeBackground,
    flex: 1,
  },
  item: {
    width: panelWidth,
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginVertical: 8,
  },
  header: {
    fontSize: 20,
    fontWeight:'bold',
    marginLeft: Sizes.defaultHorizontalPadding,
    backgroundColor: Colors.homeBackground,
    paddingBottom: 10
  },
  title: {
    fontSize: 24,
  },
  promoImage: {
    borderRadius: 10,
    width: panelWidth,
    height: panelWidth
  },
  promoName: {
    paddingHorizontal: 16,
    marginVertical: 10,
    color: Colors.gray900
  },
  promoPrice:{
    textAlign: 'right',
    fontWeight: 'bold',
    marginRight: 16,
    marginBottom: 16
  },
  sectionContainer: {
    flexDirection: 'row', justifyContent: 'space-between',
    paddingHorizontal: Sizes.defaultHorizontalPadding
  },
  icon__m: {
    width: 18,
    height: 18
  },
  contentContainerStyle: {
    paddingBottom: 100
  }
});

export default MenuScreen;
