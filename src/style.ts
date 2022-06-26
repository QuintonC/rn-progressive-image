// Packages
import { Dimensions, StyleSheet } from 'react-native';

// Constants
import { iron } from './constants';

// Get our dimensions from the useWindowDimensions hook
const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        /*
         * We will default the container to a 50% square.
         * users of the package can define their own width
         * and height by passing in the 'style' prop to the
         * component.
         */
        width: width * 0.5,
        height: width * 0.5,
        backgroundColor: iron,
        overflow: 'hidden',
    },
    image: {
        ...StyleSheet.absoluteFillObject,
    },
});
