import { Controller } from "@hotwired/stimulus";
import Reveal from "reveal.js";

export default class extends Controller {
  connect() {
    console.log("reveal controller connected");
    this.reveal = new Reveal(this.element);
    this.reveal.initialize();
  }

  disconnect() {
    this.reveal.destroy();
  }
}
