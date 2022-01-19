import React from "react";
import { render } from "@testing-library/react-native";
import ProgressiveImage from "..";

describe("AnimatedProgressiveImage", () => {
    jest.useFakeTimers();
    const tree = (
        <ProgressiveImage
            small_source={{ uri: "https://i.imgur.com/T8bP9tw.jpg" }}
            large_source={{ uri: "https://i.imgur.com/v74Ah44.jpg" }}
            animation_library="animated"
        />
    );

    it("Animated API should render correctly", () => {
        const page = render(tree);
        expect(page.toJSON()).toMatchSnapshot();
    });
});

describe("ReanimatedProgressiveImage", () => {
    jest.useFakeTimers();
    const tree = (
        <ProgressiveImage
            small_source={{ uri: "https://i.imgur.com/T8bP9tw.jpg" }}
            large_source={{ uri: "https://i.imgur.com/v74Ah44.jpg" }}
            animation_library="reanimated"
        />
    );

    it("Reaimated API should render correctly", () => {
        const page = render(tree);
        expect(page.toJSON()).toMatchSnapshot();
    });
});
