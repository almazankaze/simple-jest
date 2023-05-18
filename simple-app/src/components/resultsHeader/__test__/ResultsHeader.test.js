import { render, screen } from "@testing-library/react";
import ResultsHeader from "../ResultsHeader";
import { BrowserRouter } from "react-router-dom";

const MockHeader = ({ numResults }) => {
  return (
    <BrowserRouter>
      <ResultsHeader numResults={numResults} />
    </BrowserRouter>
  );
};

describe("results text", () => {
  it("should render correct number of results text", async () => {
    render(<MockHeader numResults={5} />);
    const paraElement = screen.getByText(/5 results found/i);
    expect(paraElement).toBeInTheDocument();
  });

  it("should render singular result text", async () => {
    render(<MockHeader numResults={1} />);
    const paraElement = screen.getByText(/1 result found/i);
    expect(paraElement).toBeInTheDocument();
  });
});

it("should render link to go back home", async () => {
  render(<MockHeader numResults={1} />);
  const linkElement = screen.getByText(/Go Back Home/i);
  expect(linkElement).toBeInTheDocument();
});
