import axios from 'axios';

import { Category } from './models/category.model'
import { Product } from './models/product.model';

export class BaseHttpService<TypeClass>{
  //data: TypeClass[] = [];  //ejm: data:number[] o data:string[]  y asi

  constructor(private url: string) { }


  // async getAll(): Promise<TypeClass[]> {
  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }
}

// const service = new BaseHttpService<string>()
// service.data //me da el tipado de string[]
// service.getAll()

// const service1 = new BaseHttpService<number>()
// service1.data //me da el tipado de number[]

// const service2 = new BaseHttpService<Category>()
// service2.data //me da el tipado de number[]

(async ()=>{
//LO IMPORTANTE DE ESTO ESQUE NO FUE NECESRIO CONSTRUIR UN
//ProductServiHttp o CategoryServiceHttp
//el lo coje de manera generica, y podemos mandar el tipado que esperamos

  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productsService = new BaseHttpService<Product>(url1);

  const rta = await productsService.getAll();
  console.log('products', rta.length);

  //
  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);

  const rta1 = await categoryService.getAll();
  console.log('categories', rta1.length);
})()














