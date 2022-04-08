import { ProductMemoyService } from './service/product-memory.service';

const productService = new ProductMemoyService();

productService.create({
  title: 'Producto 1',
  price: 100,
  description: 'Descripcion del producto 1',
  categoryId: 1,
  images: []
});

const products = productService.getAll();
const productId = products[0].id;

productService.update(productId, {
  title: 'Mi Producto 1',
});

const rta = productService.findOne(productId);
console.log("rta:", rta);









