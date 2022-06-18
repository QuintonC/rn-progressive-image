// Packages
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
} from 'react-native-reanimated';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

// Style
import BaseStyle from './style';

// Props
import { ProgressiveImageProps } from './types';

// Constants
import { athensGray, iron, silver } from './constants';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export default ({
    withShimmer,
    smallSource,
    largeSource,
    style,
    initialBlurRadius,
    inEasing,
    outEasing,
    animationDuration = 350,
    shimmerColors = [athensGray, iron, silver],
    cachePrefix,
}: ProgressiveImageProps) => {
    const [loaded, setLoaded] = useState(false);
    const [placeholderShouldRender, setPlaceholderShouldRender] =
        useState(true);

    const largeOpacity = useSharedValue(0);
    const placeholderOpacity = useSharedValue(1); // This is used for both the shimmerPlaceholder and the small image

    const largeStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(largeOpacity.value, {
                duration: animationDuration,
                easing:
                    inEasing !== undefined
                        ? inEasing
                        : Easing.bezier(0.83, 0, 0.17, 1),
            }),
        };
    });
    const placeholderStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(placeholderOpacity.value, {
                duration: animationDuration,
                easing:
                    outEasing !== undefined
                        ? outEasing
                        : Easing.bezier(0.83, 0, 0.17, 1),
            }),
        };
    });

    useEffect(() => {
        if (loaded) {
            largeOpacity.value = 1;
            placeholderOpacity.value = 0;

            const timeout = setTimeout(
                () => {
                    // After the animation has finished of the large
                    // image, we can remove the placeholder. To do this,
                    // we set our placeholderShouldRender state value to
                    // false and this will trigger the unmount.
                    setPlaceholderShouldRender(false);
                },
                // Give this a little extra time so we don't stack animations.
                animationDuration + 100,
            );

            // Cleanup function
            return () => clearTimeout(timeout);
        }
    }, [loaded]);

    return (
        <View style={[BaseStyle.container, style]}>
            {placeholderShouldRender ? (
                <Animated.View style={[BaseStyle.image, placeholderStyle]}>
                    {smallSource ? (
                        <Animated.Image
                            style={{ ...StyleSheet.absoluteFillObject }}
                            blurRadius={
                                initialBlurRadius ? initialBlurRadius : 3
                            }
                            source={smallSource}
                        />
                    ) : (
                        <ShimmerPlaceholder
                            style={{ ...StyleSheet.absoluteFillObject }}
                        />
                    )}
                </Animated.View>
            ) : null}

            <Animated.Image
                style={[BaseStyle.image, largeStyle]}
                onLoad={() => setLoaded(true)}
                source={largeSource}
            />
        </View>
    );
};
