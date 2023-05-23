import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("버튼이 제대로 동작하고 있습니까?", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "change to blue" });

  expect(button).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
  // .연산자 앞의 값과 toBe 안의 값이 동일한지 비교
  expect(button.textContent).toBe("change to red");
});
