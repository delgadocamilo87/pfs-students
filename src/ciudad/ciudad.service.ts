import { Injectable } from '@nestjs/common';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Ciudad } from './entities/ciudad.entity';

@Injectable()
export class CiudadService {
  private ciudades : Ciudad[] = [];

  constructor (@InjectRepository(Ciudad)
      private readonly ciudadRepository : Repository<Ciudad>) {}

      public async getAll() : Promise<Ciudad[]> {
        let ciudades: Ciudad[] = await this.ciudadRepository.find( );
        return this.ciudades;
}

      public async getById(id : number) : Promise<Ciudad> {
        const criterio : FindOneOptions = { where: { idCiudad: id } }
        let ciudad : Ciudad = await this.ciudadRepository.findOne( criterio );
        if (ciudad)
            return ciudad;
}

}
