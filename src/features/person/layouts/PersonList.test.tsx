import { render, screen } from "@testing-library/react";
import { PersonList } from "./PersonList";

describe("PersonList", () => {
  it("should render a person list", () => {
    render(
      <PersonList
        people={[
          {
            adult: false,
            id: 1017294,
            name: "Tom Hopper",
            profile_path: "/qS8F31xn6ZoNBTOvcXZfWewgma2.jpg",
          },
          {
            adult: false,
            id: 1017295,
            name: "Lily Collins",
            profile_path: "/qS8F31xn6ZoNBTOvcXZfWewgma2.jpg",
          },
        ]}
      />,
    );

    expect(screen.getByText("Tom Hopper")).toBeInTheDocument();
    expect(screen.getByText("Lily Collins")).toBeInTheDocument();
  });
});
