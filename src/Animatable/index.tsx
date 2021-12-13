import React, { useEffect, useRef, useState } from "react";
import { View, Image } from "react-native";

// Packages
import * as Animatable from "react-native-animatable";

// Props
import props from "../props";

// Style
import style from "../style";

export default ({
    small_source,
    large_source,
    initial_blur_radius = 3,
    animation_in,
    animation_out,
    animation_duration = 350,
    use_native_driver,
    ...props
}: props) => {
    const [loaded, setLoaded] = useState(false),
        small_image = useRef<Animatable.Image & Image>(null),
        large_image = useRef<Animatable.Image & Image>(null);

    useEffect(() => {
        if (loaded) {
            small_image.current && animation_out !== undefined
                ? small_image.current[animation_out](animation_duration)
                : small_image.current?.fadeIn(animation_duration);

            large_image.current && animation_in !== undefined
                ? large_image.current[animation_in](animation_duration)
                : large_image.current?.fadeIn(animation_duration);
        }
    }, [loaded]);

    return (
        <View style={[style.container, props.style]}>
            <Animatable.Image
                style={style.image}
                blurRadius={initial_blur_radius ? initial_blur_radius : 3}
                source={small_source}
                ref={small_image}
                useNativeDriver={use_native_driver}
            />

            <Animatable.Image
                style={style.image}
                onLoad={() => setLoaded(true)}
                source={large_source}
                ref={large_image}
                useNativeDriver={use_native_driver}
            />
        </View>
    );
};
