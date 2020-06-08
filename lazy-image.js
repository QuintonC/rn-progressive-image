import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class LazyImage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: false,
		};
	}

	onImageLoad = () => {
		this.setState({loaded: true});
	};

	render() {
		const {
			thumbnailSource,
			fullSource,
			style,
			resizeMode,
			...props
		} = this.props;

		return (
			<View style={style}>
				{thumbnailSource.uri !== '' && (
					<Animatable.Image
						source={thumbnailSource}
						style={[
							styles.image,
							{
								opacity: this.state.loaded ? 0 : 1,
							},
						]}
						transition="opacity"
						blurRadius={2}
						resizeMode={resizeMode}
						useNativeDriver
					/>
				)}

				{fullSource.uri !== '' && (
					<Animatable.Image
						source={fullSource}
						style={[
							styles.image,
							{
								opacity: this.state.loaded ? 1 : 0,
							},
						]}
						transition="opacity"
						resizeMode={resizeMode}
						onLoad={this.onImageLoad}
						useNativeDriver
					/>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	image: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
});
