import axios from 'axios';

import { Product } from './models/product.model'

let annyVar: any = 12;
let boolVar: boolean = true;

(async () => {

  // async function getProducts(): Promise<Product[]> {
  async function getProducts(){
    //axios soporta tipado
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    //code
    //sino soportara
    //const data = rta.data as product[];  //fuerzas el tipado de esta manera
    return data;
  }


  const products = await getProducts()
  console.log(products.map(item => `${item.id} - ${item.title}`));

})();
