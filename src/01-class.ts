const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(1995, 10, 12);
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date);
console.log(date2);

let myVar;

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2022, 2, 10);
console.log(myDate);
