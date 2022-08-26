import { html, fixture, expect } from "@open-wc/testing";
import { EventDemoComponent } from "../../src/02_events/components/event-demo.component";

describe("02: Events", () => {
  describe("EventDemoComponent", () => {
    it("should be constructable via HTML", async () => {
      const element = await fixture(html`<event-demo></event-demo>`);

      expect(element.constructor).to.equal(EventDemoComponent);
    });

    it("should have a shadow root that contains a span with the text 'click'", async () => {
      const element = await fixture(html`<event-demo></event-demo>`);

      const span = element.shadowRoot.querySelector("span");

      expect(span.textContent).to.equal("click");
    });

    it("should change its text in the <span> to 'clicked' when the element is clicked", async () => {
      const element = await fixture(html`<event-demo></event-demo>`);
      const span = element.shadowRoot.querySelector("span");

      element.dispatchEvent(new Event("click", { bubbles: true, cancelable: true }));

      expect(span.textContent).to.equal("clicked");
    });

    it("should emit a custom event 'superclick' when the element is clicked", async () => {
      const element = await fixture(html`<event-demo></event-demo>`);
      let superClicked = false;

      element.addEventListener("superclick", () => (superClicked = true));

      element.dispatchEvent(new Event("click", { bubbles: true, cancelable: true }));

      expect(superClicked).to.equal(true);
    });
  });
});
