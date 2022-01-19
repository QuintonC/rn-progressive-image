import React from "react";

// Grab our three components
import Animated from "./components/Animated";
import Reanimated from "./components/Reanimated";

// Props
import ProgressiveImageProps from "./props";

const ProgressiveImage = ({
    animation_library = "reanimated",
    ...props
}: ProgressiveImageProps) => {
    if (animation_library === "animated") {
        return <Animated {...props} />;
    } else {
        return <Reanimated {...props} />;
    }
};

export default ProgressiveImage;
