export class MyDate {
  author = 'GC'; //public
  constructor(
    public year: number = 2006,
    public month: number = 7,
    private day: number = 9
  ){}

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number){
    return value < 10 ? `0${value}` : `${value}`;
  }

  //este no es el algoritmo correcto para sumar fechas, solo sirve de ejemplo de metodos
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
  getDay(){
    return this.day;
  }
  getAuthor(){
    return this.author;
  }
}

const myDate = new MyDate(2022, 2, 10); //yyyy, mm, dd
console.log(myDate.printFormat());

const myDate2 = new MyDate(2020); //yyyy, mm, dd
console.log(myDate2.printFormat());

console.log(myDate.author, myDate.getAuthor());

