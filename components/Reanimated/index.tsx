import React, { useEffect, useState } from "react";
import { View } from "react-native";

// Packages
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
} from "react-native-reanimated";

// Props
import { ReanimatedProps } from "../../props";

// Style
import style from "../../style";

export default ({
    small_source,
    large_source,
    initial_blur_radius = 3,
    animation_duration = 350,
    in_easing,
    out_easing,
    ...props
}: ReanimatedProps) => {
    const [loaded, setLoaded] = useState(false),
        large_opacity = useSharedValue(0),
        small_opacity = useSharedValue(1),
        large_style = useAnimatedStyle(() => {
            return {
                opacity: withTiming(large_opacity.value, {
                    duration:
                        animation_duration !== undefined
                            ? animation_duration
                            : 350,
                    easing:
                        in_easing !== undefined
                            ? in_easing
                            : Easing.bezier(0.83, 0, 0.17, 1),
                }),
            };
        }),
        small_style = useAnimatedStyle(() => {
            return {
                opacity: withTiming(small_opacity.value, {
                    duration: animation_duration,
                    easing:
                        out_easing !== undefined
                            ? out_easing
                            : Easing.bezier(0.83, 0, 0.17, 1),
                }),
            };
        });

    useEffect(() => {
        if (loaded) {
            large_opacity.value = 1;
            small_opacity.value = 0;
        }
    }, [loaded]);

    return (
        <View style={[style.container, props.style]}>
            <Animated.Image
                style={[style.image, small_style]}
                blurRadius={initial_blur_radius ? initial_blur_radius : 3}
                source={small_source}
            />

            <Animated.Image
                style={[style.image, large_style]}
                onLoad={() => setLoaded(true)}
                source={large_source}
            />
        </View>
    );
};
