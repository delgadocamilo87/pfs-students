import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadModule } from './ciudad/ciudad.module';
import { EscuelaModule } from './escuela/escuela.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { ProfesoresModule } from './profesores/profesores.module';


@Module({ 
  imports: [
    TypeOrmModule.forRoot( {
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "*************",
      "database": "escolar",
      "entities": [
            "dist/**/**.entity{.ts,.js}"
      ],
      "synchronize": false
                     } ),
    CiudadModule,
    EscuelaModule,
    EstudiantesModule,
    ProfesoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
