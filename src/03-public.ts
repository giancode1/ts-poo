export class MyDate {
  public year: number;  //esta de forma explicita
  public month: number;  //por defecto es publico, implicito
  public day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string{
    return `${this.day}/${this.month}/${this.year}`;
  }
  //este no es el algoritmo correcto para sumar fechas, solo sirve de ejemplo
  add(amount: number, type: 'days' | 'months' | 'years'){
    if(type === 'days'){
      this.day += amount;
    }
    if(type === 'months'){
      this.month += amount;
    }
    if(type === 'years'){
      this.year += amount;
    }
  }
}

const myDate = new MyDate(2022, 2, 10); //yyyy, mm, dd

myDate.day = 30 //al ser publico puedo modificarlo
console.log('day', myDate.day);

