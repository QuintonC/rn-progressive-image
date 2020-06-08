/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
	Dimensions,
} from 'react-native';

import LazyImage from './lazy-image';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			thumbnailSource: 'https://i.imgur.com/Wlv5dBC.jpg',
			fullSource: 'https://i.imgur.com/AHlwTnG.jpg',
		};
	}

	refreshURIs = () => {
		this.setState(
			{
				thumbnailSource: '',
				fullSource: '',
			},
			() => {
				setTimeout(() => {
					this.setState({
						thumbnailSource: 'https://i.imgur.com/Wlv5dBC.jpg',
						fullSource: 'https://i.imgur.com/AHlwTnG.jpg',
					});
				}, 500);
			},
		);
	};

	render() {
		return (
			<View style={styles.wrapper}>
				{this.state.thumbnailSource !== '' && this.state.fullSource !== '' && (
					<LazyImage
						thumbnailSource={{uri: this.state.thumbnailSource}}
						fullSource={{uri: this.state.fullSource}}
						style={styles.coverImage}
						resizeMode="cover"
					/>
				)}

				<View>
					<TouchableOpacity
						style={styles.button}
						onPress={() => this.refreshURIs()}>
						<Text style={styles.buttonText}>Replay</Text>
					</TouchableOpacity>

					<Text style={styles.copyrightText}>
						Demo Image from @josesphyates_ on Unsplash
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		height,
		width,
		justifyContent: 'flex-end',
	},
	coverImage: {
		height: height,
		width: width,
		position: 'absolute',
	},
	button: {
		paddingVertical: 12,
		paddingHorizontal: 18,
		backgroundColor: 'white',
		borderRadius: 6,
		alignSelf: 'center',
		marginBottom: 24,
	},
	buttonText: {
		color: 'black',
	},
	copyrightText: {
		color: 'white',
		textAlign: 'center',
		marginBottom: 48,
	},
});
