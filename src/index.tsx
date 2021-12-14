import React from "react";

// Grab our three components
import Animatable from "./Animatable";
import Animated from "./Animated";
import Reanimated from "./Reanimated";

// Props
import ProgressiveImageProps from "./props";

const ProgressiveImage = ({
    animation_library = "reanimated",
    ...props
}: ProgressiveImageProps) => {
    if (animation_library === "animatable") {
        return <Animatable {...props} />;
    } else if (animation_library === "animated") {
        return <Animated {...props} />;
    } else {
        return <Reanimated {...props} />;
    }
};

export default ProgressiveImage;
