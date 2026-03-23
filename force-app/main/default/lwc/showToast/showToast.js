import { api, LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { FlowAttributeChangeEvent } from "lightning/flowSupport";

export default class ShowToast extends LightningElement {
  @api type;
  @api message;
  @api title;

  connectedCallback() {
    this.dispatchEvent(
      new ShowToastEvent({
        title: this.title || "",
        message: this.message || "",
        variant: this.type || "info"
      })
    );

    this.dispatchEvent(new FlowAttributeChangeEvent("message", this.message));
  }
}
