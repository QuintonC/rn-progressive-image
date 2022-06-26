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
    source,
    style,
    inEasing = _reactNativeReanimated.Easing.bezier(0.65, 0, 0.35, 1),
    outEasing = _reactNativeReanimated.Easing.bezier(0.65, 0, 0.35, 1),
    animationDuration = 350,
    onLoad,
    testID,
    ...props
  } = _ref;
  const [loaded, setLoaded] = (0, _react.useState)(false);
  const [placeholderShouldRender, setPlaceholderShouldRender] = (0, _react.useState)(true);
  const imageOpacity = (0, _reactNativeReanimated.useSharedValue)(0); // This is used for both the shimmerPlaceholder and the small image

  const placeholderOpacity = (0, _reactNativeReanimated.useSharedValue)(1);
  const largeStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    return {
      opacity: (0, _reactNativeReanimated.withTiming)(imageOpacity.value, {
        duration: animationDuration,
        easing: inEasing
      })
    };
  });
  const placeholderStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    return {
      opacity: (0, _reactNativeReanimated.withTiming)(placeholderOpacity.value, {
        duration: animationDuration,
        easing: outEasing
      }, () => loaded && (0, _reactNativeReanimated.runOnJS)(setPlaceholderShouldRender)(false) // This component no longer needs to be rendered, so we can dispose of it here.
      )
    };
  });
  const onLoadCallback = (0, _react.useCallback)(event => {
    setLoaded(true);
    onLoad && onLoad(event);
  }, [onLoad]);
  (0, _react.useEffect)(() => {
    if (loaded) {
      imageOpacity.value = 1;
      const timeout = setTimeout(() => {
        placeholderOpacity.value = 0;
      }, // Give this a slight delay so that we don't run
      // into issues with flashes of empty content
      animationDuration * 1.66); // Cleanup function

      return () => clearTimeout(timeout);
    }

    return;
  }, [loaded]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_style.default.container, style],
    testID: testID
  }, placeholderShouldRender ? /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    style: [_style.default.image, placeholderStyle],
    testID: "PlaceholderTestID"
  }, props.thumbnailSource ? /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.Image, {
    style: { ..._reactNative.StyleSheet.absoluteFillObject
    },
    blurRadius: props.blurRadius ?? 3,
    source: props.thumbnailSource,
    testID: "ProgressiveImageThumbnailTest"
  }) : /*#__PURE__*/_react.default.createElement(_index.ShimmerEffect, {
    colors: props.shimmerColors ?? [_constants.athensGray, _constants.iron, _constants.athensGray],
    duration: props.shimmerDuration ?? 1000
  })) : null, /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.Image, {
    testID: "ProgressiveImageHighResImage",
    style: [_style.default.image, largeStyle],
    onLoad: onLoadCallback,
    source: source
  }));
};

var _default = ProgressiveImage;
exports.default = _default;
//# sourceMappingURL=index.js.map