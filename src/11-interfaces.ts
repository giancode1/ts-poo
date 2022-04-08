//en las clases las interfaces me sirven para tipar los aributos y metodos de la clase
export interface Driver{
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnect(name:string): boolean;

}

// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 23
// }


class OracleDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: string
  ){}
  connect(): void{

  }
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnect(name: string): boolean {
    throw new Error("Method not implemented.");
  }

}






