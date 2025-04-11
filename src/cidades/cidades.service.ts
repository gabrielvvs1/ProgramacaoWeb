import { Injectable } from '@nestjs/common';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';
import { Repository } from 'typeorm';
import { Cidade } from './entities/cidade.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CidadesService {
  constructor(
    @InjectRepository(Cidade)
    private readonly repository: Repository<Cidade>
  ) {

  }
  create(dto: CreateCidadeDto) {
    const cidade = this.repository.create(dto);
    return this.repository.save(cidade);
    
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, updateCidadeDto: UpdateCidadeDto) {
    const cidade = await this.repository.findOneBy({ id }); 

    if (!cidade) return null;

    this.repository.merge(cidade, updateCidadeDto);
    return this.repository.save(cidade);
  }

  async remove(id: number) {
    const cidade = await this.repository.findOneBy({ id });

    if (!cidade) return null;

    return this.repository.remove(cidade);
  }
}
