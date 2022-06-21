import { LightningElement } from 'lwc';

export default class CustomForm extends LightningElement {
    handleOnChange(event) {
        console.log("parent = " + event.detail);
    }
}