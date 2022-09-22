import {StyleSheet, Text, View} from 'react-native';
import {Dimens} from '../dimens';
import {DimensScale} from '../dimensions';
import {AppFontInterface} from './types';
export const Fonts = {
  primary: {
    REGULAR: 'Manrope-Regular',
    LIGHT: 'Manrope-Light',
    MEDIUM: 'Manrope-Medium',
    BOLD: 'Manrope-Bold',
  },
};

export const AppFont = ({fontType, title, color, style}: AppFontInterface) => {
  const renderFonts = () => {
    let fontstyle = {};
    switch (fontType) {
      case 'H1_HEADLINE':
        fontstyle = FontStyles.headline1;
        break;
      case 'BODYMED':
        fontstyle = FontStyles.body_def_med;
        break;
      case 'CALLOUTDEFREG':
        fontstyle = FontStyles.callout_def_reg;
        break;
      case 'CALLOUTDEFMED':
        fontstyle = FontStyles.callout_def_med;
        break;
      case 'CAPTION1REG':
        fontstyle = FontStyles.caption_1_def_reg;
        break;
      case 'CAPTION1MED':
        fontstyle = FontStyles.caption_1_def_med;
        break;
      case 'CAPTION2REG':
        fontstyle = FontStyles.caption_2_reg;
        break;
      case 'CAPTION2MED':
        fontstyle = FontStyles.caption_2_med;
        break;
      case 'TITLE3MED':
        fontstyle = FontStyles.title_3_med;
        break;
    }

    return <Text style={[fontstyle, {color: color}, style]}>{title}</Text>;
  };

  return <View>{renderFonts()}</View>;
};

export const FontStyles = StyleSheet.create({
  headline1: {
    fontFamily: Fonts.primary.BOLD,
    fontSize: Dimens.TEXT_HEADING1,
    lineHeight: DimensScale(44.2),
  },
  body_def_med: {
    fontFamily: Fonts.primary.MEDIUM,
    fontSize: 17,
    lineHeight: 24,
  },
  callout_def_reg: {
    fontFamily: Fonts.primary.REGULAR,
    fontSize: 16,
    lineHeight: 22,
  },
  callout_def_med: {
    fontFamily: Fonts.primary.MEDIUM,
    fontSize: 16,
    lineHeight: 22,
  },
  caption_1_def_reg: {
    fontFamily: Fonts.primary.REGULAR,
    fontSize: 14,
    lineHeight: 21,
  },
  caption_1_def_med: {
    fontFamily: Fonts.primary.MEDIUM,
    fontSize: 14,
    lineHeight: 21,
  },
  caption_2_reg: {
    fontFamily: Fonts.primary.REGULAR,
    fontSize: 12,
    lineHeight: 18,
  },
  caption_2_med: {
    fontFamily: Fonts.primary.MEDIUM,
    fontSize: 12,
    lineHeight: 18,
  },
  title_3_med: {
    fontFamily: Fonts.primary.MEDIUM,
    fontSize: 20,
    lineHeight: 28,
  },
  // [FontTypes.H3_HEADLINE]: Platform.select({
  //   ios: {
  //     fontFamily: Fonts.primary.MEDIUM,
  //     fontSize: Dimens.TEXT_HEADING3,
  //     lineHeight: DimensScale(27.6),
  //     letterSpacing: 0.0075,
  //   },
  //   android: {
  //     fontFamily: Fonts.primary.MEDIUM,
  //     fontSize: Dimens.TEXT_HEADING3,
  //     lineHeight: DimensScale(27.6),
  //   },
  // }),
  // [FontTypes.SUBTITLE_2]: Platform.select({
  //   ios: {
  //     fontFamily: Fonts.primary.MEDIUM,
  //     fontSize: Dimens.TEXT_LARGE,
  //     lineHeight: DimensScale(24),
  //     letterSpacing: 0.15,
  //   },
  //   android: {
  //     fontFamily: Fonts.primary.MEDIUM,
  //     fontSize: Dimens.TEXT_LARGE,
  //     lineHeight: DimensScale(24),
  //   },
  // }),
  // [FontTypes.SUBTITLE_3]: Platform.select({
  //   ios: {
  //     fontFamily: Fonts.primary.MEDIUM,
  //     fontSize: Dimens.TEXT_MEDIUM,
  //     lineHeight: DimensScale(18.48),
  //     letterSpacing: 0.05,
  //   },
  //   android: {
  //     fontFamily: Fonts.primary.MEDIUM,
  //     fontSize: Dimens.TEXT_MEDIUM,
  //     lineHeight: DimensScale(20),
  //   },
  // }),
  // [FontTypes.BODY_1]: Platform.select({
  //   ios: {
  //     fontFamily: Fonts.primary.REGULAR,
  //     fontSize: Dimens.TEXT_LARGE,
  //     lineHeight: DimensScale(24),
  //     letterSpacing: 0.168,
  //   },
  //   android: {
  //     fontFamily: Fonts.primary.REGULAR,
  //     fontSize: Dimens.TEXT_LARGE,
  //     lineHeight: DimensScale(24),
  //   },
  // }),
  // [FontTypes.BODY_2]: Platform.select({
  //   ios: {
  //     fontFamily: Fonts.primary.REGULAR,
  //     fontSize: Dimens.TEXT_MEDIUM,
  //     lineHeight: DimensScale(28),
  //     letterSpacing: 0.168,
  //   },
  //   android: {
  //     fontFamily: Fonts.primary.REGULAR,
  //     fontSize: Dimens.TEXT_MEDIUM,
  //     lineHeight: DimensScale(28),
  //     letterSpacing: 0.168,
  //   },
  // }),
  // [FontTypes.BODY_3]: Platform.select({
  //   ios: {
  //     fontFamily: Fonts.primary.REGULAR,
  //     fontSize: Dimens.TEXT_MEDIUM,
  //     lineHeight: DimensScale(20),
  //     letterSpacing: 0.168,
  //   },
  //   android: {
  //     fontFamily: Fonts.primary.REGULAR,
  //     fontSize: Dimens.TEXT_MEDIUM,
  //     lineHeight: DimensScale(20),
  //     letterSpacing: 0.168,
  //   },
  // }),
  // [FontTypes.CAPTION]: Platform.select({
  //   ios: {
  //     fontFamily: Fonts.primary.REGULAR,
  //     fontSize: Dimens.TEXT_SMALL,
  //     lineHeight: DimensScale(16.08),
  //     letterSpacing: 0.03,
  //   },
  //   android: {
  //     fontFamily: Fonts.primary.REGULAR,
  //     fontSize: Dimens.TEXT_SMALL,
  //     lineHeight: DimensScale(16.08),
  //   },
  // }),
  // [FontTypes.BUTTON]: Platform.select({
  //   ios: {
  //     fontFamily: Fonts.primary.MEDIUM,
  //     fontSize: Dimens.TEXT_LARGE,
  //     lineHeight: DimensScale(24),
  //     letterSpacing: 0.05,
  //   },
  //   android: {
  //     fontFamily: Fonts.primary.MEDIUM,
  //     fontSize: Dimens.TEXT_LARGE,
  //     lineHeight: DimensScale(20),
  //   },
  // }),
  // [FontTypes.BUTTON_2]: Platform.select({
  //   ios: {
  //     fontFamily: Fonts.primary.MEDIUM,
  //     fontSize: Dimens.TEXT_MEDIUM,
  //     lineHeight: DimensScale(21),
  //     letterSpacing: 0.05,
  //   },
  //   android: {
  //     fontFamily: Fonts.primary.MEDIUM,
  //     fontSize: Dimens.TEXT_MEDIUM,
  //     lineHeight: DimensScale(21),
  //   },
  // }),
  // [FontTypes.CAPTION_1]: Platform.select({
  //   ios: {
  //     fontFamily: Fonts.primary.MEDIUM,
  //     fontSize: Dimens.TEXT_EXTRA_SMALL,
  //     lineHeight: DimensScale(15),
  //     letterSpacing: 0.05,
  //   },
  //   android: {
  //     fontFamily: Fonts.primary.MEDIUM,
  //     fontSize: Dimens.TEXT_EXTRA_SMALL,
  //     lineHeight: DimensScale(18),
  //   },
  // }),
  // [FontTypes.SETTINGS]: Platform.select({
  //   ios: {
  //     fontFamily: Fonts.primary.REGULAR,
  //     fontSize: Dimens.TEXT_LARGE,
  //     lineHeight: DimensScale(15),
  //     letterSpacing: 0.05,
  //   },
  //   android: {
  //     fontFamily: Fonts.primary.REGULAR,
  //     fontSize: Dimens.TEXT_LARGE,
  //     lineHeight: DimensScale(18),
  //   },
  // }),
});
