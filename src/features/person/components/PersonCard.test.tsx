import { render, screen } from "@testing-library/react";
import { PersonCard } from "./PersonCard";

describe("PersonCard", () => {
  it("should render a person card", () => {
    render(
      <PersonCard
        person={{
          adult: false,
          id: 1017294,
          name: "Tom Hopper",
          profile_path: "/qS8F31xn6ZoNBTOvcXZfWewgma2.jpg",
        }}
      />,
    );

    expect(screen.getByText("Tom Hopper")).toBeInTheDocument();
  });
});
