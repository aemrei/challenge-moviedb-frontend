import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SearchBox } from "./SearchBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "search/SearchBox",
  component: SearchBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SearchBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBox> = (args) => <SearchBox {...args} />;

export const SimpleSearchBox = Template.bind({});
SimpleSearchBox.args = {};

export const SearchBoxWithQuery = Template.bind({});
SearchBoxWithQuery.args = {
  value: "Tom Hopper",
};
