import { TextStyle, ViewStyle } from "react-native";

export type FontTypes =
  | 'H1_HEADLINE'
  | 'H2_HEADLINE'
  | 'H3_HEADLINE'
  | 'SUBTITLE_2'
  | 'SUBTITLE_3'
  | 'BODYMED'
  | 'CALLOUTDEFREG'
  | 'CALLOUTDEFMED'
  | 'CAPTION1REG'
  | 'CAPTION1MED'
  | 'CAPTION2REG'
  | 'CAPTION2MED'
  | 'TITLE3MED';
//   BODY_1: 'BODY_1';
//   BODY_2: 'BODY_2';
//   BODY_3: 'BODY_3';
//   CAPTION: 'CAPTION';
//   BUTTON: 'BUTTON';
//   BUTTON_2: 'BUTTON_2';
//   CAPTION_1: 'CAPTION_1';
//   SETTINGS: 'SETTINGS';

// export interface FontInterface {
//   H1_HEADLINE: 'H1_HEADLINE';
//   H2_HEADLINE: 'H2_HEADLINE';
//   H3_HEADLINE: 'H3_HEADLINE';
//   SUBTITLE_2: 'SUBTITLE_2';
//   SUBTITLE_3: 'SUBTITLE_3';
//   BODY_1: 'BODY_1';
//   BODY_2: 'BODY_2';
//   BODY_3: 'BODY_3';
//   CAPTION: 'CAPTION';
//   BUTTON: 'BUTTON';
//   BUTTON_2: 'BUTTON_2';
//   CAPTION_1: 'CAPTION_1';
//   SETTINGS: 'SETTINGS';
// }

export interface AppFontInterface {
  fontType: FontTypes;
  title: string;
  color: string;
  style?: TextStyle
}
