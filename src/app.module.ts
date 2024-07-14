import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CacheModule } from '@nestjs/cache-manager';
import { HelpersModule } from './app/helpers/helpers.module';
import { AuthModule } from './app/modules/auth/auth.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ExceptionFilter } from './app/filters';
import { ResponseInterceptor } from './app/interceptors/response.interceptor';

const MODULES = [
  CacheModule.register({ isGlobal: true }),
  DatabaseModule,
  HelpersModule,
  AuthModule,
];

@Module({
  imports: [...MODULES],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: ExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
