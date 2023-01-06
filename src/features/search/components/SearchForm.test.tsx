import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { SearchForm } from "./SearchForm";

describe("SearchForm", () => {
  it("should render a search box", () => {
    render(<SearchForm value="" onSearch={() => {}} />);

    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("should call onSearch when submit the form", async () => {
    const onSearch = jest.fn();
    render(<SearchForm value="" onSearch={onSearch} />);

    const searchButton = screen.getByRole("button");
    fireEvent.submit(searchButton);

    await waitFor(() => {
      expect(onSearch).toHaveBeenCalled();
    });
  });

  it("should pass value as callback argument", async () => {
    const onSearch = jest.fn();
    render(<SearchForm value="test" onSearch={onSearch} />);

    const searchButton = screen.getByRole("button", { name: "Search" });
    fireEvent.submit(searchButton);

    await waitFor(() => {
      expect(onSearch).toHaveBeenCalledWith("test");
    });
  });
});
