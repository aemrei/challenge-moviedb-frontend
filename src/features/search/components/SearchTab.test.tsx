import { render, screen } from "@testing-library/react";
import { SearchTab } from "./SearchTab";

describe("SearchTab", () => {
  it("should render a search tab", () => {
    render(
      <SearchTab text="Test text" selected="movie" type="movie" onClick={() => {}} />,
    );

    expect(screen.getByText("Test text")).toBeInTheDocument();
  });
});
