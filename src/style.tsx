import { StyleSheet, useWindowDimensions } from "react-native";

// Get our dimensions from the useWindowDimensions hook
const { width } = useWindowDimensions();

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
    },
    image: {
        ...StyleSheet.absoluteFillObject,
    },
});
