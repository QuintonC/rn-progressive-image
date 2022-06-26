// Packages
import React from 'react';
import { act, render } from '@testing-library/react-native';
import {
    advanceAnimationByTime,
    withReanimatedTimer,
} from 'react-native-reanimated/src/reanimated2/jestUtils';

// Components
import ProgressiveImage from '../src';

describe('Shimmering ProgressiveImage', () => {
    it('Shimmer component should render if we are utilizing the shimmering placeholder', () => {
        withReanimatedTimer(() => {
            const component = render(
                <ProgressiveImage
                    source={{ uri: 'https://i.imgur.com/v74Ah44.jpg' }}
                />,
            );

            expect(
                component.queryByTestId('ProgressiveImageShimmerTest'),
            ).not.toBeNull();
        });
    });
});

describe('Thumbnail ProgressiveImage', () => {
    it('Shimmer component should render if we are utilizing the shimmering placeholder', () => {
        withReanimatedTimer(() => {
            const component = render(
                <ProgressiveImage
                    source={{ uri: 'https://i.imgur.com/v74Ah44.jpg' }}
                    thumbnailSource={{ uri: 'https://i.imgur.com/v74Ah44.jpg' }}
                />,
            );

            expect(
                component.queryByTestId('ProgressiveImageThumbnailTest'),
            ).not.toBeNull();
        });
    });
});

describe('Placeholder mount status', () => {
    it('the placeholder is mounted before onLoad is called', () => {
        withReanimatedTimer(() => {
            const component = render(
                <ProgressiveImage
                    source={{ uri: 'https://i.imgur.com/v74Ah44.jpg' }}
                />,
            );

            expect(component.queryByTestId('PlaceholderTestID')).not.toBeNull();
        });
    });

    it('the placeholder is unmounted after onLoad has been called', () => {
        withReanimatedTimer(() => {
            const component = render(
                <ProgressiveImage
                    source={{ uri: 'https://i.imgur.com/v74Ah44.jpg' }}
                />,
            );

            expect(component.queryByTestId('PlaceholderTestID')).not.toBeNull();

            const ProgressiveImageHighResImage = component.getByTestId(
                'ProgressiveImageHighResImage',
            );

            act(() => {
                // Manually trigger onLoad
                ProgressiveImageHighResImage.props.onLoad();

                // Wait for the animation to occur and for the component to unmount
                advanceAnimationByTime(350 * 1.66);
            });

            // Expect that PlaceholderTestID is not defined
            expect(component.queryByTestId('PlaceholderTestID')).toBeNull();
        });
    });
});

describe('Callback was triggered', () => {
    it('the placeholder is unmounted after onLoad has been called', () => {
        const onCallbackMock = jest.fn();

        withReanimatedTimer(() => {
            const component = render(
                <ProgressiveImage
                    source={{ uri: 'https://i.imgur.com/v74Ah44.jpg' }}
                    onLoad={onCallbackMock}
                />,
            );

            expect(component.queryByTestId('PlaceholderTestID')).not.toBeNull();

            const ProgressiveImageHighResImage = component.getByTestId(
                'ProgressiveImageHighResImage',
            );

            act(() => {
                // Manually trigger onLoad
                ProgressiveImageHighResImage.props.onLoad();

                // Wait for the animation to occur and for the component to unmount
                advanceAnimationByTime(350 * 1.66);
            });

            // Expect that our callback mock has been called
            expect(onCallbackMock).toHaveBeenCalled();
        });
    });
});
