import { Controller, Param, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('customer')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('profile/:id/:u_id')
  //customer/profile/%/%/
  // @Redirect('https://docs.nestjs.com', 302)
  getHello(@Param() param): string {
    console.log(param);
    return `${param.u_id}`;
    // return this.appService.getHello();
  }
}
