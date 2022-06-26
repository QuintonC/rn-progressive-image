<h1 align="center">rn-progressive-image</h1>

<div align="center">
    <strong>An easy to use and highly customizable progressive-image component for react-native.</strong>
</div>

<br>

<div align="center">

  <a href="https://npmjs.org/package/rn-progressive-image">
    <img src="https://img.shields.io/npm/v/rn-progressive-image.svg?style=flat-square" alt="npm package version" />
  </a>

  <a href="https://npmjs.org/package/rn-progressive-image">
    <img src="https://img.shields.io/badge/types-included-blue?style=flat-square" alt="types included" />
  </a>

  <a href="https://npmjs.org/package/rn-progressive-image">
    <img src="https://img.shields.io/npm/dm/rn-progressive-image.svg?style=flat-square" alt="monthly npm downloads" />
  </a>

  <a href="https://github.com/QuintonC/rn-progressive-image/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/rn-progressive-image.svg?style=flat-square" alt="project license" />
  </a>

  <img src="https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square" alt="All Contributors" />
</div>

<br>

<div align="center">

  <a href="https://github.com/QuintonC/rn-progressive-image/watchers">
    <img src="https://img.shields.io/github/watchers/QuintonC/rn-progressive-image.svg?style=social" alt="GitHub Watch Badge" />
  </a>

  <a href="https://github.com/QuintonC/rn-progressive-image/stargazers">
    <img src="https://img.shields.io/github/stars/QuintonC/rn-progressive-image.svg?style=social" alt="GitHub Star Badge" />
  </a>

  <a href="https://twitter.com/intent/tweet?text=Check%20out%20rn-progressive-image!%20https://github.com/QuintonC/rn-progressive-image%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/QuintonC/rn-progressive-image.svg?style=social" alt="Tweet" />
  </a>

</div>

<br>

<div align="center">
  Built with <span role="emoji">🖤&nbsp;</span> by <a href="https://github.com/QuintonC">Quinton Chester</a>
</div>

<br><br>

<div align="center">
    <img src="https://user-images.githubusercontent.com/4250423/175797854-e6f07a8d-9305-4c5a-bef9-2aadf29143a5.gif" />
</div>

## Features

- Optimistic UI that allows you to give users context before the images load.
- Customizability
  - Choose between two different placeholder types, `Shimmer` or `Thumbnail`
  - Define your own animation durations, shimmer colors,  animating easings, and more.
- Built on react-native-reanimated
- Includes type definitions for widespread adoption and a better understanding of how the package works.
- Optimized code which removes unused placeholder after the image has loaded.
- Covered by unit tests so you can rest assured that the component will never let you down.

## Table of Contents

* [Install](#installation)
* [Usage](#usage)
* [Props](#props)
* [Contributing](#contributing)
* [Versions](#versions)
* [Considerations](#considerations)
* [License](#license)

## Installation

```bash
$ npm install rn-progressive-image
```

<br>

**Note**: This package makes use of other packages, specifically [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated) and [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient). In order for this to work properly, you **must** follow the installation instructions for those packages. Not following these instructions will result in the package not working.
<br>

```bash
npm install react-native-reanimated react-native-linear-gradient
```

<br>

**Reanimated instructions**
- 👽 Android: [Reanimated Installation Instructions for Android](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/#android)
- 🍎 iOS: [Reanimated Installation Instructions for iOS](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/#ios)
<br>

## Usage

Import the package as follows:
```javascript
import ProgressiveImage from 'rn-progressive-image'
```
<br>

The simplest form of usage is as follows:
```javascript
    <ProgressiveImage 
        source={{ uri: https://myimageprovider.com/myImagePath.jpg }}
    />
```
<br>

_Note: using this component without specifying `thumbnailSource` will result in the placeholder being a ShimmerEffect._

## Props
<br>

| Prop                  | Default      | Required | Description                                                                            |
| :-------------------- | :----------- | :------- | :------------------------------------------------------------------------------------- |
| `source`              |              | true     | The source for the image which will be lazy-loaded                                     |
| `style`               | A square that is equal to half of the device's width with a gray background. | false | Images use `StyleSheet.absoluteFillObject`, so define your desired style here and the images will automatically be set to cover the defined view.                                                |
| `thumbnailSource`     |              | false    | The source for the thumbnail image which will be used for the placeholder.             |
| `blurRadius`          | `3`          | false    | The blurRadius for the thumbnailImage. iOS only per React Native implementation. There is a thought for improvement listed near the end of the README that discusses the potential for a blur view to be added to Android in a future release.                 |
| `shimmerColors`       | `[#F2F2F7, #DDDEE0, #F2F2F7]` | false    | The colors used for the shimmer effect.                               |
| `shimmerDuration`     | `1000`       | false    | The duration it takes for the shimmer to move across the View element.                 |
| `inEasing`           | `Easing.bezier(0.65, 0, 0.35, 1)` | false | This is the easing applied to the source image as it transitions in.  |
| `outEasing`           | `Easing.bezier(0.65, 0, 0.35, 1)` | false | This is the easing that is applied to the placeholder as it transitions out. |
| `animationDuration`   | `350`        | false    | The transition duration for the image source fading in and the placeholder fading out. |
| `onLoad`              |              | false    | An optional callback that is invoked when the source image has loaded. This will trigger prior to the placeholder unmounting. |
| `testID`              |              | false    | Testing is important, and I understand that you will likely want to be able to test this component and the props within it. I've added a testID so you can do just that. |
<br>

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please follow the issue format outlined at the beginning of issue creation when creating a new issue. Additionally, please search through issues to see if your specific issue has already been mentioned, is currently being addressed, or has been fixed in an upcoming release.

To contribute, please ensure that you are using [semver standards](https://semver.org/) and writing unit tests for any additions you are making.
<br>

1. Fork the repository
2. Create your feature desired branch: `git checkout -b feature/feature-name`
3. Commit your changes
4. Push to your new branch: `git push origin feature/feature-name`
5. Test code thoroughly
6. Write unit tests
7. Submit a pull request that includes a demonstration of your changes

<br>
Alternatively, feel free to open up [an issue](https://github.com/QuintonC/rn-progressive-image/issues).
<br><br>

### Import structure to follow when contributing

```javascript
// React
import { useEffect, useState, ... } from 'react';

// Packages
import PackageName from 'npm-package-name';

// Custom Components
import { MyComponent } from 'components'; 

// Props
import { PropTypeOne, PropTypeTwo } from './props';

// Style 
import style from './style';

// Utility Functions
import { performRequest } from 'utils';

// App Constants
import { APP_NAME } from 'constants/index';
```
<br>

## Versions

This section details any changes that have been implemented across versions. It will be starting with version 3.0.0 as that is the most recent version.
<br>
<br>

### 3.0.0
- **Improvements**
  * Added the ability to switch between two different types of progressive loading. Both are inferred via the types that you give the component. For the shimmer effect, do not supply a `thumbnailSource` prop and you will be using the types defined for the shimmer component and vice versa for the thumbnail based component.
  * Removed the unused placeholder component from the view hierarchy after the desired source has been loaded.
  * Generated typings with comments for better adoption and developer experience.
  * Wrote a custom `ShimmerEffect` component which is built on Reanimated with the usage of `react-native-linear-gradient`
  * Implemented new build features which streamline the building process and allow for better build outputs.
  * Added full test coverage (100% coverage confirmed via coverage folder).
  * Documentation improvements. Though this package is fairly simple, I want it to be one that continues to be easy to use, performant, and attractive to mobile developers and their users.
- **Breaking changes**
  * Updated prop names (breaking change).
  * Removed the usage of React Native Animated API in favor of utilizing _only_ Reanimated.
  * Removed the ability to use different configurations such as `Spring`.
<br>

## Thoughts for further improvement

### Caching
Some decisions have been made (for now), which are to omit the addition of caching. While I believe that caching is important, I am uncertain if I want to include it in this package by default. And having it be another prop that you must define to use the package seems sloppy. However, in the future, it is possible that a new component could be added that introduces caching (e.g. `CachedProgressiveImage`).

I've had some time to think about the best way to do this and I have two potential routes. One might include the use of [react-native-async-storage](https://github.com/react-native-async-storage/async-storage), where the base64 of an image is retrieved and a cache method is implemented to store the base64 of the image. This would be an object that gets stored as stringified JSON:

```javascript
{
    key: 'CACHE_KEY',
    type: 'Thumbnail' | 'Original Source',
    base64: Base64 data
}
```
<br>

The other method involves the use of [rn-fetch-blob](https://github.com/joltup/rn-fetch-blob). This is used for retrieving the base64 of an image and has its own caching system. However, there are some nuances around the caching system of this package as it does not include any built-in cache flushing functionality.

Thoughts on how to implement this are as follows, but are not complete. To do this, we could add an additional package that would help us achieve the desired behavior. The thought is to potentially include something such as [rn-fetch-blob](https://github.com/joltup/rn-fetch-blob). It has built-in caching functionality, however, there would
<br>

### Blur view on Android.
While blurRadius is not natively supported on Android, it is possible to add a blurring view on top via other packages (or just through styling), which would allow Android users to also receive the same blur effect that makes this packaage so great. This may become an optional feature in the future so that it is not a breaking change.
<br>


## License

Licensed under the MIT License.
