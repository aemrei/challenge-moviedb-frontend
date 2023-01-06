import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Pagination } from "./Pagination";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "core/Pagination",
  component: Pagination,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Pagination>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const BasicPagination = Template.bind({});
BasicPagination.args = {
  currentPage: 1,
  totalPages: 10,
  onPageChange: (page) => console.log(page),
  maxVisiblePages: 5,
};

export const PaginationWithMaxVisiblePages = Template.bind({});
PaginationWithMaxVisiblePages.args = {
  currentPage: 1,
  totalPages: 10,
  onPageChange: (page) => console.log(page),
  maxVisiblePages: 15,
};

export const PaginationInMiddle = Template.bind({});
PaginationInMiddle.args = {
  currentPage: 5,
  totalPages: 10,
  onPageChange: (page) => console.log(page),
  maxVisiblePages: 5,
};
