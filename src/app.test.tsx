import { render } from "@solidjs/testing-library";

import { App } from "./app";

describe("<App />", () => {
  test("it will render an text input and a button", () => {
    const { getByText } = render(() => <App />);
    expect(getByText("Hello, world!")).toBeInTheDocument();
  });
});
