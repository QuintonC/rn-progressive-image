import React, { useEffect, useRef, useState } from "react";
import { View, Animated } from "react-native";

// Props
import props from "./props";

// Style
import style from "./style";

export default ({
    small_source,
    large_source,
    type = "timing",
    timing_config,
    spring_config,
    initial_blur_radius = 3,
    use_native_driver = true,
    ...props
}: props) => {
    const [loaded, setLoaded] = useState(false),
        opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        /*
         * Since we only have two possible 'types', we can assume that
         * if it is not timing that it will be spring.
         *
         * In both of the examples below we use spread syntax first
         * because we're always going to override whatever value is
         * set for the toValue prop as well as the useNativeDriver prop.
         */
        type === "timing"
            ? Animated.timing(opacity, {
                  ...timing_config,
                  toValue: loaded ? 1 : 0,
                  useNativeDriver: use_native_driver,
              }).start()
            : Animated.spring(opacity, {
                  ...spring_config,
                  toValue: loaded ? 1 : 0,
                  useNativeDriver: use_native_driver,
              }).start();
    }, [loaded]);

    return (
        <View style={[style.container, props.style]}>
            <Animated.Image
                style={[
                    style.image,
                    {
                        opacity: opacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 0],
                        }),
                    },
                ]}
                blurRadius={initial_blur_radius ? initial_blur_radius : 3}
                source={small_source}
            />

            <Animated.Image
                style={[
                    style.image,
                    {
                        opacity: opacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1],
                        }),
                    },
                ]}
                onLoad={() => setLoaded(true)}
                source={large_source}
            />
        </View>
    );
};
