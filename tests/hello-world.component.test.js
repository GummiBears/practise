import { html, fixture, expect } from "@open-wc/testing";
import { HelloWorldComponent } from "../src/components/hello-world.component";

import "../src/components/hello-world.component";

describe("HelloWorldComponent", () => {
  it("should be a constructor", async () => {
    const element = new HelloWorldComponent();

    expect(element).to.be.an("HTMLElement");
  });

  it("should be constructable via HTML", async () => {
    const element = await fixture(html`<hello-world></hello-world>`);

    expect(element).to.be.an("HTMLElement");
  });

  it("should contain a span with th text 'Hello World!'", async () => {
    const element = await fixture(html`<hello-world></hello-world>`);

    const span = element.shadowRoot.querySelector("span");

    expect(span.textContent).to.equal("Hello World!");
  });
});
