import React from 'react';
import Modal from "react-native-modal"
import {StyleSheet, View} from "react-native";
import {Sizes} from "../../helpers";
import {Colors} from "../../helpers/ui";

const CategoriesModal = ({ isVisible,onModalClose,children }) => {

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onModalClose}
      onSwipeComplete={onModalClose}
      swipeDirection="down"
      backdropOpacity={0.5}
      style={styles.modalDialog}
      backdropTransitionOutTiming={0}
    >
      <View style={styles.modalContent}>
        <View style={styles.modalTail} />
        <View style={styles.modalContent}>
          {children}
        </View>
      </View>

    </Modal>
  )
}
const styles = StyleSheet.create({
  modalDialog: {
    justifyContent: 'flex-end',
    margin: 0,
    // paddingHorizontal: Sizes.defaultModalPadding,
    // paddingBottom: 34
  },
  modalContent: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    paddingHorizontal: Sizes.defaultHorizontalPadding,
    paddingTop: 12,
    paddingBottom: 24,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modalTail: {
    height: 4,
    width: 40,
    backgroundColor: Colors.gray400,
    alignSelf: 'center',
    marginBottom: 16
  },
})

export default CategoriesModal
