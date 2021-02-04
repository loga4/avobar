import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Colors} from '../../helpers/ui';
import CategoriesModal from './CategoriesModal';

const ICON_TEXT = require('../../images/icons/align-left.png');

const Item = ({item, onPress, onModalClose}) => (
  <TouchableOpacity
    style={styles.itemWrapper}
    onPress={() => {
      onPress();
      onModalClose();
    }}>
    <Text style={styles.title}>{item.name}</Text>
  </TouchableOpacity>
);

const Actions = ({categories, onPress}) => {
  const [isVisible, setIsVisible] = useState(false);
  const onModalOpen = () => setIsVisible(true);
  const onModalClose = () => setIsVisible(false);

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onModalOpen}>
        <Image source={ICON_TEXT} style={styles.icon__m} />
      </TouchableOpacity>

      <CategoriesModal isVisible={isVisible} onModalClose={onModalClose}>
        {categories.map((item, index) => (
          <Item
            item={item}
            key={item.id}
            onPress={() => onPress(index)}
            onModalClose={onModalClose}
          />
        ))}
      </CategoriesModal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    right: 30,
    zIndex: 100,
    backgroundColor: Colors.white,
    width: 50,
    height: 50,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icon__m: {
    width: 18,
    height: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  itemWrapper: {
    marginBottom: 16,
  },
});

export default Actions;
