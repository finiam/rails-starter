import React from "react";
import { render, cleanup } from "@testing-library/react";
import Text from "./index";

const { it, afterEach, expect } = global;

afterEach(cleanup);

it("Text renders text given on the children prop", () => {
  const text = "testing is cool";
  const { container } = render(<Text>{text}</Text>);

  expect(container.textContent).toEqual(text);
});
