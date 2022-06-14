import { Injectable } from '@nestjs/common';
import { GenerateQrcodeDto } from './dto/generateQrcode.dto';
import nodeHtmlToImage from 'node-html-to-image';

@Injectable()
export class QrcodeService {
  generate() {
    return nodeHtmlToImage({
      html: '<html lang="en"><body>This is Qrcode 🫥</body></html>'
    });
  }
}
