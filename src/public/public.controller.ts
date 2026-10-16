import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PublicService } from './public.service.js';

@Controller('api/public')
export class PublicController {
  constructor(private readonly publicService: PublicService) {}

  @Get('site-settings')
  getSiteSettings() {
    return {
      success: true,
      data: this.publicService.getSiteSettings(),
      timestamp: new Date().toISOString(),
    };
  }

  @Get('categories')
  getCategories(@Query('active') active?: string) {
    const activeOnly = active !== 'false';
    return {
      success: true,
      data: this.publicService.getCategories(activeOnly),
      timestamp: new Date().toISOString(),
    };
  }

  @Get('products/featured')
  getFeaturedProducts(@Query('limit') limitStr?: string) {
    const limit = limitStr ? parseInt(limitStr, 10) : 6;
    return this.publicService.getFeaturedProducts(limit);
  }

  @Get('projects')
  getProjects(
    @Query('featured') featured?: string,
    @Query('category') category?: string,
    @Query('search') search?: string,
    @Query('page') pageStr?: string,
    @Query('limit') limitStr?: string
  ) {
    const limit = limitStr ? parseInt(limitStr, 10) : 12;
    const page = pageStr ? parseInt(pageStr, 10) : 1;
    if (featured === 'true') {
      return this.publicService.getFeaturedProjects(limit);
    }
    return this.publicService.getProjects({ category, search, page, limit });
  }

  @Get('projects/:slug')
  getProjectBySlug(@Param('slug') slug: string) {
    return this.publicService.getProjectBySlug(slug);
  }

  @Get('about')
  getAboutContent() {
    return this.publicService.getAboutContent();
  }

  @Get('products')
  getProducts(
    @Query('category') category?: string,
    @Query('priceMode') priceMode?: string,
    @Query('priceMin') priceMinStr?: string,
    @Query('priceMax') priceMaxStr?: string,
    @Query('search') search?: string,
    @Query('sort') sort?: string,
    @Query('page') pageStr?: string,
    @Query('limit') limitStr?: string
  ) {
    const priceMin = priceMinStr ? parseFloat(priceMinStr) : undefined;
    const priceMax = priceMaxStr ? parseFloat(priceMaxStr) : undefined;
    const page = pageStr ? parseInt(pageStr, 10) : 1;
    const limit = limitStr ? parseInt(limitStr, 10) : 12;

    return this.publicService.getProducts({
      category,
      priceMode,
      priceMin,
      priceMax,
      search,
      sort,
      page,
      limit,
    });
  }

  @Get('products/filters')
  getProductFilters() {
    return {
      success: true,
      data: this.publicService.getProductFilters(),
      timestamp: new Date().toISOString(),
    };
  }

  @Get('search')
  search(
    @Query('q') q?: string,
    @Query('type') type?: 'all' | 'products' | 'services',
    @Query('page') pageStr?: string,
    @Query('limit') limitStr?: string
  ) {
    const page = pageStr ? parseInt(pageStr, 10) : 1;
    const limit = limitStr ? parseInt(limitStr, 10) : 12;
    return this.publicService.searchUnified({
      q: q || '',
      type: type || 'all',
      page,
      limit,
    });
  }

  @Get('products/:slug')
  getProductBySlug(@Param('slug') slug: string) {
    const product = this.publicService.getProductBySlug(slug);
    if (!product) {
      throw new NotFoundException('Product not found or is no longer available to the public');
    }
    return product;
  }

  @Post('product-enquiries')
  submitProductEnquiry(@Body() body: any) {
    const result = this.publicService.submitProductEnquiry(body);
    if (!result.success) {
      throw new BadRequestException(result.error);
    }
    return result.data;
  }

  @Post('enquiries/custom-furniture')
  submitCustomFurnitureEnquiry(@Body() body: any) {
    const result = this.publicService.submitCustomFurnitureEnquiry(body);
    if (!result.success) {
      throw new BadRequestException(result.error);
    }
    return result.data;
  }

  @Post('enquiries')
  submitGeneralEnquiry(@Body() body: any) {
    const result = this.publicService.submitGeneralEnquiry(body);
    if (!result.success) {
      throw new BadRequestException(result.error);
    }
    return result.data;
  }

  @Post('site-visit-requests')
  submitSiteVisitRequest(@Body() body: any) {
    const result = this.publicService.submitGeneralEnquiry(body);
    if (!result.success) {
      throw new BadRequestException(result.error);
    }
    return result.data;
  }

  @Get('services')
  getServices(@Query('category') category?: string) {
    const items = this.publicService.getPublicServices(category);
    return {
      success: true,
      items,
      count: items.length,
      timestamp: new Date().toISOString(),
    };
  }

  @Get('services/:slug')
  getServiceBySlug(@Param('slug') slug: string) {
    const service = this.publicService.getPublicServiceBySlug(slug);
    if (!service) {
      throw new NotFoundException('Service not found or is currently inactive');
    }
    return service;
  }

  @Get('service-faqs')
  getServiceFaqs() {
    const items = this.publicService.getPublicServiceFaqs();
    return {
      success: true,
      items,
      count: items.length,
      timestamp: new Date().toISOString(),
    };
  }
}
