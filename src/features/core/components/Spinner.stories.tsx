import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Spinner } from "./Spinner";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "core/Spinner",
  component: Spinner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Spinner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const SimpleSpinner = Template.bind({});
SimpleSpinner.args = {};

export const HugeSpinner = Template.bind({});
HugeSpinner.args = {
  className: "h-64 w-64",
};
