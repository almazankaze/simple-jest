import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../SearchBar";
import { BrowserRouter } from "react-router-dom";

const MockFunction = jest.fn();

const MockSearch = () => {
  return (
    <BrowserRouter>
      <SearchBar />
    </BrowserRouter>
  );
};

describe("search bar", () => {
  it("should render input element", async () => {
    render(<MockSearch />);
    const inputElement = screen.getByPlaceholderText("SEARCH");
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type in input", async () => {
    render(<MockSearch />);
    const inputElement = screen.getByPlaceholderText("SEARCH");
    fireEvent.change(inputElement, { target: { value: "Naruto" } });
    expect(inputElement.value).toBe("Naruto");
  });

  it("should have no text when search button is clicked", async () => {
    render(<MockSearch />);
    const inputElement = screen.getByPlaceholderText("SEARCH");
    const btnElement = screen.getByRole("button");
    fireEvent.change(inputElement, { target: { value: "Naruto" } });
    fireEvent.submit(btnElement);
    expect(inputElement.value).toBe("");
  });
});
