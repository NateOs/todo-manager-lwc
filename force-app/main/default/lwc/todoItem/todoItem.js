import { LightningElement, api } from "lwc";

export default class TodoItem extends LightningElement {
  @api todoName;
  @api todoId;
  @api done = false;
}
