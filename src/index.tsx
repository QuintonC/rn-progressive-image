// Packages
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
    runOnJS,
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
    placeholder = 'Shimmer',
    source,
    style,
    inEasing = Easing.bezier(0.65, 0, 0.35, 1),
    outEasing = Easing.bezier(0.65, 0, 0.35, 1),

    animationDuration = 350,
    ...props
}: ProgressiveImageProps) => {
    const [loaded, setLoaded] = useState(false);
    const [placeholderShouldRender, setPlaceholderShouldRender] =
        useState(true);

    const imageOpacity = useSharedValue(0);

    // This is used for both the shimmerPlaceholder and the small image
    const placeholderOpacity = useSharedValue(1);

    const largeStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(imageOpacity.value, {
                duration: animationDuration,
                easing: inEasing,
            }),
        };
    });

    const placeholderStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(
                placeholderOpacity.value,
                {
                    duration: animationDuration,
                    easing: outEasing,
                },
                () => loaded && runOnJS(setPlaceholderShouldRender)(false),
                // This component no longer needs to be rendered, so we can dispose of it here.
            ),
        };
    });

    useEffect(() => {
        if (loaded) {
            imageOpacity.value = 1;

            const timeout = setTimeout(
                () => {
                    placeholderOpacity.value = 0;
                },
                // Give this a slight delay so that we don't run
                // into issues with flashes of empty content
                animationDuration * 0.66,
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
                    {placeholder === 'Thumbnail' ? (
                        <Animated.Image
                            style={{ ...StyleSheet.absoluteFillObject }}
                            blurRadius={props.blurRadius ?? 3}
                            source={props.thumbnailSource}
                        />
                    ) : placeholder === 'Shimmer' ? (
                        <ShimmerEffect
                            colors={
                                props.shimmerColors ?? [
                                    athensGray,
                                    iron,
                                    athensGray,
                                ]
                            }
                            duration={props.shimmerDuration ?? 1000}
                        />
                    ) : null}
                </Animated.View>
            ) : null}

            <Animated.Image
                style={[BaseStyle.image, largeStyle]}
                onLoad={() => setLoaded(true)}
                source={source}
            />
        </View>
    );
};

export default ProgressiveImage;
