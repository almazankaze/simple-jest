import { render, screen } from "@testing-library/react";
import Home from "../Home";

it("should render title in a header", async () => {
  render(<Home />);
  const titleElement = screen.getByRole("heading", {
    name: "Search for Anime",
  });
  expect(titleElement).toBeInTheDocument();
});
