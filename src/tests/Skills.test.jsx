import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Skills } from "../components/UI/Skills"
import pretty from "pretty";


export const skill = [
  {
    id: 1,
    tech: "JavaScript",
  },];

describe("Skills Item", () => {
  it("renders the skills item component and matches snapshot", () => {
    // Render the component
    render(<Skills data = {skill}/>);

    // Format the rendered output
    const html = pretty(document.querySelector(".skill").innerHTML);

    // Verify the output
    expect(html).toMatchSnapshot();
  });
});
