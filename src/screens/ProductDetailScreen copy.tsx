import React, {useRef} from 'react';
import {Text, View, Animated, StyleSheet, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import {AppFont} from '../theme/fonts/fonts';
import {NeutralColors, Opacity} from '../theme/colors';
import {Images} from '../../assets/images';
import {Icons} from './../../assets/svg/index';

const HEADER_HEIGHT_EXPANDED = 135;
const HEADER_HEIGHT_NARROWED = 90;

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const PROFILE_PICTURE_URI =
  'https://pbs.twimg.com/profile_images/975388677642715136/7Hw2MgQ2_400x400.jpg';

const PROFILE_BANNER_URI = 'https://picsum.photos/seed/picsum/200/300';

const ProductDetailScreen = () => {
  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;

  console.log('scrollY', scrollY);
  return (
    <View style={{flex: 1}}>
      {/* Name + tweets count */}

      {/* Banner */}
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: HEADER_HEIGHT_EXPANDED + HEADER_HEIGHT_NARROWED,
          transform: [
            {
              scale: scrollY.interpolate({
                inputRange: [-200, 0],
                outputRange: [5, 1],
                extrapolateLeft: 'extend',
                extrapolateRight: 'clamp',
              }),
            },
          ],
          backgroundColor: 'green',
        }}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            zIndex: 1,
            opacity: scrollY.interpolate({
              inputRange: [-50, 0, 50, 100],
              outputRange: [0, 0, 1, 1],
            }),
            backgroundColor: 'red',
          }}>
          <AppFont fontType="H2_HEADLINE" title="STEP 1" />
        </Animated.View>
        <View
          style={{
            width: '100%',
            height: 180,
            backgroundColor: NeutralColors.mid70,
          }}>
          <FastImage
            source={Images.banner_barilla}
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"></FastImage>
          <View
            style={{
              width: '100%',
              height: 180,
              position: 'absolute',
              backgroundColor: Opacity.black200,
            }}>
            <AnimatedTouchable
              onPress={() => console.log('test onPress')}
              style={{
                zIndex: 2,
                top: insets.top + 12,
                left: 20,
                backgroundColor: Opacity.tangaroa300,
                //   backgroundColor: '#fff',
                height: 32,
                width: 32,
                borderRadius: 16,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FastImage
                source={Icons.arrow_left}
                style={{width: 18, height: 18}}
                tintColor={'white'}
              />
            </AnimatedTouchable>
          </View>
        </View>
      </Animated.View>

      {/* scroll */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {y: scrollY},
              },
            },
          ],
          {listener: event => console.log(event.nativeEvent.contentOffset.y)},
          {useNativeDriver: true},
        )}
        style={{
          zIndex: 3,
          marginTop: HEADER_HEIGHT_NARROWED,
          paddingTop: HEADER_HEIGHT_EXPANDED,
        }}>
        <View
          style={{height: 800, backgroundColor: NeutralColors.light35}}></View>
      </Animated.ScrollView>
      {/* <View
        style={{
          width: '100%',
          height: 180,
          position: 'absolute',
          backgroundColor: Opacity.black200,
        }}>
        <AnimatedTouchable
          onPress={() => console.log('test onPress')}
          style={{
            zIndex: 2,
            top: insets.top + 12,
            left: 20,
            backgroundColor: Opacity.tangaroa300,
            //   backgroundColor: '#fff',
            height: 32,
            width: 32,
            borderRadius: 16,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FastImage
            source={Icons.arrow_left}
            style={{width: 18, height: 18}}
            tintColor={'white'}
          />
        </AnimatedTouchable>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'black',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: -3,
  },
  tweetsCount: {
    fontSize: 13,
  },
  tweet: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(255, 255, 255, 0.25)',
  },
});

export default ProductDetailScreen;
