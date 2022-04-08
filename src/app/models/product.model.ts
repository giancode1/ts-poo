import { Category } from './category.model';

export interface Product {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    Category;
  images:      string[];
  categoryId:  number;
}



// Converts JSON strings to/from your types
// export class Convert {
//   public static toProduct(json: string): Product {
//       return JSON.parse(json);
//   }

//   public static productToJson(value: Product): string {
//       return JSON.stringify(value);
//   }
// }
