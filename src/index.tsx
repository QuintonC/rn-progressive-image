// Packages
import React, { useCallback, useEffect, useState } from 'react';
import {
    ImageLoadEventData,
    NativeSyntheticEvent,
    StyleSheet,
    View,
} from 'react-native';
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
    source,
    style,
    inEasing = Easing.bezier(0.65, 0, 0.35, 1),
    outEasing = Easing.bezier(0.65, 0, 0.35, 1),
    animationDuration = 350,
    onLoad,
    testID,
    ...props
}: ProgressiveImageProps) => {
    const [loaded, setLoaded] = useState(false);
    const [placeholderShouldRender, setPlaceholderShouldRender] =
        useState(true);
    
    const imageProps = props?.imageProps || {};
    const thumbnailProps = props?.thumbnailProps || {};

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

    const onLoadCallback = useCallback(
        (event: NativeSyntheticEvent<ImageLoadEventData>) => {
            setLoaded(true);
            onLoad && onLoad(event);
        },
        [onLoad],
    );

    useEffect(() => {
        if (loaded) {
            imageOpacity.value = 1;

            const timeout = setTimeout(
                () => {
                    placeholderOpacity.value = 0;
                },
                // Give this a slight delay so that we don't run
                // into issues with flashes of empty content
                animationDuration * 1.66,
            );

            // Cleanup function
            return () => clearTimeout(timeout);
        }

        return;
    }, [loaded]);

    return (
        <View style={[BaseStyle.container, style]} testID={testID}>
            {placeholderShouldRender ? (
                <Animated.View
                    style={[BaseStyle.image, placeholderStyle]}
                    testID="PlaceholderTestID">
                    {props.thumbnailSource ? (
                        <Animated.Image
                            style={{ ...StyleSheet.absoluteFillObject }}
                            blurRadius={props.blurRadius ?? 3}
                            source={props.thumbnailSource}
                            testID="ProgressiveImageThumbnailTest"
                            {...thumbnailProps}
                        />
                    ) : (
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
                    )}
                </Animated.View>
            ) : null}

            <Animated.Image
                testID="ProgressiveImageHighResImage"
                style={[BaseStyle.image, largeStyle]}
                onLoad={onLoadCallback}
                source={source}
                {...imageProps}
            />
        </View>
    );
};

export default ProgressiveImage;
