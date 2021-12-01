import {
    Animated,
    ImageProps,
    ImagePropsIOS,
    StyleProp,
    ViewStyle,
} from "react-native";

export default interface Props {
    small_source: ImageProps["source"];
    large_source: ImageProps["source"];
    type?: "spring" | "timing";
    style?: StyleProp<ViewStyle>;
    timing_config: Animated.TimingAnimationConfig;
    spring_config: Animated.SpringAnimationConfig;
    initial_blur_radius?: ImagePropsIOS["blurRadius"];
    use_native_driver?: boolean;
}
