import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RatingStars } from "./RatingStars";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "core/RatingStars",
  component: RatingStars,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof RatingStars>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RatingStars> = (args) => <RatingStars {...args} />;

export const FullStars = Template.bind({});
FullStars.args = {
  rating: 5,
};

export const HalfStars = Template.bind({});
HalfStars.args = {
  rating: 2.5,
};
