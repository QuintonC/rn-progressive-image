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

![Video Demonstration](./img/rn-progressive-image.mp4)

## Features
---
<br>

- Optimistic UI that allows you to give users context before the images load.
- Customizability
  - Choose between two different placeholder types, `Shimmer` or `Thumbnail`
  - Define your own animation durations, shimmer colors,  animating easings, and more.
- Built on react-native-reanimated
- Includes type definitions for widespread adoption and a better understanding of how the package works.
- Optimized code which removes unused placeholder after the image has loaded.
- Covered by unit tests so you can rest assured that the component will never let you down.
<br>

## Table of Contents
---
<br>

* [Install](#installation)
* [Usage](#usage)
* [Props](#props)
* [Contributing](#contributing)
* [Versions](#versions)
* [Considerations](#considerations)
* [License](#license)

<br>

## Installation
---
<br>

```bash
$ npm install rn-progressive-image
```
<br>

**Note**: This package makes use of other packages, specifically [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated) and [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient). In order for this to work properly, you **must** follow the installation instructions for those packages. Not following these instructions will result in the package not working.

```bash
npm install react-native-reanimated react-native-linear-gradient
```

<br>

**Reanimated instructions**
- 👽 Android: [Reanimated Installation Instructions for Android](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/#android)
- 🍎 iOS: [Reanimated Installation Instructions for iOS](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/#ios)
<br>

## Usage
---
<br>

Import the package as follows:
```javascript
import ProgressiveImage from 'rn-progressive-image'
```
<br>

At the core, this is the simplest form of usage is as follows:
```javascript
    <ProgressiveImage 
        source={{ uri: https://myimageprovider.com/myImagePath.jpg }}
    />
```
<br>

## Props
---
<br>

| Prop                  | Default      | Required | Description                                                                            |
| :-------------------- | :----------- | :------- | :------------------------------------------------------------------------------------- |
| `source`              |              | **true**     | The source for the image which will be lazy-loaded                                     |
| `placeholder`         | `Shimmer`    | false    | The type of placeholder to be used, options are `Shimmer`, `Thumbnail` and `undefined` |
| `style`               | A square that is equal to half of the device's width with a gray background. | false | Images use `StyleSheet.absoluteFillObject`, so define your desired style here and the images will automatically be set to cover the defined view. |
| `thumbnailSource`     |              | false    | The source for the thumbnail image which will be used for the placeholder. This is only applicable when `placeholder` is `Thumbnail` |
| `blurRadius`          | `3`          | false    | The blurRadius for the thumbnailImage. This is only applicable when `placeholder` is `Thumbnail` |
| `shimmerColors`       | `[#F2F2F7, #DDDEE0, #F2F2F7]` | false    | The colors used for the shimmer effect. This is only applicable when `placeholder` is `Shimmer` |
| `shimmerDuration`     | `1000`       | false    | The duration it takes for the shimmer to move across the View element. This is only applicable when `placeholder` is `Shimmer` |
| `inEasing`           | `Easing.bezier(0.65, 0, 0.35, 1)` | false | This is the easing that is applied as the placeholder transitions out. |
| `outEasing`           | `Easing.bezier(0.65, 0, 0.35, 1)` | false | This is the easing that is applied to the source image as it transitions in. |
| `animationDuration`   | `350`        | false    | The transition duration for the image source fading in and the placeholder fading out. |
<br>

## Contributing
---
<br>

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
<br>

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
---
<br>
This section details any changes that have been implemented across versions. It will be starting with version 3.0.0 as that is the most recent version.
<br>
<br>

### 3.0.0
* Added the ability to switch between two different types of progressive loading, `Shimmer` or `Thumbnail`
* Removed the unused component from the view hierarchy after the desired source has been loaded.
* Generated typings with comments for better adoption.
* Updated prop names (breaking change).
* Wrote a custom `ShimmerEffect` component which is built on Reanimated with the usage of `react-native-linear-gradient`
* Implemented new build features which streamline the building process and allow for better build outputs.
* Removed the usage of React Native's built-in Animated API.
* Removed the ability to use different configurations such as `Spring`
<br>
<br>

## Considerations
---
<br>

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
<br>


## License
---
<br>
Licensed under the MIT License.
