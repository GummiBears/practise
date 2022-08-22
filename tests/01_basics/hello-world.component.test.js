import { html, fixture, expect } from "@open-wc/testing";
import { HelloWorldComponent } from "../../src/01_basics/components/hello-world.component";

import "../../src/01_basics/components/hello-world.component";

describe("01: Basics", () => {
  describe("HelloWorldComponent", () => {
    it("should be constructable via HTML", async () => {
      const element = await fixture(html`<hello-world></hello-world>`);

      expect(element.constructor).to.equal(HelloWorldComponent);
    });

    it("should have a shadow root that contains a span with the text 'Hello World!'", async () => {
      const element = await fixture(html`<hello-world></hello-world>`);

      const span = element.shadowRoot.querySelector("span");

      expect(span.textContent).to.equal("Hello World!");
    });
  });
});
