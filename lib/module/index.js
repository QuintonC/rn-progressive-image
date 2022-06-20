// Packages
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, runOnJS } from 'react-native-reanimated'; // Components

import { ShimmerEffect } from './components/index'; // Style

import BaseStyle from './style'; // Constants

import { athensGray, iron } from './constants'; // Props

const ProgressiveImage = _ref => {
  var _props$blurRadius, _props$shimmerColors, _props$shimmerDuratio;

  let {
    placeholder = 'Shimmer',
    source,
    style,
    inEasing = Easing.bezier(0.65, 0, 0.35, 1),
    outEasing = Easing.bezier(0.65, 0, 0.35, 1),
    animationDuration = 350,
    ...props
  } = _ref;
  const [loaded, setLoaded] = useState(false);
  const [placeholderShouldRender, setPlaceholderShouldRender] = useState(true);
  const imageOpacity = useSharedValue(0); // This is used for both the shimmerPlaceholder and the small image

  const placeholderOpacity = useSharedValue(1);
  const largeStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(imageOpacity.value, {
        duration: animationDuration,
        easing: inEasing
      })
    };
  });
  const placeholderStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(placeholderOpacity.value, {
        duration: animationDuration,
        easing: outEasing
      }, () => loaded && runOnJS(setPlaceholderShouldRender)(false) // This component no longer needs to be rendered, so we can dispose of it here.
      )
    };
  });
  useEffect(() => {
    if (loaded) {
      imageOpacity.value = 1;
      const timeout = setTimeout(() => {
        placeholderOpacity.value = 0;
      }, // Give this a slight delay so that we don't run
      // into issues with flashes of empty content
      animationDuration * 0.66); // Cleanup function

      return () => clearTimeout(timeout);
    }

    return;
  }, [loaded]);
  return /*#__PURE__*/React.createElement(View, {
    style: [BaseStyle.container, style]
  }, placeholderShouldRender ? /*#__PURE__*/React.createElement(Animated.View, {
    style: [BaseStyle.image, placeholderStyle]
  }, placeholder === 'Thumbnail' ? /*#__PURE__*/React.createElement(Animated.Image, {
    style: { ...StyleSheet.absoluteFillObject
    },
    blurRadius: (_props$blurRadius = props.blurRadius) !== null && _props$blurRadius !== void 0 ? _props$blurRadius : 3,
    source: props.thumbnailSource
  }) : placeholder === 'Shimmer' ? /*#__PURE__*/React.createElement(ShimmerEffect, {
    colors: (_props$shimmerColors = props.shimmerColors) !== null && _props$shimmerColors !== void 0 ? _props$shimmerColors : [athensGray, iron, athensGray],
    duration: (_props$shimmerDuratio = props.shimmerDuration) !== null && _props$shimmerDuratio !== void 0 ? _props$shimmerDuratio : 1000
  }) : null) : null, /*#__PURE__*/React.createElement(Animated.Image, {
    style: [BaseStyle.image, largeStyle],
    onLoad: () => setLoaded(true),
    source: source
  }));
};

export default ProgressiveImage;
//# sourceMappingURL=index.js.map