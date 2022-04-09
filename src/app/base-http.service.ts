//GENERICOS
import axios from 'axios';

import { Category } from './models/category.model'
import { Product } from './models/product.model';
import { UpdateProductDto } from './dtos/product.dto';

export class BaseHttpService<TypeClass>{
  constructor(protected url: string) { }

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}


(async ()=>{
//LO IMPORTANTE DE ESTO ESQUE NO FUE NECESARIO CONSTRUIR UN:
//ProductServiHttp o CategoryServiceHttp
//el lo coje de manera generica, y podemos mandar el tipado que esperamos

  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productsService = new BaseHttpService<Product>(url1);

  const rta = await productsService.getAll();
  console.log('products', rta.length);
  productsService.update<Product['id'], UpdateProductDto>(1, {
    title: 'nuevo nombre',
  });

  //
  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);

  const rta1 = await categoryService.getAll();
  console.log('categories', rta1.length);


})()














