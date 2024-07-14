import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiBadRequestResponse,
  ApiExcludeEndpoint,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiServiceUnavailableResponse,
} from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Check API status' })
  @ApiOkResponse({ description: 'The service is operating correctly' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  @ApiBadRequestResponse({ description: 'Communication error with the server' })
  @ApiServiceUnavailableResponse({
    description: 'The service is not available',
  })
  @HttpCode(HttpStatus.OK)
  @ApiExcludeEndpoint()
  @Get()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
