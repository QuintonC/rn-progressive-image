// Packages
import { ImageProps, ImagePropsIOS, StyleProp, ViewStyle } from 'react-native';
import { WithTimingConfig } from 'react-native-reanimated';

/*
 *
 * RequireAtLeastOne
 *
 */
type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
    T,
    Exclude<keyof T, Keys>
> &
    {
        [K in Keys]-?: Required<Pick<T, K>> &
            Partial<Pick<T, Exclude<Keys, K>>>;
    }[Keys];

/*
 *
 * RequireOnlyOne
 *
 */
type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
    T,
    Exclude<keyof T, Keys>
> &
    {
        [K in Keys]-?: Required<Pick<T, K>> &
            Partial<Record<Exclude<Keys, K>, undefined>>;
    }[Keys];

/*
 *
 * ProgressiveImage Type + Props
 *
 */
interface BaseProps {
    withShimmer?: boolean;
    smallSource?: ImageProps['source'];
    largeSource: ImageProps['source'];

    // Style customization
    style?: StyleProp<ViewStyle>;
    initialBlurRadius?: ImagePropsIOS['blurRadius'];

    // Animation customization
    inEasing?: WithTimingConfig['easing'];
    outEasing?: WithTimingConfig['easing'];
    animationDuration?: number;

    // Shimmer customization
    // You can customize the colors of your shimmer if you'd like.
    shimmerColors?: string[];
    shimmerDuration?: number;
}

export type ProgressiveImageProps = RequireOnlyOne<
    BaseProps,
    'withShimmer' | 'smallSource'
>;

/*
 *
 * ShimmerEffect Props
 *
 */
export interface ShimmerEffectProps {
    colors: string[];
    duration: number;
}
