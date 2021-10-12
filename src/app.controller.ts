import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/auth.local.guard';

@Controller('auth')
export class AppController {
  // @UseGuards(AuthGuard('local'))
@UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    console.log('....find me here-----', req.body)
    return req.body;
  }
}