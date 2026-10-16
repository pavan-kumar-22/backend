import { Module } from '@nestjs/common';
import { PublicController } from './public.controller.js';
import { CartController } from './cart.controller.js';
import { CheckoutController } from './checkout.controller.js';
import { PublicService } from './public.service.js';

@Module({
  controllers: [PublicController, CartController, CheckoutController],
  providers: [PublicService],
  exports: [PublicService],
})
export class PublicModule {}
