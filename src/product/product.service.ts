import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {
  }

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findPaginated(page?: number, name?: string) {
    const pageSize = 50;
    return this.productRepository.findAndCount({
      where: {name: ILike(`%${name}%`)},
      take: pageSize,
      skip: pageSize * (page ?? 0)
    });
  }

  async findAll(name?: string) {
    const where = {};
    if (name) {
      where['name'] = ILike(`%${name}%`);
    }
    return await this.productRepository.find({
      where
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
