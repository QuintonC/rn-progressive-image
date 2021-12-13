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

export default interface Props {
    small_source: ImageProps["source"];
    large_source: ImageProps["source"];
    initial_blur_radius?: ImagePropsIOS["blurRadius"];
    use_native_driver?: boolean;
    style?: StyleProp<ViewStyle>;
    animation_duration?: number;
    // Animatable Props
    animation_in?: Animatable.Animation;
    animation_out?: Animatable.Animation;
    // Animated Propss
    type?: "spring" | "timing";
    timing_config?: Animated.TimingAnimationConfig;
    spring_config?: Animated.SpringAnimationConfig;
    // Reanimated Props
    in_easing?: WithTimingConfig["easing"];
    out_easing?: WithTimingConfig["easing"];
}

export interface CoreProps extends Props {
    animation_library?: "animatable" | "animated" | "reanimated";
}
