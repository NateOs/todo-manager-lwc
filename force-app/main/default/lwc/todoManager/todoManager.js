import { LightningElement, track } from "lwc";

export default class TodoManager extends LightningElement {
  // track makes the value reactive
  @track time = "8:15 AM";
  @track greeting = "GOOD MORNING!";

  // this is like useEffect
  // basically means when component mounts to DOM, do this!
  connectedCallback() {
    setInterval(() => {
      this.getTime();
      this.setGreeting(new Date().getHours());
    }, 1000 * 60);
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
}
