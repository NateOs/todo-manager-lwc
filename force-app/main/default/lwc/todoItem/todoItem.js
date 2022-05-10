import { LightningElement, api } from "lwc";
import updateTodo from "@salesforce/apex/ToDoController.updateTodo";
import deleteTodo from "@salesforce/apex/ToDoController.deleteTodo";

export default class TodoItem extends LightningElement {
  @api todoName;
  @api todoId;
  @api done = false;

  get containerClass() {
    return this.done ? "todo completed" : "todo upcoming";
  }

  get iconName() {
    return this.done ? "utility:check" : "utility:add";
  }

  updateHandler() {
    const todo = {
      todoId: this.todoId,
      todoName: this.todoName,
      done: !this.done
    };

    updateTodo({ payload: JSON.stringify(todo) })
      .then((response) => {
        console.log("Item updated successfully", response);
      })
      .catch((err) => {
        console.log("error in update", err.body.message[0].pageErrors[0]);
      });
    console.log(this.todoId);

    const updateEvent = new CustomEvent("update");
    this.dispatchEvent(updateEvent);
  }

  deleteHandler() {
    deleteTodo({ todoId: this.todoId })
      .then((response) => {
        console.log("Item deleted successfully", response);
      })
      .catch((err) => {
        console.error("error in delete", err);
      });
    console.log(this.todoId);

    const deleteEvent = new CustomEvent("update");
    this.dispatchEvent(deleteEvent);
  }
}
