import React from "react";

// Grab our three components
import Animatable from "./Animatable";
import Animated from "./Animated";
import Reanimated from "./Reanimated";

// Props
import { CoreProps } from "./props";

export default ({ animation_library = "reanimated", ...props }: CoreProps) => {
    switch (animation_library) {
        case "animatable":
            return <Animatable {...props} />;

        case "animated":
            return <Animated {...props} />;

        default:
            return <Reanimated {...props} />;
    }
};
