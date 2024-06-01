import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { LaboratoriesController } from './laboratories/laboratories.controller';
import { LaboratoriesModule } from './laboratories/laboratories.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LaboratoriesModule,
    AuthModule,
  ],
  controllers: [AppController, LaboratoriesController],
  providers: [AppService, AuthService],
  exports: [AppService],
})
export class AppModule {}
