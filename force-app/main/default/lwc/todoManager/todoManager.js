import { LightningElement, track } from "lwc";

export default class TodoManager extends LightningElement {
  // track makes the value reactive
  @track time = "8:15 AM";
  @track greeting = "GOOD MORNING!";
  @track todos = [];

  // this is like useEffect
  // basically means when component mounts to DOM, do this!
  connectedCallback() {
    // setInterval(() => {
    this.getTime();
    this.setGreeting(new Date().getHours());
    this.populateTodos();
    // }, 1000 * 60);
  }

  getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    this.time = `${this.getHour(hours)}:${this.getDoubleDigit(
      minutes
    )} ${this.getMidDay(hours)}`;
  }

  getHour(hour) {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  }

  getMidDay(hour) {
    return hour >= 12 ? "PM" : "AM";
  }

  getDoubleDigit(digit) {
    return digit < 10 ? "0" + digit : digit;
  }

  setGreeting(hour) {
    if (hour < 12) {
      this.greeting = "GOOD MORNING!";
    } else if (hour >= 12 && hour < 17) {
      this.greeting = "GOOD AFTERNOON!";
    } else {
      this.greeting = "GOOD EVENING!";
    }
  }

  addTodoHandler() {
    const inputBox = this.template.querySelector("lightning-input");
    console.log("current value: ", inputBox.value.length);

    if (typeof inputBox.value === "string" && inputBox.value.length > 0) {
      const todo = {
        todoId: this.todos.length,
        todoName: inputBox.value,
        done: false,
        todoDate: new Date()
      };

      this.todos.push(todo);
      console.log(this.todos);
    }

    inputBox.value = "";
  }

  get upcomingTasks() {
    return this.todos && this.todos.length
      ? this.todos.filter((todo) => !todo.done)
      : [];
  }

  get completedTasks() {
    return this.todos && this.todos.length
      ? this.todos.filter((todo) => todo.done)
      : [];
  }

  deleteHandler() {}

  updateHandler() {}

  populateTodos() {
    const todos = [
      {
        todoId: 0,
        todoName: "Sample",
        done: false,
        todoDate: new Date()
      },
      {
        todoId: 1,
        todoName: "Undone Sample",
        done: true,
        todoDate: new Date()
      }
    ];

    this.todos = todos;
  }
}
