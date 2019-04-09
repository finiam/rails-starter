import React from "react";
import { render, cleanup } from "react-testing-library";
import Text from "./index";

const { it, afterEach, expect } = global;

afterEach(cleanup);

it("Text renders text given on the children prop", () => {
  const text = "testing is cool";
  const { queryByText } = render(<Text>{text}</Text>);

  expect(queryByText(text)).toBeTruthy();
});
