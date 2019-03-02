import React from "react";
import { storiesOf } from "@storybook/react";
import HelloWorld from "./index";

storiesOf("Hello World", module).add("default", () => <HelloWorld />);
