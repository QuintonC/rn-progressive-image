// Packages
import {
    ImageProps,
    ImagePropsIOS,
    StyleProp,
    ViewProps,
    ViewStyle,
} from 'react-native';
import { WithTimingConfig } from 'react-native-reanimated';

interface IProgressiveImageWithShimmer extends IBaseProgressiveImage {
    /**
     * This allows you to define the colors in which you'd like your shimmer effect to have.
     * The default colors are [#F2F2F7, #DDDEE0, #F2F2F7]
     */
    shimmerColors?: string[];

    /**
     * The amount of time that it takes for the shimmer to move across the component (in milliseconds).
     */
    shimmerDuration?: number;

    // Disallow the following:
    blurRadius?: never;
    thumbnailSource?: never;
}

interface IProgressiveImageWithThumbnail extends IBaseProgressiveImage {
    /**
     * blurRadius: the blur radius of the blur filter added to the image
     * @platform ios
     */
    blurRadius?: ImagePropsIOS['blurRadius'];

    /**
     * Required when using the Thumbnail placeholder. This image should be a smaller
     * sized image which will serve in the larger images place until it has finished
     * loading.
     */
    thumbnailSource: ImageProps['source'];

    // Disallow the following:
    shimmerColors?: never;
    shimmerDuration?: never;
}

interface IBaseProgressiveImage {
    /**
     * The image which you'd like to display
     */
    source: ImageProps['source'];
    style?: StyleProp<ViewStyle>;

    /**
     * A custom timing configuration which is used when the image has loaded and transitions in.
     * Read more about easing here:
     * https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/animations/#timing
     */
    inEasing?: WithTimingConfig['easing'];

    /**
     * A custom timing configuration which is used when the image has loaded. This will affect the transition
     * transition for either the shimmer effect or the thumbnailSource image component. Read more about easing here:
     * https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/animations/#timing
     */
    outEasing?: WithTimingConfig['easing'];

    /**
     * The amount of time that animations will run for (in milliseconds).
     */
    animationDuration?: number;

    /**
     * Invoked when the desired source loads successfully.
     * This will trigger at the same time as the animation for the source image to load in.
     */
    onLoad?: ImageProps['onLoad'];

    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: ViewProps['testID'];
    
    imageProps?: never;
    thumbnailProps?: never;
}

export type ProgressiveImageProps =
    | IProgressiveImageWithShimmer
    | IProgressiveImageWithThumbnail;

/*
 *
 * ShimmerEffect Props
 *
 */
export interface ShimmerEffectProps {
    colors: string[];
    duration: number;
}
