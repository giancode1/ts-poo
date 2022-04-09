//capa de validacion
import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validate, validateOrReject } from 'class-validator'
// IsURL : empieza mayus es decorador, minuscula es funcion

import { AccessType, Category } from "../models/category.model";

export interface ICreateCategoryDto extends Omit<Category, 'id'>{}


export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()  //habilita experimentalDecorators: true
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async() => {

  try {
    const dto = new CreateCategoryDto();
    dto.name = 'asdasdas'
    dto.image = 'https://api.escuelajs.co/api/v1/products'  //prodriamos ser mas estrictos como que termine en .jpg
    await validateOrReject(dto); //valida, muestra errores, si no hay errores, continua
  } catch (error) {
    console.log(error);
  }

})();
//npx ts-node src/app/dtos/category.dto.ts
//me dice los errores de validacion
//si no hay errores, no me dice nada
