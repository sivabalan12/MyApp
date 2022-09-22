import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

let widthParent = width;
let heightParent = height;
let landscape = width > height;
if (landscape) {
  widthParent = height;
  heightParent = width;
}

let scale = heightParent / 844;
let scaleWidth = widthParent / 390;
let scaleHeight = heightParent / 844;
if (scale >= 1.5) scale = 1.5;

let isIPad = widthParent > 600;

export const DimensScale = number => number * scale;

export default {
  widthParent,
  heightParent,
  scale,
  scaleWidth,
  scaleHeight,
  isIPad,
};
