import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('fucker')
@Controller('/fucker')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getFucker(): string {
    return this.appService.getFucker();
  }
}
