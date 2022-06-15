import { Controller, Get, Res } from '@nestjs/common';
import { QrcodeService } from './qrcode.service';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('qrcode')
@Controller('qrcode')
export class QrcodeController {
  constructor(private readonly qrcodeService: QrcodeService) {}

  @Get()
  async create(@Res() res: Response) {
    const image = await this.qrcodeService.generate();
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(image, 'base64');
  }
}
