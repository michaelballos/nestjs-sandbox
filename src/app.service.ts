import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getFucker(): string {
    return 'Hello Fucker!';
  }
}
