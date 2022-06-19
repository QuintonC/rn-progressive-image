"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

var _reactNativeLinearGradient = _interopRequireDefault(require("react-native-linear-gradient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Packages
var _default = _ref => {
  let {
    colors,
    duration
  } = _ref;

  const initialWidth = _reactNative.Dimensions.get('window').width;

  const [width, setWidth] = (0, _react.useState)(initialWidth);
  const start = (0, _reactNativeReanimated.useSharedValue)(-1);
  (0, _react.useEffect)(() => {
    start.value = (0, _reactNativeReanimated.withRepeat)((0, _reactNativeReanimated.withTiming)(1, {
      duration
    }), -1);
  }, []);
  const animatedGradientPosition = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    return {
      transform: [{
        translateX: (0, _reactNativeReanimated.interpolate)(start.value, [-1, 1], [-width, width])
      }]
    };
  });
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      width: 250,
      overflow: 'hidden',
      backgroundColor: colors[0]
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    onLayout: _ref2 => {
      let {
        nativeEvent
      } = _ref2;
      setWidth(nativeEvent.layout.width);
    },
    style: [{ ..._reactNative.StyleSheet.absoluteFillObject
    }, animatedGradientPosition]
  }, /*#__PURE__*/_react.default.createElement(_reactNativeLinearGradient.default, {
    start: {
      x: 0,
      y: 0.5
    },
    end: {
      x: 1,
      y: 0.5
    },
    colors: colors,
    style: { ..._reactNative.StyleSheet.absoluteFillObject
    },
    locations: [0, 0.5, 1]
  })));
};

exports.default = _default;
//# sourceMappingURL=ShimmerEffect.js.map