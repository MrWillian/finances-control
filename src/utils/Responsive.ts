import { useState, useEffect } from 'react';
import { Dimensions, PixelRatio } from "react-native";

let { width, height } = Dimensions.get('window');

const widthToDp = (value: any) => {
  let givenWidth = typeof value === 'number' ? value : parseFloat(value);
  return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
}

const heightToDp = (value: any) => {
  let givenHeight = typeof value === 'number' ? value : parseFloat(value);
  return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
}

const listenToOrientationChanges = (setOrientation: any) => {
  Dimensions.addEventListener('change', newDimension => {
    width = newDimension.screen.width;
    height = newDimension.screen.height;
    setOrientation(getOrientation());
  });
}

const getDynamicStyles = (portraitStyle: any, landscapeStyle: any) => {
  if (getOrientation() == 'portrait') return portraitStyle;
  
  return landscapeStyle;
}

const useOrientation = () => {
  const [orientation, setOrientation] = useState(
    isPortrait() ? 'portrait' : 'landscape'
  );

  useEffect(() => {
    let isMounted = true;
    const callback = () => {
      if (isMounted) setOrientation(isPortrait() ? 'portrait' : 'landscape');
    }

    Dimensions.addEventListener('change', callback);

    return () => { isMounted = false; } //Dimensions.removeEventListener('change', callback); };
  }, []);

  return orientation;
}

const isPortrait = () => getOrientation() === 'portrait';

const getOrientation = () => height > width ? 'portrait' : 'landscape';

export { widthToDp, heightToDp, useOrientation };
