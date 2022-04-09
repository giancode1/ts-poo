import { Product } from '../models/product.model';
import { UpdateProductDto } from '../dtos/product.dto';
import { ProductHttpService } from './product-http2-service';
import { BaseHttpService } from '../base-http.service';
import { threadId } from 'worker_threads';

export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  // private http = new BaseHttpService<Product>(this.url);
  private http = new ProductHttpService(this.url);

  async update(id: Product['id'], dto: UpdateProductDto){
    //permisos
    //logica
    this.http.otroRequest() //ya tienes todo del basehttp mas el otro request que fue una extension de esa base
    return this.http.update(id, dto);
  }

}












