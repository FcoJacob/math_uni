import { expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom"

import ComponentNav from "../components/ComponentNav/ComponentNav.vue";


test("renders properly", () => {
  render(ComponentNav);
  expect(screen.getByText('Navigation')).toBeInTheDocument;
});
