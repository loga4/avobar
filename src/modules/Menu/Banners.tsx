import React, {useState} from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel'
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import {Sizes} from "../../helpers";
import {Colors} from "../../helpers/ui";

const { width: viewportWidth } = Dimensions.get('window')

const sliderWidth = viewportWidth
const slideWidth = sliderWidth


const renderSlides = ({ item }) => {
  console.log(item)
  return (
    <View style={styles.slideWrapper}>
      <Image
        style={styles.bannerImage}
        source={{ uri: item.image.url }}
      />
    </View>
  )
}

const Banners = ({ banners }) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const handleSnapToItem = (index: number) => setActiveSlide(index)

  console.log('banners', banners)
  if (!banners.length) return null;

  let _carousel

  const pageWidth = {width: slideWidth / banners.length - Sizes.defaultHorizontalPadding * 2 + 6}

  return (
    <>
      <Text style={styles.header}>SPECIALS</Text>
      <Carousel
        ref={(c) => { _carousel = c }}
        data={banners}
        renderItem={renderSlides}
        sliderWidth={sliderWidth}
        itemWidth={slideWidth}
        inactiveSlideScale={2}
        inactiveSlideOpacity={1}
        onSnapToItem={handleSnapToItem}
      />


      <Pagination
        dotsLength={banners.length}
        activeDotIndex={activeSlide}
        carouselRef={_carousel}
        tappableDots={!!_carousel}
        containerStyle={styles.paginationContainer}
        dotContainerStyle={styles.dotContainer}
        dotStyle={[styles.paginationDot,pageWidth]}
        dotColor={Colors.primary}
        inactiveDotColor={Colors.primary}
        inactiveDotScale={1}
        inactiveDotOpacity={0.24}
      />
    </>
  )
}

const styles = StyleSheet.create({
  paginationContainer: {
    paddingTop: 4,
    paddingBottom: 24
  },
  dotContainer: {
    margin: 0,
    padding: 0
  },
  paginationDot: {
    height: 2,
  },
  bannerImage: {
    borderRadius: 10,
    width: slideWidth - Sizes.defaultHorizontalPadding * 2,
    height: 200
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: Sizes.defaultHorizontalPadding,
    backgroundColor: Colors.homeBackground,
    paddingBottom: 10,
  },
  slideWrapper: {
    paddingHorizontal: Sizes.defaultHorizontalPadding
  }
})

export default Banners;

