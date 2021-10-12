import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/auth.local.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  // @UseGuards(AuthGuard('local'))
  // constructor(private authService: AuthService){}
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    // console.log('------', req);
    return req.body;
  }
}