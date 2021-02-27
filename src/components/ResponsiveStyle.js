import { Dimensions, PixelRatio } from 'react-native';

let { width, height } = Dimensions.get('window');

const widthToDp = number => {
    let givenWidth = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel(width * givenWidth) / 100;
}
const heightToDp = number => {
    let givenHeight = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel(height * givenHeight) / 100;
}

// const listenToOrientationChanges = () => {
//     Dimensions.addEventListener((type: 'chnage', handler: newDimension) => {
//         console.log('heelo');
//         // width = newDimension.screen.width;
//         // height = newDimension.screen.height;
        
//         // console.log(`width = ${width} and height = ${height}`);
//         // ref.setState({
//         //     orientation: height > width ? 'portrait' : 'landscape';
//         // })
//     });
// }
// const removeOrientationChanges = () => {
//     Dimensions.removeEventListener((type: 'chnage'));
// }
// const getDynamicStyle = (portraitStyle, landscapeStyle) => {
//     const isPortrait = height > width;
//     if (isPortrait) {
//         return portraitStyle;
//     } else {
//         return landscapeStyle;
//     }
// }
export {
    widthToDp,
    heightToDp
}