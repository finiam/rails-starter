import React from "react";
import { storiesOf } from "@storybook/react";
import Text from "./index";

storiesOf("Text", module).add("default", () => (
  <Text>I am a piece of simple plain text</Text>
));

storiesOf("Text", module).add("other", () => (
  <Text>I am other piece of simple plain text</Text>
));
