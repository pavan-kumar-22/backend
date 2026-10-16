import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Headers,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PublicService } from './public.service.js';

@Controller('api/cart')
export class CartController {
  constructor(private readonly publicService: PublicService) {}

  private extractSessionId(headerSession?: string): string {
    return (headerSession && headerSession.trim()) || 'demo_guest_session';
  }

  @Get()
  getCart(@Headers('x-cart-session-id') sessionId?: string) {
    return this.publicService.getCart(this.extractSessionId(sessionId));
  }

  @Post('items')
  addItem(
    @Headers('x-cart-session-id') sessionId: string | undefined,
    @Body() payload: { productId: string; quantity?: number; selectedWoodSpecies?: string; selectedFinish?: string }
  ) {
    const result = this.publicService.addItemToCart(this.extractSessionId(sessionId), payload);
    if (!result.success) {
      throw new BadRequestException(result.error);
    }
    return result.cart;
  }

  @Patch('items/:itemId')
  updateItem(
    @Headers('x-cart-session-id') sessionId: string | undefined,
    @Param('itemId') itemId: string,
    @Body('quantity') quantity: number
  ) {
    const result = this.publicService.updateCartItem(this.extractSessionId(sessionId), itemId, quantity);
    if (!result.success) {
      throw new BadRequestException(result.error);
    }
    return result.cart;
  }

  @Delete('items/:itemId')
  removeItem(
    @Headers('x-cart-session-id') sessionId: string | undefined,
    @Param('itemId') itemId: string
  ) {
    const result = this.publicService.removeCartItem(this.extractSessionId(sessionId), itemId);
    if (!result.success) {
      throw new BadRequestException(result.error);
    }
    return result.cart;
  }

  @Delete()
  clearCart(@Headers('x-cart-session-id') sessionId?: string) {
    const result = this.publicService.clearCart(this.extractSessionId(sessionId));
    return result.cart;
  }

  @Post('coupon')
  applyCoupon(
    @Headers('x-cart-session-id') sessionId: string | undefined,
    @Body('code') code: string
  ) {
    const result = this.publicService.applyCartCoupon(this.extractSessionId(sessionId), code);
    if (!result.success) {
      throw new BadRequestException(result.error);
    }
    return result.cart;
  }

  @Delete('coupon')
  removeCoupon(@Headers('x-cart-session-id') sessionId?: string) {
    const result = this.publicService.removeCartCoupon(this.extractSessionId(sessionId));
    return result.cart;
  }
}
