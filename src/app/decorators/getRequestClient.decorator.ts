import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetRequestClient = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): any => {
    const request = ctx.switchToHttp().getRequest();
    return request.headers['x-request-client'];
  },
);
