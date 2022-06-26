module.exports = {
    preset: 'react-native',
    setupFiles: ['./jest-setup.js'],
    testMatch: ['**/**/*.spec.tsx'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
        '/node_modules/(?!(@react-native|react-native|react-native-reanimated|react-native-linear-gradient)/).*/',
    ],
    collectCoverageFrom: ['./src/*.tsx'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
};
