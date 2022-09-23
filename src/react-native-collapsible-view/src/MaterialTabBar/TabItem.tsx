import React, {useMemo} from 'react';
import {StyleSheet, Pressable, Platform} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {Icons} from '../../../../assets/svg';
import {AppFont} from '../../../theme/fonts/fonts';
import { useFocusedTab } from '../hooks';

import {TabName} from '../types';
import {MaterialTabItemProps} from './types';

export const TABBAR_HEIGHT = 60;
const DEFAULT_COLOR = 'rgba(0, 0, 0, 1)';

/**
 * Any additional props are passed to the pressable component.
 */
export const MaterialTabItem = <T extends TabName = string>(
  props: MaterialTabItemProps<T>,
): React.ReactElement => {
  const {
    name,
    index,
    onPress,
    onLayout,
    scrollEnabled,
    indexDecimal,
    label,
    icon,
    style,
    labelStyle,
    activeColor = DEFAULT_COLOR,
    inactiveColor = DEFAULT_COLOR,
    inactiveOpacity = 0.7,
    pressColor = '#DDDDDD',
    pressOpacity = Platform.OS === 'ios' ? 0.2 : 1,
    ...rest
  } = props;
  const focusedTab = useFocusedTab()


  const stylez = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        indexDecimal.value,
        [index - 1, index, index + 1],
        [inactiveOpacity, 1, inactiveOpacity],
        Animated.Extrapolate.CLAMP,
      ),
      color:
        Math.abs(index - indexDecimal.value) < 0.5
          ? activeColor
          : inactiveColor,
    };
  });

  const renderedLabel = useMemo(() => {
    if (typeof label === 'string') {
      return (
        <>
          <Animated.View
            style={[
              {width: 22, height: 22, marginTop: -6, marginBottom: 2},
              // stylez,
            ]}>
            <FastImage
              source={icon}
              style={{width: '100%', height: '100%'}}
              tintColor={focusedTab === label ? activeColor : inactiveColor}
            />
          </Animated.View>
          {/* <Animated.Text style={[styles.label, stylez, labelStyle]}>
          {label}
        </Animated.Text> */}
          <Animated.View style={[styles.label, labelStyle]}>
            <AppFont
              fontType="CAPTION2MED"
              title={label}
              color={focusedTab === label ? activeColor : inactiveColor}
            />
          </Animated.View>
        </>
      );
    }

    return label(props);
  }, [label, labelStyle, props, stylez]);

  return (
    <Pressable
      onLayout={onLayout}
      style={({pressed}) => [
        {opacity: pressed ? pressOpacity : 1},
        !scrollEnabled && styles.grow,
        styles.item,
        style,
      ]}
      onPress={() => onPress(name)}
      android_ripple={{
        borderless: true,
        color: pressColor,
      }}
      {...rest}>
      {renderedLabel}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  grow: {
    flex: 1,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: TABBAR_HEIGHT,
  },
  label: {
    margin: 4,
  },
});
