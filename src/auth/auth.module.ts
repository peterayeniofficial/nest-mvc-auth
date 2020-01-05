import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthService],
  exports: [AuthModule],
})
export class AuthModule {}
