import { LightningElement, api } from "lwc";

export default class TodoItem extends LightningElement {
  @api todoName;
  @api todoId;
  @api done = false;

  get containerClass() {
    return this.done ? "todo completed" : "todo upcoming";
  }
}
