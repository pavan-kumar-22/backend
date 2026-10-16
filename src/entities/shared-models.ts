/**
 * Vuyyuru Carpentry - Batch 1 Shared Data Models & Database Schemas
 * Standardized across Home (01), Catalogue (02), Search (03), Product Details (04),
 * and Custom Furniture Request (05).
 */

// -------------------------------------------------------------
// 1. BusinessSettings Entity
// -------------------------------------------------------------
export interface BusinessSettings {
  id: string;
  businessName: string;
  tagline: string;
  description: string;
  foundedYear: number;
  contact: {
    phone: string; // "+91 8639731477"
    phoneRaw: string; // "9440281734"
    whatsapp: string; // "918639731477"
    whatsappUrl: string;
    email: string;
    address: {
      street: string;
      landmark: string;
      town: string;
      mandal: string;
      district: string;
      state: string;
      postalCode: string;
    };
    serviceAreas: string[]; // ["Vuyyuru", "Vijayawada", "Guntur", "Tenali", "Mangalagiri", ...]
    workshopHours: {
      weekdays: string;
      sundays: string;
    };
  };
  announcement?: {
    enabled: boolean;
    text: string;
    linkUrl?: string;
  };
  privacyNoticeVersion: string; // "v2026.1"
  updatedAt: string;
}

// -------------------------------------------------------------
// 2. Category Entity & Indexes
// Index: { slug: 1 } (unique)
// Index: { isActive: 1, sortOrder: 1 }
// -------------------------------------------------------------
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  featuredImageUrl?: string;
  isActive: boolean;
  sortOrder: number;
  itemCount?: number;
  createdAt: string;
  updatedAt: string;
}

// -------------------------------------------------------------
// 3. MediaAsset Entity & Indexes
// Index: { uploaderId: 1, accessClassification: 1 }
// Index: { safeStorageName: 1 } (unique)
// Index: { createdAt: -1 }
// -------------------------------------------------------------
export type MediaAccessClassification = 'public_portfolio' | 'private_enquiry_reference' | 'admin_internal';

export interface MediaAsset {
  id: string;
  filename: string;
  safeStorageName: string; // e.g. "ref_1792144000_abc123.jpg"
  url: string;
  contentType: string; // "image/jpeg" | "image/png" | "image/webp"
  sizeBytes: number;
  uploaderId?: string | null; // null for guest enquiries
  accessClassification: MediaAccessClassification;
  altText?: string;
  createdAt: string;
}

// -------------------------------------------------------------
// 4. Product Entity & Indexes
// Index: { slug: 1 } (unique)
// Index: { status: 1, visibility: 1 }
// Index: { categorySlug: 1, status: 1 }
// Index: { salePricePaise: 1, startingPricePaise: 1 }
// Text Index: { name: "text", shortDescription: "text", sku: "text", woodSpecies: "text" }
// -------------------------------------------------------------
export type PriceMode = 'fixed' | 'starting_from' | 'quote_required';
export type ProductStatus = 'draft' | 'active' | 'archived';
export type ProductVisibility = 'public' | 'private';

export interface ProductDimensions {
  standard: {
    widthInches: number;
    heightInches: number;
    depthInches: number;
    widthMm?: number;
    heightMm?: number;
    depthMm?: number;
    summary: string;
  };
  customizable: boolean;
  minWidthInches?: number;
  maxWidthInches?: number;
  minHeightInches?: number;
  maxHeightInches?: number;
  minDepthInches?: number;
  maxDepthInches?: number;
}

export interface ProductSizeOption {
  id: string;
  label: string;
  dimensionsSummary: string;
  priceDiffPaise?: number; // Integer paise
}

export interface ProductGalleryAsset {
  url: string;
  alt: string;
  caption?: string;
  isPrimary?: boolean;
}

export interface OrderingStep {
  step: number;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription?: string;
  categoryId: string;
  categorySlug: string;
  categoryName: string;
  primaryImage: {
    url: string;
    alt: string;
  } | null;
  galleryImages: ProductGalleryAsset[];
  priceMode: PriceMode;
  salePricePaise?: number; // Integer paise (e.g. 4850000 = ₹48,500)
  startingPricePaise?: number;
  currency: 'INR';
  status: ProductStatus;
  visibility: ProductVisibility;
  woodSpecies: string[]; // ["Burma Teak", "CP Teakwood"]
  supportedWoodSpecies?: string[];
  dimensionsSummary?: string;
  dimensions?: ProductDimensions;
  finishType?: string;
  supportedFinishes?: string[];
  supportedSizes?: ProductSizeOption[];
  isCustomizable: boolean;
  leadTimeWeeks: number;
  availabilityLabel?: 'Made to Order' | 'Showroom Sample' | 'Crafted upon Booking';
  inclusions?: string[];
  exclusions?: string[];
  hardwareSpecs?: string[];
  deliveryNotice?: string;
  orderingSteps?: OrderingStep[];
  // Internal costing & margin fields (STRICTLY STRIPPED from public API responses)
  supplierCostPaise?: number;
  grossMarginPercentage?: number;
  internalNotes?: string;
  createdAt: string;
  updatedAt: string;
}

// -------------------------------------------------------------
// 5. ProductEnquiry Entity & Indexes
// Index: { productId: 1, status: 1 }
// Index: { customerPhone: 1 }
// Index: { enquiryId: 1 } (unique)
// Index: { createdAt: -1 }
// -------------------------------------------------------------
export interface ProductEnquiry {
  id: string;
  enquiryId: string; // e.g. "ENQ-2026-4821"
  productId: string;
  productSlug: string;
  productName: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  deliveryTown: string;
  requestedOptions: {
    woodSpecies?: string;
    finish?: string;
    sizeVariant?: string;
    customDimensions?: string;
  };
  quantity: number;
  message: string;
  status: 'received' | 'reviewing' | 'contacted' | 'quoted' | 'closed';
  createdAt: string;
  updatedAt: string;
}

// -------------------------------------------------------------
// 6. Custom Furniture Enquiry Entity & Indexes
// Index: { reference: 1 } (unique)
// Index: { status: 1 }
// Index: { "customer.phone": 1 }
// Index: { "site.area": 1 }
// Index: { createdAt: -1 }
// -------------------------------------------------------------
export type FurnitureType =
  | 'bed'
  | 'wardrobe'
  | 'table'
  | 'door'
  | 'shelf'
  | 'tv_unit'
  | 'kitchen_cabinet'
  | 'pooja_unit'
  | 'partition'
  | 'commercial_fixture'
  | 'other';

export type DimensionConfidence = 'measured' | 'approximate' | 'not_sure';
export type SiteVisitRequested = 'yes' | 'no' | 'advise_me';
export type PreferredContactMethod = 'phone' | 'whatsapp' | 'email';
export type PreferredTimeWindow = 'morning' | 'afternoon' | 'evening';
export type ProjectNature = 'new' | 'replacement' | 'repair_mod';
export type UrgencyLevel = 'flexible' | 'within_month' | 'one_to_two_months' | 'urgent';

export type EnquiryStatus =
  | 'received'
  | 'reviewing'
  | 'clarification_needed'
  | 'site_visit_pending'
  | 'quoted'
  | 'accepted'
  | 'declined'
  | 'closed';

export interface CustomFurnitureEnquiry {
  id: string;
  reference: string; // "VC-REQ-2026-XXXX"
  status: EnquiryStatus;
  customerId?: string | null; // Optional registered user link
  requirements: {
    furnitureType: FurnitureType;
    customFurnitureType?: string;
    room?: string;
    description: string;
    quantity: number;
    projectNature?: ProjectNature;
    urgency?: UrgencyLevel;
    dimensions: {
      widthMm?: number;
      heightMm?: number;
      depthMm?: number;
      confidence: DimensionConfidence;
    };
    materialPreference?: string;
    finishPreference?: string;
    colorPreference?: string;
    features?: string[];
    referenceUrl?: string;
  };
  site: {
    area: string;
    visitRequested: SiteVisitRequested;
    preferredDate?: string | null;
    preferredTimeWindow?: PreferredTimeWindow | null;
    accessNotes?: string;
  };
  customer: {
    name: string;
    phone: string;
    whatsappAvailable: boolean;
    email?: string;
    preferredContactMethod: PreferredContactMethod;
  };
  consent: {
    contactForThisEnquiry: boolean;
    marketingOptIn: boolean;
    privacyNoticeVersion: string;
    consentedAt: string;
  };
  referencePhotos?: MediaAsset[];
  quotationId?: string | null; // Linked after quotation generation
  createdAt: string;
  updatedAt: string;
}

// -------------------------------------------------------------
// 7. Future Quotation / Job Linkage Entity (Admin Workflow)
// Index: { quotationNumber: 1 } (unique)
// Index: { enquiryId: 1 }
// Index: { status: 1 }
// -------------------------------------------------------------
export type QuotationStatus =
  | 'draft'
  | 'provisional_pending_measurement'
  | 'ready_for_customer'
  | 'sent'
  | 'accepted'
  | 'declined'
  | 'expired';

export interface QuotationLineItem {
  itemId: string;
  itemDescription: string;
  timberSpecies: string; // "Seasoned Burma Teak"
  finishType: string;
  dimensionsMm: {
    width: number;
    height: number;
    depth: number;
  };
  quantity: number;
  materialCostPaise: number;
  laborJoineryCostPaise: number;
  finishingCostPaise: number;
  hardwareCostPaise: number;
  totalPaise: number;
}

export interface Quotation {
  id: string;
  quotationNumber: string; // e.g. "VC-QUO-2026-0812"
  enquiryId: string;
  enquiryReference: string;
  customerId?: string | null;
  status: QuotationStatus;
  scopeSummary: string;
  isSiteMeasurementVerified: boolean;
  lineItems: QuotationLineItem[];
  subtotalPaise: number;
  transportInstallationPaise: number;
  gstPaise?: number;
  grandTotalPaise: number;
  paymentMilestones: {
    advancePercentage: 50; // 50% upon joinery contract signing
    timberInspectionPercentage: 40; // 40% after carcass inspection at Vuyyuru workshop
    installationSignoffPercentage: 10; // 10% after white-glove delivery & level check
  };
  validityDays: 15;
  issuedAt?: string;
  expiresAt?: string;
  createdAt: string;
  updatedAt: string;
}

// -------------------------------------------------------------
// Standard Error Response Specification
// -------------------------------------------------------------
export interface StandardApiError {
  code:
  | 'VALIDATION_ERROR'
  | 'NOT_FOUND'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'CONFLICT'
  | 'RATE_LIMITED'
  | 'INTERNAL_ERROR';
  message: string;
  fieldErrors?: Record<string, string>;
}

export interface StandardErrorResponse {
  error: StandardApiError;
  timestamp: string;
}
