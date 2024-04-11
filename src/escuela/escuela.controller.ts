import { Controller } from '@nestjs/common';
import { EscuelaService } from './escuela.service';

@Controller('escuela')
export class EscuelaController {
  constructor(private readonly escuelaService: EscuelaService) {}
}
