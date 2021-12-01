import React from "react";
import { render } from "@testing-library/react-native";
import ProgressiveImage from "../src";

describe("ProgressiveImage", () => {
    jest.useFakeTimers();
    const tree = (
        <ProgressiveImage
            small_source={{ uri: "https://i.imgur.com/T8bP9tw.jpg" }}
            large_source={{ uri: "https://i.imgur.com/v74Ah44.jpg" }}
        />
    );

    it("should render correctly", () => {
        const page = render(tree);
        expect(page.toJSON()).toMatchSnapshot();
    });
});
