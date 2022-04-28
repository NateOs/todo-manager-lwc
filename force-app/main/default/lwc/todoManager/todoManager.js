import { LightningElement } from "lwc";

export default class TodoManager extends LightningElement {
  time = "8:15 PM";
  greeting = "GOOD EVENING!";

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
