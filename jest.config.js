const { defaults: tsjPreset } = require("ts-jest/presets");

module.exports = {
    preset: "react-native",
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.spec.json",
        },
    },
    transform: {
        "^.+\\.jsx$": "babel-jest",
        "^.+\\.tsx?$": "ts-jest",
    },
    transformIgnorePatterns: [
        "node_modules/(?!(@react-native|react-native|react-native-reanimated)/)",
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
