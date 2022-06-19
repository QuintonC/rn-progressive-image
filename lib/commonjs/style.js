"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _constants = require("./constants");

// Packages
// Constants
// Get our dimensions from the useWindowDimensions hook
const width = _reactNative.Dimensions.get('window').width;

var _default = _reactNative.StyleSheet.create({
  container: {
    /*
     * We will default the container to a 50% square.
     * users of the package can define their own width
     * and height by passing in the 'style' prop to the
     * component.
     */
    width: width * 0.5,
    height: width * 0.5,
    backgroundColor: _constants.iron
  },
  image: { ..._reactNative.StyleSheet.absoluteFillObject
  }
});

exports.default = _default;
//# sourceMappingURL=style.js.map