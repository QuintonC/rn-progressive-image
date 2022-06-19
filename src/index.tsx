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
    inEasing = Easing.bezier(0.65, 0, 0.35, 1),
    outEasing = Easing.bezier(0.65, 0, 0.35, 1),,
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
                easing: inEasing
            }),
        };
    });

    const placeholderStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(placeholderOpacity.value, {
                duration: animationDuration,
                easing: outEasing,
            }, () => {
                if (loaded) {
                    // This component no longer needs to be rendered, so we can dispose of it here.
                    setPlaceholderShouldRender(false)
                }
            }),
        };
    });

    useEffect(() => {
        if (loaded) {
            largeOpacity.value = 1;

            const timeout = setTimeout(
                () => {
                    placeholderOpacity.value = 0;
                },
                // Give this a slight delay so that we don't run 
                // into issues with flashes of empty content
                animationDuration * .66
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
