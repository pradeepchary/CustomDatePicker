import { LightningElement, api } from "lwc";

export default class CustomDatePicker extends LightningElement {
    @api strLabel;

    handleOnBlur(event) {
        if (event.currentTarget.value) {
            let dtValue = new Date(event.currentTarget.value).toLocaleDateString();

            this.dispatchEvent(
                new CustomEvent("change", {
                    detail : dtValue
                })
            );
        }
    }
}