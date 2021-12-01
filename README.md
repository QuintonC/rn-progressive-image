<h1 align="center">rn-progressive-image</h1>

<div align="center">
    <strong>An easy to use, stylistically customizable lazy-loader/progressive image display for react-native's image component.</strong>
</div>

<br>

<div align="center">

  <a href="https://npmjs.org/package/rn-progressive-image">
    <img src="https://img.shields.io/npm/v/rn-progressive-image.svg?style=flat-square" alt="npm package version" />
  </a>

  <a href="https://npmjs.org/package/rn-progressive-image">
    <img src="https://img.shields.io/npm/dm/rn-progressive-image.svg?style=flat-square" alt="npm downloads" />
  </a>

  <a href="https://github.com/QuintonC/rn-progressive-image/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/rn-progressive-image.svg?style=flat-square" alt="project license" />
  </a>

  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>

  <img src="https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square" alt="All Contributors" />
</div>

<br>

<div align="center">

  <a href="https://github.com/QuintonC/rn-progressive-image/watchers">
    <img src="https://img.shields.io/github/watchers/QuintonC/rn-progressive-image.svg?style=social" alt="Github Watch Badge" />
  </a>

  <a href="https://github.com/QuintonC/rn-progressive-image/stargazers">
    <img src="https://img.shields.io/github/stars/QuintonC/rn-progressive-image.svg?style=social" alt="Github Star Badge" />
  </a>

  <a href="https://twitter.com/intent/tweet?text=Check%20out%20rn-progressive-image!%20https://github.com/QuintonC/rn-progressive-image%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/QuintonC/rn-progressive-image.svg?style=social" alt="Tweet" />
  </a>

</div>

<br>

<div align="center">
  Built with <span role="emoji">🖤&nbsp;</span> by <a href="https://github.com/QuintonC">Quinton Chester.</a>
</div>

<h2>Table of Contents</h2>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#props">Props</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#code-guidelines">Code Guidelines</a></li>
  <li><a href="#license">License</a></li>


## Installation

```bash
$ npm install rn-progressive-image
```

## Usage
At the top of your file:
```javascript
import LazyImage from 'rn-progressive-image'
```

At the core, this is the simplest form of usage:
```javascript
    <LazyImage 
        small_source={{ uri: your_image_path_here }}
        large_source={{ uri: your_image_path_here }}
    />
```

## Props
| Parameter             | Default  | Required | Description                                                                         |
| :-------------------- | :------- | :------- | :---------------------------------------------------------------------------------- |
| `small_source`        |          | true     | The source for the smallest image that will initially be blurred and animated out   |
| `large_source`        |          | true     | The source for the larger image that we will be lazily loading                      |
| `type`                | `timing` | false    | The type of animation to use. Either `spring` or `timing`.                          |
| `style`               |          | false    | The style of the image container. Images use `StyleSheet.absoluteFillObject`, so define your overall image structure here |
| `timing_config`       |          | false    | The config for the Animated.timing animation                                        |
| `spring_config`       |          | false    | The config for the Animated.spring animation                                        |
| `initial_blur_radius` | `3`      | false    | The initial blur amount for the small image. Only present until the large image has been loaded and animates in. |
| `use_native_drive`    | `true`   | false    | Specify whether you would like to use the native driver for animations. Recommended to leave this untouched as `true` is the default value. |

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please follow the issue format outlined at the beginning of issue creation when creating a new issue. Additionally, please search through issues to see if your specific issue has already been mentioned, is currently being addressed, or has been fixed in an upcoming release.

To contribute properly please use [gitflow](https://medium.com/android-news/gitflow-with-github-c675aa4f606a) and [semver standards](https://semver.org/) as well as the <a href="code-guidelines">code guidelines.</a>
1. Fork it.
2. Create your feature branch: `git checkout -b feature/feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/feature-name`
5. Test code thoroughly.
6. ????
7. Submit a pull request

Or open up [an issue](https://github.com/QuintonC/rn-progressive-image/issues).
## Code Guidelines

### Imports
```javascript
// React
import { useEffect, useState, ... } from 'react';

// Packages
import PackageName from 'npm-package-name';

// Custom Components
import MyComponent from 'components/MyComponent/MyComponent'; 

// Props
import props from './props';

// Style 
import style from './style';

// Utility Functions
import performRequest from 'utility/performRequest';

// App Constants
import { APP_NAME } from 'constants/constants';
```

### Naming Conventions
Functions:
```javascript
const myCustomFunction = () => {
	...
}
```

Variables:
```javascript
const myCustomFunction = () => {
  let this_is_a_variable;
	...
}
```

Parameters:
```javascript
const myCustomFunction = (_this_is_a_parameter) => {
	...
}
```

## License
Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.