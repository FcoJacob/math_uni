import {describe, expect, test} from "vitest"
import { render, screen, fireEvent } from "@testing-library/vue";
import "@testing-library/jest-dom"

import ComponentNav from "../components/ComponentNav/ComponentNav.vue";

describe('ComponentNav', () => {
  test("renders properly", () => {
    render(ComponentNav, { props: { extendNav: false }});
    expect(screen.getByRole('navigation')).toHaveClass('w-16');
  });

  test("should extend navigation", async () => {
    render(ComponentNav, { props: { extendNav: false }});
    
    const button = screen.getByRole('button', {name: 'x'})
    await fireEvent.click(button);
    expect(screen.getByRole('navigation')).toHaveClass('w-80');
  });
});
