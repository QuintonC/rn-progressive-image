// Packages
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
} from 'react-native-reanimated';

// Components
import { ShimmerEffect } from './components/index';

// Style
import BaseStyle from './style';

// Constants
import { athensGray, iron } from './constants';

// Props
import { ProgressiveImageProps } from './types';

const ProgressiveImage = ({
    smallSource,
    largeSource,
    style,
    initialBlurRadius,
    inEasing,
    outEasing,
    animationDuration = 350,
    shimmerColors = [athensGray, iron, athensGray],
    shimmerDuration = 1000,
    withShimmer,
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
                easing: inEasing ?? Easing.bezier(0.83, 0, 0.17, 1),
            }),
        };
    });

    const placeholderStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(placeholderOpacity.value, {
                duration: animationDuration,
                easing: outEasing ?? Easing.bezier(0.83, 0, 0.17, 1),
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

        return;
    }, [loaded]);

    return (
        <View style={[BaseStyle.container, style]}>
            {placeholderShouldRender ? (
                <Animated.View style={[BaseStyle.image, placeholderStyle]}>
                    {smallSource ? (
                        <Animated.Image
                            style={{ ...StyleSheet.absoluteFillObject }}
                            blurRadius={initialBlurRadius ?? 3}
                            source={smallSource}
                        />
                    ) : withShimmer ? (
                        <ShimmerEffect
                            colors={shimmerColors}
                            duration={shimmerDuration}
                        />
                    ) : (
                        <View
                            style={{
                                ...StyleSheet.absoluteFillObject,
                                backgroundColor: athensGray,
                            }}
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

export default ProgressiveImage;
