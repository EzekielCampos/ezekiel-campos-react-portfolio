import { testData } from "../assets/js/projects";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import pretty from "pretty";
import { ProjectCard } from "../components/UI/Card";

describe("Project Card", () => {
  it("renders a card that will hold the information about a project", () => {
    render(<ProjectCard data={testData} />);
    const html = pretty(document.querySelector(".card").innerHTML);

    expect(html).toMatchSnapshot();
  });
});
