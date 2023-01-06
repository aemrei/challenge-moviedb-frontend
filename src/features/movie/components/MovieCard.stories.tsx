import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MovieCard } from "./MovieCard";

export default {
  title: "movie/MovieCard",
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => <MovieCard {...args} />;

export const SimpleCard = Template.bind({});
SimpleCard.args = {
  assetUrl: process.env.STORYBOOK_ASSET_ROOT_URL,
  movie: {
    id: 527774,
    adult: false,
    backdrop_path: "/rcUcYzGGicDvhDs58uM44tJKB9F.jpg",
    original_language: "en",
    original_title: "Raya and the Last Dragon",
    overview:
      "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
    popularity: 110.801,
    poster_path: "/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
    release_date: "2021-03-03",
    title: "Raya and the Last Dragon",
    video: false,
    vote_average: 7.947,
    vote_count: 5769,
  },
};
