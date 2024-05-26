import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }


  @Get()
  async findAll(
    @Query('name') name?: string,
  ) {
    return await this.productService.findAll(name);
  }

  @Get('/paginated')
  findPaginated(
    @Query('name') name?: string,
    @Query('page') page?: number,
  ) {
    return this.productService.findPaginated(page, name);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }

  @Post('/calculate-list')
  calculateList(@Body() calculateListDto: CreateProductDto) {
    return this.productService.create(calculateListDto);
  }
}
