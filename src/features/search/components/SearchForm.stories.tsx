import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SearchForm } from "./SearchForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "search/SearchForm",
  component: SearchForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SearchForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchForm> = (args) => <SearchForm {...args} />;

export const SimpleSearchForm = Template.bind({});
SimpleSearchForm.args = {};

export const SearchFormWithQuery = Template.bind({});
SearchFormWithQuery.args = {
  value: "Tom Hopper",
};
