import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PersonCard } from "./PersonCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "person/PersonCard",
  component: PersonCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PersonCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PersonCard> = (args) => <PersonCard {...args} />;

export const SimplePersonCard = Template.bind({});
SimplePersonCard.args = {
  person: {
    adult: false,
    id: 1017294,
    name: "Tom Hopper",
    profile_path: "/qS8F31xn6ZoNBTOvcXZfWewgma2.jpg",
  },
};
