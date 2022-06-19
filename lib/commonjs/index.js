"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

var _index = require("./components/index");

var _style = _interopRequireDefault(require("./style"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Packages
// Components
// Style
// Constants
const ProgressiveImage = _ref => {
  let {
    smallSource,
    largeSource,
    style,
    initialBlurRadius,
    inEasing,
    outEasing,
    animationDuration = 350,
    shimmerColors = [_constants.athensGray, _constants.iron, _constants.athensGray],
    shimmerDuration = 1000,
    withShimmer
  } = _ref;
  const [loaded, setLoaded] = (0, _react.useState)(false);
  const [placeholderShouldRender, setPlaceholderShouldRender] = (0, _react.useState)(true);
  const largeOpacity = (0, _reactNativeReanimated.useSharedValue)(0);
  const placeholderOpacity = (0, _reactNativeReanimated.useSharedValue)(1); // This is used for both the shimmerPlaceholder and the small image

  const largeStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    return {
      opacity: (0, _reactNativeReanimated.withTiming)(largeOpacity.value, {
        duration: animationDuration,
        easing: inEasing !== null && inEasing !== void 0 ? inEasing : _reactNativeReanimated.Easing.bezier(0.83, 0, 0.17, 1)
      })
    };
  });
  const placeholderStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    return {
      opacity: (0, _reactNativeReanimated.withTiming)(placeholderOpacity.value, {
        duration: animationDuration,
        easing: outEasing !== null && outEasing !== void 0 ? outEasing : _reactNativeReanimated.Easing.bezier(0.83, 0, 0.17, 1)
      })
    };
  });
  (0, _react.useEffect)(() => {
    if (loaded) {
      largeOpacity.value = 1;
      placeholderOpacity.value = 0;
      const timeout = setTimeout(() => {
        // After the animation has finished of the large
        // image, we can remove the placeholder. To do this,
        // we set our placeholderShouldRender state value to
        // false and this will trigger the unmount.
        setPlaceholderShouldRender(false);
      }, // Give this a little extra time so we don't stack animations.
      animationDuration + 100); // Cleanup function

      return () => clearTimeout(timeout);
    }

    return;
  }, [loaded]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_style.default.container, style]
  }, placeholderShouldRender ? /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    style: [_style.default.image, placeholderStyle]
  }, smallSource ? /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.Image, {
    style: { ..._reactNative.StyleSheet.absoluteFillObject
    },
    blurRadius: initialBlurRadius !== null && initialBlurRadius !== void 0 ? initialBlurRadius : 3,
    source: smallSource
  }) : withShimmer ? /*#__PURE__*/_react.default.createElement(_index.ShimmerEffect, {
    colors: shimmerColors,
    duration: shimmerDuration
  }) : /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: { ..._reactNative.StyleSheet.absoluteFillObject,
      backgroundColor: _constants.athensGray
    }
  })) : null, /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.Image, {
    style: [_style.default.image, largeStyle],
    onLoad: () => setLoaded(true),
    source: largeSource
  }));
};

var _default = ProgressiveImage;
exports.default = _default;
//# sourceMappingURL=index.js.map