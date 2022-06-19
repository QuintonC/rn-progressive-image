import { ImageProps, ImagePropsIOS, StyleProp, ViewStyle } from 'react-native';
import { WithTimingConfig } from 'react-native-reanimated';
declare type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
}[Keys];
interface BaseProps {
    withShimmer?: boolean;
    smallSource?: ImageProps['source'];
    largeSource: ImageProps['source'];
    style?: StyleProp<ViewStyle>;
    initialBlurRadius?: ImagePropsIOS['blurRadius'];
    inEasing?: WithTimingConfig['easing'];
    outEasing?: WithTimingConfig['easing'];
    animationDuration?: number;
    shimmerColors?: string[];
    shimmerDuration?: number;
}
export declare type ProgressiveImageProps = RequireOnlyOne<BaseProps, 'withShimmer' | 'smallSource'>;
export interface ShimmerEffectProps {
    colors: string[];
    duration: number;
}
export {};
