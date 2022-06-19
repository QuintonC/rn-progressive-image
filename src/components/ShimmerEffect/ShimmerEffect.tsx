// Packages
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

// Types
import { ShimmerEffectProps } from '../../types';

export default ({ colors, duration }: ShimmerEffectProps) => {
    const initialWidth = Dimensions.get('window').width;
    const [width, setWidth] = useState(initialWidth);
    const start = useSharedValue(-1);

    useEffect(() => {
        start.value = withRepeat(withTiming(1, { duration }), -1);
    }, []);

    const animatedGradientPosition = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: interpolate(
                        start.value,
                        [-1, 1],
                        [-width, width],
                    ),
                },
            ],
        };
    });

    return (
        <View
            style={{
                ...StyleSheet.absoluteFillObject,
                overflow: 'hidden',
                backgroundColor: colors[0],
            }}>
            <Animated.View
                onLayout={({ nativeEvent }) => {
                    setWidth(nativeEvent.layout.width);
                }}
                style={[
                    { ...StyleSheet.absoluteFillObject },
                    animatedGradientPosition,
                ]}>
                <LinearGradient
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    colors={colors}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    locations={[0, 0.5, 1]}
                />
            </Animated.View>
        </View>
    );
};
