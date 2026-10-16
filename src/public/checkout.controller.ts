import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Headers,
  Query,
  BadRequestException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PublicService } from './public.service.js';

@Controller('api')
export class CheckoutController {
  constructor(private readonly publicService: PublicService) {}

  private extractSessionId(headerSession?: string): string {
    return (headerSession && headerSession.trim()) || 'demo_guest_session';
  }

  @Get('public/fulfilment-options')
  getFulfilmentOptions() {
    return {
      success: true,
      data: this.publicService.getFulfilmentOptions(),
    };
  }

  @Post('checkout/validate')
  validateCheckout(
    @Headers('x-cart-session-id') sessionId: string | undefined,
    @Body() body: any
  ) {
    const activeSession = body.guestSessionId || this.extractSessionId(sessionId);
    return {
      success: true,
      data: this.publicService.validateCheckout(activeSession, body.fulfilmentMethod, body.couponCode),
    };
  }

  @Post('orders')
  createOrder(
    @Headers('x-cart-session-id') sessionId: string | undefined,
    @Headers('idempotency-key') idempotencyHeader: string | undefined,
    @Body() body: any
  ) {
    const activeSession = body.guestSessionId || this.extractSessionId(sessionId);
    const key = body.idempotencyKey || idempotencyHeader;
    const result = this.publicService.createOrder(activeSession, { ...body, idempotencyKey: key });

    if (!result.success) {
      throw new BadRequestException(result.error);
    }
    return {
      success: true,
      data: result.order,
    };
  }

  @Get('orders/:orderId')
  getOrder(
    @Param('orderId') orderId: string,
    @Query('token') token?: string,
    @Headers('x-cart-session-id') sessionId?: string
  ) {
    const result = this.publicService.getOrderById(orderId, token, sessionId);
    if (!result.success) {
      if (result.statusCode === 403) {
        throw new ForbiddenException(result.error);
      }
      throw new NotFoundException(result.error);
    }
    return {
      success: true,
      data: result.order,
    };
  }

  @Post('payments/session')
  createPaymentSession(@Body() body: any) {
    const result = this.publicService.createPaymentSession(body);
    if (!result.success) {
      throw new BadRequestException(result.error);
    }
    return {
      success: true,
      data: result.session,
    };
  }
}
