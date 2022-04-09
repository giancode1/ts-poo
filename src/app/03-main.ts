import { ProductHttpService } from './service/product-http.service'

(async()=>{
  const productService = new ProductHttpService(); //podria ser un singleton

  try {
    const products = await productService.getAll();
    console.log(products.length);
    // console.log(products.map(item => item.price));

    const productId = products[0].id;

    await productService.update(productId, {
      price: 200,
      title: 'Mi Producto 0'
    })

    console.log(await productService.findOne(productId)); //actualizado!

  } catch (error) {
    console.log(error);
  }

})()














