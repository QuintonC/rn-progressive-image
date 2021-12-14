import {
    Animated,
    ImageProps,
    ImagePropsIOS,
    StyleProp,
    ViewStyle,
} from "react-native";

// Packages
import * as Animatable from "react-native-animatable";
import { WithTimingConfig } from "react-native-reanimated";

/*
 *
 * ProgressiveImage Props
 *
 */
export default interface ProgressiveImageProps {
    small_source: ImageProps["source"];
    large_source: ImageProps["source"];
    animation_library?: "animatable" | "animated" | "reanimated";
    style?: StyleProp<ViewStyle>;
    initial_blur_radius?: ImagePropsIOS["blurRadius"];
    animation_duration?: number;
    use_native_driver?: boolean;
}

/*
 *
 * Animatable Props
 *
 */
export interface AnimatableProps extends ProgressiveImageProps {
    animation_in?: Animatable.Animation;
    animation_out?: Animatable.Animation;
}

/*
 *
 * Animated Props
 *
 */
export interface AnimatedProps extends ProgressiveImageProps {
    type?: "spring" | "timing";
    timing_config?: Animated.TimingAnimationConfig;
    spring_config?: Animated.SpringAnimationConfig;
}

/*
 *
 * Reanimated Props
 *
 */
export interface ReanimatedProps extends ProgressiveImageProps {
    in_easing?: WithTimingConfig["easing"];
    out_easing?: WithTimingConfig["easing"];
}
