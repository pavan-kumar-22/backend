import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PublicService {
  getSiteSettings() {
    return {
      businessName: 'Vuyyuru Carpentry',
      tagline: 'Handcrafted Solid Teak Furniture & Architectural Joinery in Andhra Pradesh',
      serviceAreaSummary:
        'Headquartered in Vuyyuru town. Providing workshop fabrication and on-site carpentry across Vuyyuru, Vijayawada, Guntur, and nearby Krishna/NTR districts subject to travel feasibility.',
      announcement: {
        enabled: true,
        text: 'Now scheduling custom woodwork consultations for upcoming house-warmings across Vuyyuru & Vijayawada region.',
        linkUrl: '/custom-furniture',
      },
      contact: {
        phone: '+91 8639731477',
        phoneRaw: '+918639731477',
        whatsapp: '918639731477',
        email: 'namaste@vuyyurucarpentry.in',
        address: {
          line1: 'Near RTC Bus Stand, Main Bazar Road',
          town: 'Vuyyuru',
          district: 'Krishna District',
          state: 'Andhra Pradesh',
          pincode: '521165',
        },
        workingHours: 'Mon – Sat: 8:30 AM to 7:30 PM (Sunday site visits by advance appointment)',
      },
      hero: {
        badge: 'CUSTOM CARPENTRY · VUYYURU & SUITABLE NEARBY AREAS',
        heading: 'Made for your space. Built with care.',
        subheading:
          'Repairs, custom furniture, doors, wardrobes, kitchens and carpentry finishing. Handcrafted by experienced local artisans with genuine seasoned timber.',
        primaryCtaText: 'Request a custom quote',
        primaryCtaLink: '/custom-furniture',
        secondaryCtaText: 'Browse products',
        secondaryCtaLink: '/products',
        heroImage: {
          url: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80',
          alt: 'Artisanal carpenter hand-planning seasoned teak wood in workshop',
          credit: 'Vuyyuru Carpentry Workshop Bay',
        },
      },
      socialLinks: [
        { platform: 'WhatsApp', url: 'https://wa.me/918639731477' },
        { platform: 'Google Business Profile', url: 'https://maps.google.com' },
      ],
    };
  }

  getAboutContent() {
    return {
      businessName: 'Vuyyuru Carpentry',
      tagline: 'Carpentry Built Around Your Requirements',
      headline: 'Local Carpentry Built Around Your Requirements',
      subheading:
        'A dedicated joinery workshop serving Vuyyuru town and suitable nearby Andhra areas with honest craftsmanship, written quotations, and realistic scheduling.',
      storyParagraphs: [
        'Vuyyuru Carpentry is a community-grounded joinery workshop based in Vuyyuru town, Krishna District, Andhra Pradesh. We specialize in made-to-measure teakwood furniture, residential entrance doors, fitted wardrobes, modular kitchen joinery, and careful structural repairs.',
        'Our operating philosophy is built on three straightforward commitments: clear scope, traceable costs, and honest craftsmanship. Instead of rushing verbal estimates or supplying generic flat-pack panels, we review requirements carefully, verify site measurements, advise on timber species suited to coastal Andhra humidity, and issue written quotations before any work begins.',
        'As an active workshop team of experienced artisans, we prioritize direct service in Vuyyuru mandal, with nearby projects across Vijayawada, Guntur, and Tenali scheduled according to travel feasibility and workshop capacity.',
      ],
      serviceAreaStatement:
        'Headquartered with our active joinery workshop in Vuyyuru town. We serve Vuyyuru mandal first, with nearby projects across Vijayawada, Guntur, Mangalagiri, and Tenali scheduled based on travel feasibility and workshop capacity.',
      values: [
        {
          id: 'val-01',
          title: 'Clear Written Scope',
          description:
            'Every project begins with defined requirements, site measurements where needed, and a transparent written quotation so you know exactly what is included.',
          iconName: 'FileText',
        },
        {
          id: 'val-02',
          title: 'Realistic Commitments',
          description:
            'We commit only to timelines we can reliably honor based on genuine workshop capacity. We do not make false same-day promises or overcommit our artisans.',
          iconName: 'Clock',
        },
        {
          id: 'val-03',
          title: 'Traceable Timber & Materials',
          description:
            'We craft with seasoned hardwoods (Burma and Ghana Teak) and certified boiling water-proof (BWP IS:710) marine plywood, selected to withstand local climatic conditions.',
          iconName: 'TreePine',
        },
        {
          id: 'val-04',
          title: 'Clean Site Respect',
          description:
            'Whether assembling custom wardrobes on site or installing entrance door architraves, our carpenters work neatly, protect adjacent flooring, and leave work areas tidy.',
          iconName: 'Sparkles',
        },
      ],
      processSteps: [
        {
          step: 1,
          title: 'Share Requirements',
          description:
            'Describe what you need online, via WhatsApp, or over the phone. Share photos, room dimensions, or design ideas.',
        },
        {
          step: 2,
          title: 'Scope Review',
          description:
            'We evaluate feasibility, advise on suitable timber and hardware, and determine whether an on-site visit is needed.',
        },
        {
          step: 3,
          title: 'Laser Site Survey',
          description:
            'For kitchens, wardrobes, doors, and built-ins, an artisan visits your site to verify exact dimensions and wall plumb.',
        },
        {
          step: 4,
          title: 'Written Quotation',
          description:
            'You receive an itemized quote detailing timber grades, hardware, milestones, and realistic timelines prior to approval.',
        },
        {
          step: 5,
          title: 'Workshop Joinery & Fit',
          description:
            'Joinery is precision-crafted in our Vuyyuru workshop, followed by careful on-site delivery and professional fitting.',
        },
      ],
      teamStatement:
        'Our workshop operates with a dedicated team of master joiners and apprentices who take personal pride in every mortise, tenon, and hand-rubbed finish.',
      workshopPhoto: {
        url: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef7?auto=format&fit=crop&w=1200&q=80',
        alt: 'Master artisan hand-finishing seasoned teakwood joinery in Vuyyuru workshop',
        caption: 'Active workshop fabrication and precision joinery in Vuyyuru, Andhra Pradesh',
        approvedForPublication: true,
      },
      contactSummary: {
        phone: '+91 94402 81734',
        whatsapp: '+91 94402 81734',
        workshopAddress:
          'Main Road, Near Sri Sai Baba Temple, Vuyyuru, Krishna District, Andhra Pradesh - 521165',
        consultationHours:
          'Monday – Saturday: 8:30 AM – 6:30 PM (Site visits by prior appointment)',
      },
      servicesSummary: {
        title: 'Comprehensive Woodworking Services',
        description:
          'Explore our full range of carpentry services from small residential repairs to whole-house custom woodwork.',
        linkHref: '/services',
        linkText: 'Explore All Services',
      },
    };
  }

  getCategories(activeOnly: boolean = true) {
    const categories = [
      {
        id: 'cat-repairs',
        slug: 'repairs',
        name: 'Repairs & Maintenance',
        shortDescription:
          'Door alignment, squeaking hinges, loose joinery, termite damage inspection, and hardware replacement.',
        iconName: 'Hammer',
        itemCount: 14,
        route: '/services#repairs',
        isActive: true,
      },
      {
        id: 'cat-custom-furniture',
        slug: 'furniture',
        name: 'Custom Teakwood Furniture',
        shortDescription:
          'Solid CP/Burma teak dining tables, cots with hydraulic storage, sofas, and traditional diwans.',
        iconName: 'Sofa',
        itemCount: 28,
        route: '/products?category=furniture',
        isActive: true,
      },
      {
        id: 'cat-doors-wardrobes',
        slug: 'doors-wardrobes',
        name: 'Doors, Frames & Wardrobes',
        shortDescription:
          'Solid teak main entrance doors with brass fittings, flush doors with natural veneer, and modular wardrobes.',
        iconName: 'DoorClosed',
        itemCount: 22,
        route: '/products?category=doors-wardrobes',
        isActive: true,
      },
      {
        id: 'cat-kitchens',
        slug: 'kitchens',
        name: 'Kitchens & Interior Storage',
        shortDescription:
          'BWP 710 marine ply modular carcasses, tandem soft-close drawers, acrylic/laminate shutters, and pantry units.',
        iconName: 'Utensils',
        itemCount: 18,
        route: '/products?category=kitchens',
        isActive: true,
      },
      {
        id: 'cat-finishing',
        slug: 'finishing',
        name: 'Finishing, Polishing & PU',
        shortDescription:
          'Hand-rubbed spirit polish, Italian PU coating (gloss/matte), melamine wood sealing, and vintage restoration.',
        iconName: 'Sparkles',
        itemCount: 11,
        route: '/services#finishing',
        isActive: true,
      },
    ];

    return activeOnly ? categories.filter((c) => c.isActive) : categories;
  }

  getFeaturedProducts(limit: number = 6) {
    const products = [
      {
        id: 'prod-teak-king-cot',
        name: 'Krishna Solid Teak King Bed with Storage',
        slug: 'krishna-solid-teak-king-bed',
        categorySlug: 'furniture',
        categoryName: 'Custom Teakwood Furniture',
        primaryImage: {
          url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
          alt: 'Solid teak king bed frame with headboard detailing',
        },
        woodSpecies: ['CP Teakwood', 'BWP Marine Ply Box'],
        dimensionsSummary: '78" L x 72" W x 42" H (King Size)',
        finishType: 'Natural Teak Melamine Polish',
        priceMode: 'fixed',
        startingPrice: 48500,
        currency: 'INR',
        isCustomizable: true,
        leadTimeWeeks: 3,
        isPublished: true,
      },
      {
        id: 'prod-pooja-mandir',
        name: 'Handcrafted Heritage Pooja Mandir',
        slug: 'handcrafted-heritage-pooja-mandir',
        categorySlug: 'furniture',
        categoryName: 'Custom Teakwood Furniture',
        primaryImage: {
          url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
          alt: 'Intricately crafted wooden mandir temple unit in seasoned teakwood',
        },
        woodSpecies: ['Ghana Teakwood', 'Solid Teak Pillars'],
        dimensionsSummary: 'Customized to room vastu layout',
        finishType: 'Antique Spirit Polish with Brass Bells',
        priceMode: 'quote_required',
        startingPrice: null,
        currency: 'INR',
        isCustomizable: true,
        leadTimeWeeks: 4,
        isPublished: true,
      },
      {
        id: 'prod-dining-table',
        name: 'Amaravati 6-Seater Solid Wood Dining Set',
        slug: 'amaravati-6-seater-solid-wood-dining-set',
        categorySlug: 'furniture',
        categoryName: 'Custom Teakwood Furniture',
        primaryImage: {
          url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80',
          alt: 'Artisan handcrafted solid wood dining table with chairs',
        },
        woodSpecies: ['Seasoned Teakwood', 'Neem wood sub-frame'],
        dimensionsSummary: '72" L x 36" W x 30" H',
        finishType: 'Polyurethane (PU) Matte Clear Coat',
        priceMode: 'fixed',
        startingPrice: 56000,
        currency: 'INR',
        isCustomizable: true,
        leadTimeWeeks: 3,
        isPublished: true,
      },
      {
        id: 'prod-modular-wardrobe',
        name: '4-Door Modular Wardrobe with Loft',
        slug: '4-door-modular-wardrobe-with-loft',
        categorySlug: 'doors-wardrobes',
        categoryName: 'Doors, Frames & Wardrobes',
        primaryImage: {
          url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
          alt: 'Modern wood grain wardrobe with soft-close handles',
        },
        woodSpecies: ['Action TESA HDHMR', '1mm Merino Laminate'],
        dimensionsSummary: '8ft Height x 7ft Width x 2ft Depth',
        finishType: 'Textured Oak & Matte Grey Laminate',
        priceMode: 'quote_required',
        startingPrice: null,
        currency: 'INR',
        isCustomizable: true,
        leadTimeWeeks: 2,
        isPublished: true,
      },
      {
        id: 'prod-teak-main-door',
        name: 'Grand Carved Teak Main Entrance Door',
        slug: 'grand-carved-teak-main-entrance-door',
        categorySlug: 'doors-wardrobes',
        categoryName: 'Doors, Frames & Wardrobes',
        primaryImage: {
          url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
          alt: 'Solid teakwood entrance door with architectural relief framing',
        },
        woodSpecies: ['Burma Teak', 'Heavy Brass Hardware'],
        dimensionsSummary: '7ft x 3.5ft x 38mm thickness',
        finishType: 'Hand-Polished High Gloss PU',
        priceMode: 'quote_required',
        startingPrice: null,
        currency: 'INR',
        isCustomizable: true,
        leadTimeWeeks: 3,
        isPublished: true,
      },
      {
        id: 'prod-modular-kitchen',
        name: 'BWP Marine Ply Modular Kitchen Layout',
        slug: 'bwp-marine-ply-modular-kitchen',
        categorySlug: 'kitchens',
        categoryName: 'Kitchens & Interior Storage',
        primaryImage: {
          url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
          alt: 'Sleek wood and acrylic modular kitchen with pull-out drawers',
        },
        woodSpecies: ['Century Club Prime BWP 710 Ply', 'Acrylic Shutters'],
        dimensionsSummary: 'L-Shape / Parallel layout customized to site',
        finishType: 'Water-resistant acrylic with Hettich Soft-Close',
        priceMode: 'quote_required',
        startingPrice: null,
        currency: 'INR',
        isCustomizable: true,
        leadTimeWeeks: 4,
        isPublished: true,
      },
    ];

    const activePublished = products.filter((p) => p.isPublished);
    return {
      items: activePublished.slice(0, limit),
      total: activePublished.length,
    };
  }

  getFeaturedProjects(limit: number = 6) {
    const projects = [
      {
        id: 'proj-01',
        title: 'Custom Teakwood Living & Mandir Suite',
        slug: 'vuyyuru-residence-teak-suite',
        category: 'Residential Interior Joinery',
        location: 'Vuyyuru Town (Near Sai Baba Temple)',
        year: 2026,
        materialsUsed: ['Burma Teak', 'Marine Plywood', 'Traditional Brass'],
        coverImage: {
          url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
          alt: 'Pooja mandir wood carving work in Vuyyuru residence',
        },
        photoPermissionGranted: true,
      },
      {
        id: 'proj-02',
        title: 'Modular BWP Acrylic Kitchen & Pantry',
        slug: 'vijayawada-penthouse-kitchen',
        category: 'Modular Kitchens',
        location: 'Benz Circle, Vijayawada',
        year: 2026,
        materialsUsed: ['Action TESA HDHMR', 'Hettich Quadro Runners', 'Anti-Fingerprint Acrylic'],
        coverImage: {
          url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
          alt: 'Completed modular kitchen joinery in Vijayawada',
        },
        photoPermissionGranted: true,
      },
      {
        id: 'proj-03',
        title: 'Solid Teak Entrance Architrave & Panel Doors',
        slug: 'guntur-villa-teak-doors',
        category: 'Doors & Architraves',
        location: 'Kanna Thota, Guntur',
        year: 2025,
        materialsUsed: ['Ghana Teakwood 45mm', 'Melamine Sealer', 'Antique Brass Handles'],
        coverImage: {
          url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
          alt: 'Solid teakwood door installed on site in Guntur',
        },
        photoPermissionGranted: true,
      },
    ];

    // Security & privacy: only projects with photoPermissionGranted are returned
    const approved = projects.filter((p) => p.photoPermissionGranted);
    return {
      items: approved.slice(0, limit),
      total: approved.length,
    };
  }

  getProjects(params: {
    category?: string;
    search?: string;
    page?: number;
    limit?: number;
  }) {
    const page = Math.max(1, params.page || 1);
    const limit = Math.max(1, Math.min(50, params.limit || 12));
    const all = [
      {
        id: 'proj-01',
        title: 'Custom Teakwood Living & Mandir Suite',
        slug: 'vuyyuru-residence-teak-suite',
        category: 'furniture',
        summary: 'Handcrafted seasoned Burma teakwood pooja mandir and living room low diwan set with traditional Andhra floral carvings.',
        description: 'Commissioned for a multi-generational home in Vuyyuru. The suite incorporates seasoned Burma teakwood framing, brass bell mounts, soft velvet backings, and concealed LED driver channels.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
            alt: 'Handcrafted teakwood pooja mandir in Vuyyuru residence',
            kind: 'finished',
          },
        ],
        generalArea: 'Vuyyuru',
        location: 'Vuyyuru Town',
        year: 2026,
        completedAt: 'January 2026',
        materialsUsed: ['Burma Teakwood (Grade 1)', 'Marine Grade Plywood', 'Solid Brass Finials'],
        scopeHighlights: [
          'Site laser dimensions and vastu-compliant orientation alignment',
          'Workshop pre-fabrication with full mortise-and-tenon structural framing',
        ],
        coverImage: {
          url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
          alt: 'Pooja mandir wood carving work in Vuyyuru residence',
        },
        publicationStatus: 'published',
        photoPermissionStatus: 'approved',
        photoPermissionGranted: true,
      },
      {
        id: 'proj-02',
        title: 'Modular BWP Marine Ply Kitchen & Acrylic Pantry',
        slug: 'vijayawada-penthouse-kitchen',
        category: 'interiors',
        summary: 'Full modular kitchen layout featuring IS:710 Marine BWP carcass, anti-fingerprint acrylic shutters, and tandem soft-close drawers.',
        description: 'Designed and installed for a modern apartment in Vijayawada. Built to withstand tropical coastal humidity using boiling water proof marine plywood.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
            alt: 'Completed modular kitchen joinery in Vijayawada',
            kind: 'finished',
          },
        ],
        generalArea: 'Vijayawada',
        location: 'Benz Circle, Vijayawada',
        year: 2026,
        completedAt: 'February 2026',
        materialsUsed: ['Action TESA HDHMR', 'IS:710 Marine Grade BWP Plywood', 'Hettich Quadro Runners'],
        coverImage: {
          url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
          alt: 'Completed modular kitchen joinery in Vijayawada',
        },
        publicationStatus: 'published',
        photoPermissionStatus: 'approved',
        photoPermissionGranted: true,
      },
      {
        id: 'proj-03',
        title: 'Solid Teak Entrance Architrave & Panel Doors',
        slug: 'guntur-villa-teak-doors',
        category: 'doors',
        summary: 'Heavy 45mm solid teak main double doors with traditional engraved border frames and solid brass mortise hardware.',
        description: 'Grand entrance double door crafted for an independent residence in Guntur. Utilizing seasoned Ghana teak planks kiln-dried to under 12% moisture content.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
            alt: 'Solid teakwood door installed on site in Guntur',
            kind: 'finished',
          },
        ],
        generalArea: 'Guntur',
        location: 'Kanna Thota, Guntur',
        year: 2025,
        completedAt: 'December 2025',
        materialsUsed: ['Ghana Teakwood 45mm', 'Melamine Sealer', 'Antique Brass Handles'],
        coverImage: {
          url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
          alt: 'Solid teakwood door installed on site in Guntur',
        },
        publicationStatus: 'published',
        photoPermissionStatus: 'approved',
        photoPermissionGranted: true,
      },
      {
        id: 'proj-04',
        title: 'Full-Height Floor-to-Ceiling Teak Finish Wardrobe with Loft',
        slug: 'vuyyuru-floor-to-ceiling-wardrobe',
        category: 'wardrobes',
        summary: 'Seamless 9-foot master bedroom wardrobe with integrated overhead loft storage and natural teak veneer facings.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
            alt: 'Fitted bedroom wardrobe with natural teak veneer and loft',
            kind: 'finished',
          },
        ],
        generalArea: 'Vuyyuru',
        location: 'Vuyyuru Rural',
        year: 2026,
        completedAt: 'January 2026',
        materialsUsed: ['Century Marine Grade Plywood', 'Natural Teak Veneer', 'Blum Hinges'],
        coverImage: {
          url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
          alt: 'Teak wardrobe in Vuyyuru',
        },
        publicationStatus: 'published',
        photoPermissionStatus: 'approved',
        photoPermissionGranted: true,
      },
      {
        id: 'proj-05',
        title: 'Antique Rosewood Diwan Restoration & Structural Joinery',
        slug: 'tenali-antique-rosewood-restoration',
        category: 'repairs',
        summary: 'Restoration of a 45-year-old family heirloom rosewood diwan with repaired tenons and traditional French polish.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
            alt: 'Restored rosewood diwan in Tenali',
            kind: 'after',
          },
          {
            url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
            alt: 'Original diwan before restoration',
            kind: 'before',
          },
        ],
        generalArea: 'Tenali',
        location: 'Tenali Town',
        year: 2025,
        completedAt: 'November 2025',
        materialsUsed: ['Seasoned Indian Rosewood', 'Traditional Hide Glue', 'Button Shellac'],
        coverImage: {
          url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
          alt: 'Restored rosewood diwan in Tenali',
        },
        publicationStatus: 'published',
        photoPermissionStatus: 'approved',
        photoPermissionGranted: true,
      },
      {
        id: 'proj-06',
        title: 'Handcrafted 8-Seater Burma Teak Dining Table & Benches',
        slug: 'vijayawada-dining-suite',
        category: 'furniture',
        summary: 'Substantial solid teak dining table with two matched benches featuring chamfered edges.',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
            alt: 'Teak dining table in Vijayawada',
            kind: 'finished',
          },
        ],
        generalArea: 'Vijayawada',
        location: 'MG Road, Vijayawada',
        year: 2025,
        completedAt: 'October 2025',
        materialsUsed: ['Burma Teak (38mm table top)', 'Polyurethane Polish'],
        coverImage: {
          url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80',
          alt: 'Teak dining table in Vijayawada',
        },
        publicationStatus: 'published',
        photoPermissionStatus: 'approved',
        photoPermissionGranted: true,
      },
    ];

    // Privacy filter: only published and approved
    let filtered = all.filter(
      (p) => p.publicationStatus === 'published' && p.photoPermissionStatus === 'approved'
    );

    if (params.category && params.category !== 'all') {
      const c = params.category.toLowerCase();
      filtered = filtered.filter((p) => p.category.toLowerCase().includes(c));
    }

    if (params.search) {
      const s = params.search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(s) ||
          p.summary.toLowerCase().includes(s) ||
          p.generalArea.toLowerCase().includes(s)
      );
    }

    const total = filtered.length;
    const totalPages = Math.ceil(total / limit) || 0;
    const startIndex = (page - 1) * limit;
    const items = filtered.slice(startIndex, startIndex + limit);

    return {
      items,
      page,
      limit,
      total,
      totalPages,
      filters: { category: params.category, search: params.search },
    };
  }

  getProjectBySlug(slug: string) {
    const res = this.getProjects({ limit: 50 });
    const project = res.items.find((p) => p.slug === slug);
    if (!project) {
      throw new NotFoundException(`Project with slug "${slug}" not found or not approved for public display`);
    }
    return project;
  }

  getProducts(params: {
    category?: string;
    priceMode?: string;
    priceMin?: number;
    priceMax?: number;
    search?: string;
    sort?: string;
    page?: number;
    limit?: number;
  }) {
    const page = Math.max(1, params.page || 1);
    const limit = Math.min(48, Math.max(1, params.limit || 12));

    const all = [
      {
        id: 'prod-teak-king-cot',
        sku: 'VC-COT-KING-01',
        name: 'Krishna Solid Teak King Bed with Storage',
        slug: 'krishna-solid-teak-king-bed',
        shortDescription: 'Handcrafted king bed featuring CP teakwood framing and hydraulic under-bed storage.',
        categoryId: 'cat-beds',
        categorySlug: 'beds',
        categoryName: 'Beds & Cots',
        primaryImage: {
          url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
          alt: 'Solid teak king bed frame with headboard detailing',
        },
        priceMode: 'fixed',
        salePricePaise: 4850000,
        startingPrice: 48500,
        currency: 'INR',
        status: 'active',
        visibility: 'public',
        woodSpecies: ['CP Teakwood', 'BWP Marine Ply Box'],
        dimensionsSummary: '78" L x 72" W x 42" H (King Size)',
        finishType: 'Natural Teak Melamine Polish',
        isCustomizable: true,
        leadTimeWeeks: 3,
        availabilityLabel: 'Made to Order',
        createdAt: '2026-01-15T09:00:00Z',
      },
      {
        id: 'prod-teak-queen-cot',
        sku: 'VC-COT-QUEEN-02',
        name: 'Godavari Seasoned Teak Queen Bed',
        slug: 'godavari-seasoned-teak-queen-bed',
        shortDescription: 'Minimalist solid wood queen bed with hand-sanded curved headboard.',
        categoryId: 'cat-beds',
        categorySlug: 'beds',
        categoryName: 'Beds & Cots',
        primaryImage: {
          url: 'https://images.unsplash.com/photo-1540518614846-7ede433c4b4f?auto=format&fit=crop&w=800&q=80',
          alt: 'Minimalist queen bed in natural polished teak',
        },
        priceMode: 'starting_from',
        startingPricePaise: 3800000,
        startingPrice: 38000,
        currency: 'INR',
        status: 'active',
        visibility: 'public',
        woodSpecies: ['Seasoned Ghana Teak'],
        dimensionsSummary: '78" L x 60" W x 38" H',
        finishType: 'Matte Polyurethane (PU)',
        isCustomizable: true,
        leadTimeWeeks: 3,
        availabilityLabel: 'Made to Order',
        createdAt: '2026-02-10T10:00:00Z',
      },
      {
        id: 'prod-pooja-mandir',
        sku: 'VC-MND-01',
        name: 'Handcrafted Heritage Pooja Mandir',
        slug: 'handcrafted-heritage-pooja-mandir',
        shortDescription: 'Intricately carved temple unit with gopuram dome, brass bells, and incense drawer.',
        categoryId: 'cat-storage',
        categorySlug: 'storage',
        categoryName: 'Storage & Mandirs',
        primaryImage: {
          url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
          alt: 'Intricately crafted wooden mandir temple unit in seasoned teakwood',
        },
        priceMode: 'quote_required',
        startingPrice: null,
        currency: 'INR',
        status: 'active',
        visibility: 'public',
        woodSpecies: ['Ghana Teakwood', 'Solid Teak Pillars'],
        dimensionsSummary: 'Customized to room vastu layout',
        finishType: 'Antique Spirit Polish with Brass Bells',
        isCustomizable: true,
        leadTimeWeeks: 4,
        availabilityLabel: 'Made to Order',
        createdAt: '2026-01-20T11:00:00Z',
      },
      {
        id: 'prod-dining-table',
        sku: 'VC-TAB-DIN-01',
        name: 'Amaravati 6-Seater Solid Wood Dining Set',
        slug: 'amaravati-6-seater-solid-wood-dining-set',
        shortDescription: 'Generous 6-seater solid teak table accompanied by ergonomic cushioned chairs.',
        categoryId: 'cat-tables',
        categorySlug: 'tables',
        categoryName: 'Dining & Tables',
        primaryImage: {
          url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80',
          alt: 'Artisan handcrafted solid wood dining table with chairs',
        },
        priceMode: 'fixed',
        salePricePaise: 5600000,
        startingPrice: 56000,
        currency: 'INR',
        status: 'active',
        visibility: 'public',
        woodSpecies: ['Seasoned Teakwood', 'Neem wood sub-frame'],
        dimensionsSummary: '72" L x 36" W x 30" H',
        finishType: 'Polyurethane (PU) Matte Clear Coat',
        isCustomizable: true,
        leadTimeWeeks: 3,
        availabilityLabel: 'Showroom Sample',
        createdAt: '2026-01-25T14:30:00Z',
      },
      {
        id: 'prod-study-desk',
        sku: 'VC-TAB-DSK-02',
        name: 'Ergonomic Teak Study & Workstation Desk',
        slug: 'ergonomic-teak-study-desk',
        shortDescription: 'Solid wood executive desk with concealed cable duct and soft-close stationery drawers.',
        categoryId: 'cat-tables',
        categorySlug: 'tables',
        categoryName: 'Dining & Tables',
        primaryImage: {
          url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80',
          alt: 'Clean solid wood study table with drawers',
        },
        priceMode: 'starting_from',
        startingPricePaise: 2450000,
        startingPrice: 24500,
        currency: 'INR',
        status: 'active',
        visibility: 'public',
        woodSpecies: ['CP Teakwood', 'Ebco Channel Fittings'],
        dimensionsSummary: '48" L x 24" W x 30" H',
        finishType: 'Satin Clear Sealer',
        isCustomizable: true,
        leadTimeWeeks: 2,
        availabilityLabel: 'Made to Order',
        createdAt: '2026-02-15T16:00:00Z',
      },
      {
        id: 'prod-modular-wardrobe',
        sku: 'VC-WRD-MOD-01',
        name: '4-Door Modular Wardrobe with Loft',
        slug: '4-door-modular-wardrobe-with-loft',
        shortDescription: 'Floor-to-ceiling fitted wardrobe carcass with customized drawers and hanger sections.',
        categoryId: 'cat-wardrobes',
        categorySlug: 'wardrobes',
        categoryName: 'Wardrobes & Closets',
        primaryImage: {
          url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
          alt: 'Modern wood grain wardrobe with soft-close handles',
        },
        priceMode: 'quote_required',
        startingPrice: null,
        currency: 'INR',
        status: 'active',
        visibility: 'public',
        woodSpecies: ['Action TESA HDHMR', '1mm Merino Laminate'],
        dimensionsSummary: '8ft Height x 7ft Width x 2ft Depth',
        finishType: 'Textured Oak & Matte Grey Laminate',
        isCustomizable: true,
        leadTimeWeeks: 2,
        availabilityLabel: 'Made to Order',
        createdAt: '2026-02-01T12:00:00Z',
      },
      {
        id: 'prod-sliding-wardrobe',
        sku: 'VC-WRD-SLD-02',
        name: 'Contemporary 2-Track Sliding Wardrobe',
        slug: 'contemporary-2-track-sliding-wardrobe',
        shortDescription: 'Space-saving sliding shutter wardrobe with tinted glass and fluted laminate detailing.',
        categoryId: 'cat-wardrobes',
        categorySlug: 'wardrobes',
        categoryName: 'Wardrobes & Closets',
        primaryImage: null,
        priceMode: 'quote_required',
        startingPrice: null,
        currency: 'INR',
        status: 'active',
        visibility: 'public',
        woodSpecies: ['Century BWP 18mm Ply', 'Hafele Slider Tracks'],
        dimensionsSummary: '7ft Height x 6ft Width x 26" Depth',
        finishType: 'Warm Oak Veneer & Bronze Mirror',
        isCustomizable: true,
        leadTimeWeeks: 3,
        availabilityLabel: 'Made to Order',
        createdAt: '2026-02-05T15:00:00Z',
      },
      {
        id: 'prod-teak-main-door',
        sku: 'VC-DOR-MAIN-01',
        name: 'Grand Carved Teak Main Entrance Door',
        slug: 'grand-carved-teak-main-entrance-door',
        shortDescription: 'Heavy-gauge solid teak entry door featuring carved lotus architrave and solid frame.',
        categoryId: 'cat-doors',
        categorySlug: 'doors',
        categoryName: 'Doors & Frames',
        primaryImage: {
          url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
          alt: 'Solid teakwood entrance door with architectural relief framing',
        },
        priceMode: 'quote_required',
        startingPrice: null,
        currency: 'INR',
        status: 'active',
        visibility: 'public',
        woodSpecies: ['Burma Teak', 'Heavy Brass Hardware'],
        dimensionsSummary: '7ft x 3.5ft x 38mm thickness',
        finishType: 'Hand-Polished High Gloss PU',
        isCustomizable: true,
        leadTimeWeeks: 3,
        availabilityLabel: 'Made to Order',
        createdAt: '2026-01-10T08:00:00Z',
      },
      {
        id: 'prod-modular-kitchen',
        sku: 'VC-KIT-MOD-01',
        name: 'BWP Marine Ply Modular Kitchen Layout',
        slug: 'bwp-marine-ply-modular-kitchen',
        shortDescription: 'Waterproof kitchen joinery with tandem soft-close baskets, pantry tall unit, and chimney box.',
        categoryId: 'cat-kitchens',
        categorySlug: 'kitchens',
        categoryName: 'Modular Kitchens',
        primaryImage: {
          url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
          alt: 'Sleek wood and acrylic modular kitchen with pull-out drawers',
        },
        priceMode: 'quote_required',
        startingPrice: null,
        currency: 'INR',
        status: 'active',
        visibility: 'public',
        woodSpecies: ['Century Club Prime BWP 710 Ply', 'Acrylic Shutters'],
        dimensionsSummary: 'L-Shape / Parallel layout customized to site',
        finishType: 'Water-resistant acrylic with Hettich Soft-Close',
        isCustomizable: true,
        leadTimeWeeks: 4,
        availabilityLabel: 'Made to Order',
        createdAt: '2026-01-18T13:00:00Z',
      },
      {
        id: 'prod-crockery-cabinet',
        sku: 'VC-STG-CRK-02',
        name: 'Heritage Glass & Teak Crockery Cabinet',
        slug: 'heritage-glass-teak-crockery-cabinet',
        shortDescription: 'Tall display cabinet with toughened fluted glass doors and warm internal LED spotlighting.',
        categoryId: 'cat-storage',
        categorySlug: 'storage',
        categoryName: 'Storage & Mandirs',
        primaryImage: {
          url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
          alt: 'Teakwood crockery storage unit with glass paneling',
        },
        priceMode: 'starting_from',
        startingPricePaise: 3200000,
        startingPrice: 32000,
        currency: 'INR',
        status: 'active',
        visibility: 'public',
        woodSpecies: ['Seasoned Teak', 'Fluted Glass'],
        dimensionsSummary: '6.5ft Height x 4ft Width x 18" Depth',
        finishType: 'Warm Honey Polish',
        isCustomizable: true,
        leadTimeWeeks: 3,
        availabilityLabel: 'Made to Order',
        createdAt: '2026-02-12T11:00:00Z',
      },
    ];

    let filtered = all.filter((p) => p.status === 'active' && p.visibility === 'public');

    if (params.category && params.category !== 'all') {
      filtered = filtered.filter(
        (p) => p.categorySlug.toLowerCase() === params.category?.toLowerCase()
      );
    }

    if (params.priceMode && params.priceMode !== 'all') {
      filtered = filtered.filter((p) => p.priceMode === params.priceMode);
    }

    if (params.priceMin !== undefined && !isNaN(params.priceMin)) {
      const minPaise = params.priceMin * 100;
      filtered = filtered.filter((p) => {
        const pr = (p as any).salePricePaise ?? (p as any).startingPricePaise;
        return pr !== undefined && pr >= minPaise;
      });
    }

    if (params.priceMax !== undefined && !isNaN(params.priceMax)) {
      const maxPaise = params.priceMax * 100;
      filtered = filtered.filter((p) => {
        const pr = (p as any).salePricePaise ?? (p as any).startingPricePaise;
        return pr !== undefined && pr <= maxPaise;
      });
    }

    if (params.search && params.search.trim()) {
      const q = params.search.trim().toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.sku?.toLowerCase().includes(q)
      );
    }

    const sort = params.sort || 'recommended';
    switch (sort) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'name_asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price_asc':
        filtered.sort((a, b) => {
          const pA = (a as any).salePricePaise ?? (a as any).startingPricePaise ?? Number.MAX_SAFE_INTEGER;
          const pB = (b as any).salePricePaise ?? (b as any).startingPricePaise ?? Number.MAX_SAFE_INTEGER;
          return pA - pB;
        });
        break;
      case 'price_desc':
        filtered.sort((a, b) => {
          const pA = (a as any).salePricePaise ?? (a as any).startingPricePaise ?? -1;
          const pB = (b as any).salePricePaise ?? (b as any).startingPricePaise ?? -1;
          return pB - pA;
        });
        break;
    }

    const total = filtered.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;

    return {
      items: filtered.slice(startIndex, startIndex + limit),
      page,
      limit,
      total,
      totalPages,
      filters: params,
    };
  }

  getProductFilters() {
    return {
      categories: [
        { slug: 'beds', name: 'Beds & Cots', count: 2 },
        { slug: 'doors', name: 'Doors & Frames', count: 1 },
        { slug: 'wardrobes', name: 'Wardrobes & Closets', count: 2 },
        { slug: 'storage', name: 'Storage & Mandirs', count: 2 },
        { slug: 'tables', name: 'Dining & Tables', count: 2 },
        { slug: 'kitchens', name: 'Modular Kitchens', count: 1 },
      ],
      priceModes: [
        { mode: 'fixed', label: 'Fixed Price', count: 2 },
        { mode: 'starting_from', label: 'Starting From Price', count: 3 },
        { mode: 'quote_required', label: 'Custom Quote Required', count: 5 },
      ],
      priceBounds: { min: 24500, max: 56000 },
      sortOptions: [
        { value: 'recommended', label: 'Recommended' },
        { value: 'newest', label: 'Newest Additions' },
        { value: 'name_asc', label: 'Name (A to Z)' },
        { value: 'price_asc', label: 'Price (Low to High)' },
        { value: 'price_desc', label: 'Price (High to Low)' },
      ],
    };
  }

  searchUnified(params: {
    q?: string;
    type?: 'all' | 'products' | 'services';
    page?: number;
    limit?: number;
  }) {
    const rawQ = (params.q || '').trim();
    const cleanQ = rawQ.slice(0, 100).toLowerCase();
    const searchType = params.type || 'all';
    const page = Math.max(1, params.page || 1);
    const limit = Math.min(48, Math.max(1, params.limit || 12));

    const suggestions = [
      'Teak king bed',
      'Pooja mandir',
      'Solid dining table',
      'Modular wardrobe',
      'Teak entrance door',
      'Modular kitchen',
      'Carpentry repairs',
    ];

    if (!cleanQ) {
      return {
        query: '',
        type: searchType,
        items: [],
        page: 1,
        limit,
        total: 0,
        totalPages: 0,
        counts: { all: 0, products: 0, services: 0 },
        matchedCategories: [],
        suggestions,
      };
    }

    // 1. Search products (only published/public)
    const scoredProducts: { item: any; score: number }[] = [];
    const publicProductsResult = this.getProducts({ page: 1, limit: 100 });
    const publicProducts = publicProductsResult.items;

    publicProducts.forEach((p) => {
      let score = 0;
      const nameLower = p.name.toLowerCase();
      const descLower = (p.shortDescription || '').toLowerCase();
      const catLower = (p.categoryName || '').toLowerCase();
      const skuLower = ((p as any).sku || '').toLowerCase();

      if (nameLower === cleanQ) score += 100;
      else if (nameLower.startsWith(cleanQ)) score += 60;
      else if (nameLower.includes(cleanQ)) score += 40;

      if (skuLower === cleanQ) score += 50;

      if (p.woodSpecies?.some((w) => w.toLowerCase().includes(cleanQ))) {
        score += 30;
      }

      if (catLower.includes(cleanQ)) score += 25;
      if (descLower.includes(cleanQ)) score += 15;

      if (score > 0) {
        scoredProducts.push({
          score,
          item: {
            kind: 'product',
            id: p.id,
            title: p.name,
            slug: p.slug,
            summary: p.shortDescription,
            imageUrl: p.primaryImage?.url,
            priceMode: p.priceMode,
            publicPricePaise: (p as any).salePricePaise ?? (p as any).startingPricePaise,
            categorySlug: p.categorySlug,
            categoryName: p.categoryName,
            woodSpecies: p.woodSpecies,
            isCustomizable: p.isCustomizable,
            availabilityLabel: (p as any).availabilityLabel,
          },
        });
      }
    });

    // 2. Search services
    const services = [
      {
        id: 'srv-repairs',
        title: 'Carpentry Repairs & Hardware Maintenance',
        slug: 'repairs',
        summary:
          'Door alignment, squeaking hinges, loose joinery, lock replacement, and termite damage inspection in Vuyyuru, Vijayawada, and nearby areas.',
        route: '/services#repairs',
        iconName: 'Hammer',
        categoryName: 'Repairs & Maintenance',
      },
      {
        id: 'srv-custom-furniture',
        title: 'Bespoke Solid Teakwood Furniture Fabrication',
        slug: 'custom-furniture',
        summary:
          'Handcrafted made-to-measure dining sets, king cots, diwans, and carved pooja mandirs using seasoned Burma and CP teakwood with milestone contracts.',
        route: '/custom-furniture',
        iconName: 'Sofa',
        categoryName: 'Custom Furniture',
      },
      {
        id: 'srv-doors-frames',
        title: 'Main Entrance Teak Doors & Architraves',
        slug: 'doors',
        summary:
          'Heavy-gauge solid teak main doors with traditional floral/temple carvings, brass fixtures, and natural veneer flush internal doors.',
        route: '/products?category=doors',
        iconName: 'DoorClosed',
        categoryName: 'Doors & Frames',
      },
      {
        id: 'srv-kitchens',
        title: 'BWP Marine Ply Modular Kitchen Joinery',
        slug: 'kitchens',
        summary:
          'Waterproof BWP 710 marine plywood carcasses, soft-close Blum/Hettich tandem runners, and acrylic/laminate shutters customized to site slabs.',
        route: '/products?category=kitchens',
        iconName: 'Utensils',
        categoryName: 'Modular Kitchens',
      },
      {
        id: 'srv-finishing',
        title: 'Wood Polishing, Melamine & Italian PU Finishing',
        slug: 'finishing',
        summary:
          'Hand-rubbed spirit polish, Italian Polyurethane (PU) spray coating in high-gloss and matte, melamine wood sealing, and vintage furniture restoration.',
        route: '/services#finishing',
        iconName: 'Sparkles',
        categoryName: 'Finishing & Polishing',
      },
      {
        id: 'srv-site-visit',
        title: 'Laser Site Survey & Room Measurement Visit',
        slug: 'site-visit',
        summary:
          'On-site laser measurements in Vuyyuru, Vijayawada, and Guntur to verify wall squareness, floor levels, and electrical points before quotation.',
        route: '/visit-request',
        iconName: 'Ruler',
        categoryName: 'Consultation & Survey',
      },
    ];

    const scoredServices: { item: any; score: number }[] = [];
    services.forEach((s) => {
      let score = 0;
      const titleLower = s.title.toLowerCase();
      const summaryLower = s.summary.toLowerCase();
      const catLower = s.categoryName.toLowerCase();

      if (titleLower === cleanQ) score += 100;
      else if (titleLower.startsWith(cleanQ)) score += 60;
      else if (titleLower.includes(cleanQ)) score += 40;

      if (catLower.includes(cleanQ)) score += 25;
      if (summaryLower.includes(cleanQ)) score += 15;

      if (score > 0) {
        scoredServices.push({
          score,
          item: {
            kind: 'service',
            id: s.id,
            title: s.title,
            slug: s.slug,
            summary: s.summary,
            route: s.route,
            iconName: s.iconName,
            categoryName: s.categoryName,
          },
        });
      }
    });

    const totalProductsCount = scoredProducts.length;
    const totalServicesCount = scoredServices.length;
    const totalAllCount = totalProductsCount + totalServicesCount;

    let candidateList: { item: any; score: number }[] = [];
    if (searchType === 'products') {
      candidateList = scoredProducts;
    } else if (searchType === 'services') {
      candidateList = scoredServices;
    } else {
      candidateList = [...scoredProducts, ...scoredServices];
    }

    candidateList.sort((a, b) => b.score - a.score);

    const total = candidateList.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const items = candidateList.slice(startIndex, startIndex + limit).map((c) => c.item);

    const matchedCategorySlugs = new Set<string>();
    scoredProducts.forEach((p) => matchedCategorySlugs.add(p.item.categorySlug));
    const allCategories = this.getCategories(true);
    const matchedCategories = allCategories
      .filter((c) => matchedCategorySlugs.has(c.slug))
      .map((c) => ({ slug: c.slug, name: c.name }));

    return {
      query: rawQ.slice(0, 100),
      type: searchType,
      items,
      page,
      limit,
      total,
      totalPages,
      counts: {
        all: totalAllCount,
        products: totalProductsCount,
        services: totalServicesCount,
      },
      matchedCategories,
      suggestions: suggestions.filter((kw) => kw.toLowerCase() !== cleanQ).slice(0, 4),
    };
  }

  getProductBySlug(slug: string) {
    if (!slug) return null;
    const cleanSlug = slug.trim().toLowerCase();
    const result = this.getProducts({ page: 1, limit: 100 });
    const product = result.items.find((p) => p.slug.toLowerCase() === cleanSlug);

    if (!product) return null;

    const related = result.items
      .filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
      .slice(0, 3);

    return {
      ...product,
      fullDescription:
        (product as any).fullDescription ||
        `Handcrafted at Vuyyuru Carpentry workshop using seasoned timber, precision mortise-and-tenon joinery, and durable protective finishing tailored for coastal Andhra climate.`,
      galleryImages: (product as any).galleryImages || [
        {
          url: product.primaryImage?.url || 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
          alt: product.name,
          caption: 'Handcrafted solid wood finish in workshop',
        },
      ],
      dimensions: (product as any).dimensions || {
        standard: {
          widthInches: 72,
          heightInches: 42,
          depthInches: 78,
          summary: product.dimensionsSummary || 'Standard dimensions',
        },
        customizable: product.isCustomizable ?? true,
      },
      supportedWoodSpecies: (product as any).supportedWoodSpecies || product.woodSpecies || ['CP Teakwood', 'Burma Teak', 'Ghana Teak'],
      supportedFinishes: (product as any).supportedFinishes || ['Natural Teak Melamine Polish', 'Matte Polyurethane (PU)', 'Italian High-Gloss PU'],
      inclusions: [
        '100% seasoned timber joinery and structural framing',
        'White-glove delivery, room placement, and on-site assembly',
        'Multi-year craftsmanship and joinery warranty',
      ],
      exclusions: ['External mattress / soft furnishings', 'Civil wall anchoring modification'],
      hardwareSpecs: ['Ebco / Hettich heavy-duty joinery hardware', 'Zinc-plated anti-corrosion corner brackets'],
      deliveryNotice: 'Complimentary delivery and assembly across Vuyyuru, Vijayawada, and Guntur.',
      orderingSteps: [
        {
          step: 1,
          title: 'Requirement Consultation & Measurement',
          description: 'Review standard specifications or submit custom room dimensions.',
        },
        {
          step: 2,
          title: '3D CAD Blueprint & Timber Inspection',
          description: 'Inspect seasoned timber grains before cutting at Vuyyuru workshop.',
        },
        {
          step: 3,
          title: 'Workshop Joinery & 50% Advance',
          description: 'Artisans execute traditional mortise-and-tenon joinery and multi-coat finishing.',
        },
        {
          step: 4,
          title: 'White-Glove Delivery & Installation',
          description: 'On-site installation and leveling across Krishna/NTR districts before final sign-off.',
        },
      ],
      relatedProducts: related,
    };
  }

  submitProductEnquiry(payload: {
    productId: string;
    productSlug: string;
    customerName: string;
    customerPhone: string;
    customerEmail?: string;
    deliveryTown: string;
    requestedOptions?: any;
    quantity: number;
    message: string;
  }) {
    const product = this.getProductBySlug(payload.productSlug);
    if (!product) {
      return {
        success: false,
        error: 'The requested product is invalid or no longer available for enquiry.',
      };
    }

    const name = (payload.customerName || '').trim();
    if (name.length < 2 || name.length > 100) {
      return {
        success: false,
        error: 'Please enter a valid customer name (between 2 and 100 characters).',
      };
    }

    const phoneClean = (payload.customerPhone || '').replace(/\D/g, '');
    if (phoneClean.length < 10 || phoneClean.length > 12) {
      return {
        success: false,
        error: 'Please enter a valid 10-digit mobile phone number for enquiry consultation.',
      };
    }

    const qty = Number(payload.quantity);
    if (!Number.isInteger(qty) || qty < 1 || qty > 10) {
      return {
        success: false,
        error: 'Quantity must be a positive integer between 1 and 10.',
      };
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const enquiryId = `ENQ-2026-${randomSuffix}`;

    return {
      success: true,
      data: {
        enquiryId,
        status: 'received',
        message:
          'Your custom furniture enquiry has been received. Our master artisan from Vuyyuru workshop will review your measurements and contact you within 24 hours.',
        receivedAt: new Date().toISOString(),
        summary: {
          productTitle: product.name,
          estimatedLeadTime: `${product.leadTimeWeeks || 3} weeks made-to-order`,
          consultationContact: '+91 8639731477',
        },
      },
    };
  }

  submitCustomFurnitureEnquiry(payload: any) {
    if (!payload?.requirements) {
      return { success: false, error: 'Project requirements are required.' };
    }

    const { furnitureType, customFurnitureType, description, quantity } = payload.requirements;
    if (!furnitureType) {
      return { success: false, error: 'Please select a furniture type.' };
    }
    if (furnitureType === 'other' && (!customFurnitureType || !customFurnitureType.trim())) {
      return { success: false, error: 'Please specify the custom furniture item.' };
    }

    const cleanDesc = (description || '').trim();
    if (cleanDesc.length < 10) {
      return {
        success: false,
        error: 'Please describe your custom furniture project (minimum 10 characters).',
      };
    }
    if (cleanDesc.length > 1500) {
      return { success: false, error: 'Project description must not exceed 1,500 characters.' };
    }

    const qty = Number(quantity);
    if (!Number.isInteger(qty) || qty < 1 || qty > 20) {
      return { success: false, error: 'Number of items must be a positive integer between 1 and 20.' };
    }

    const dims = payload.requirements.dimensions;
    if (dims) {
      if (dims.widthMm !== undefined && dims.widthMm <= 0) {
        return { success: false, error: 'Width must be a positive number in millimetres.' };
      }
      if (dims.heightMm !== undefined && dims.heightMm <= 0) {
        return { success: false, error: 'Height must be a positive number in millimetres.' };
      }
      if (dims.depthMm !== undefined && dims.depthMm <= 0) {
        return { success: false, error: 'Depth must be a positive number in millimetres.' };
      }
    }

    if (!payload.site || !payload.site.area || !payload.site.area.trim()) {
      return { success: false, error: 'Please enter your locality / area in Andhra Pradesh.' };
    }
    if (!payload.site.visitRequested) {
      return { success: false, error: 'Please indicate whether an on-site survey is requested.' };
    }

    if (
      (payload.site.visitRequested === 'yes' || payload.site.visitRequested === 'advise_me') &&
      payload.site.preferredDate
    ) {
      const selectedDate = new Date(payload.site.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        return { success: false, error: 'Preferred site visit date must be in the future.' };
      }
    }

    if (!payload.customer) {
      return { success: false, error: 'Customer contact details are required.' };
    }

    const cleanName = (payload.customer.name || '').trim();
    if (cleanName.length < 2 || cleanName.length > 100) {
      return { success: false, error: 'Please enter your full name (between 2 and 100 characters).' };
    }

    const rawPhone = (payload.customer.phone || '').replace(/\D/g, '');
    if (rawPhone.length < 10 || rawPhone.length > 12) {
      return { success: false, error: 'Please enter a valid 10-digit Indian mobile number.' };
    }

    if (!payload.consent || !payload.consent.contactForThisEnquiry) {
      return {
        success: false,
        error: 'You must consent to Vuyyuru Carpentry contacting you regarding this quotation request.',
      };
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const reference = `VC-REQ-2026-${randomSuffix}`;
    const enquiryId = `enq_${Math.random().toString(36).substring(2, 10)}`;

    const displayType =
      furnitureType === 'other' ? customFurnitureType || 'Custom Joinery' : furnitureType;

    return {
      success: true,
      data: {
        enquiryId,
        reference,
        status: 'received',
        message:
          'Your custom furniture request has been received. Our master artisan will review your requirements, timber choices, and contact you to arrange specifications.',
        receivedAt: new Date().toISOString(),
        summary: {
          furnitureType: displayType,
          quantity: qty,
          area: payload.site.area.trim(),
          siteVisitRequested: payload.site.visitRequested,
          preferredContactMethod: payload.customer.preferredContactMethod || 'whatsapp',
        },
      },
    };
  }

  submitGeneralEnquiry(payload: any) {
    const name = (payload?.customer?.name || '').trim();
    if (!name || name.length < 2) {
      return { success: false, error: 'Please enter your full name (minimum 2 characters).' };
    }
    if (name.length > 100) {
      return { success: false, error: 'Name must not exceed 100 characters.' };
    }

    const rawPhone = (payload?.customer?.phone || '').replace(/\D/g, '');
    const normalizedPhone =
      rawPhone.length === 12 && rawPhone.startsWith('91')
        ? rawPhone.slice(2)
        : rawPhone.length === 11 && rawPhone.startsWith('0')
        ? rawPhone.slice(1)
        : rawPhone;

    if (!/^[6-9]\d{9}$/.test(normalizedPhone)) {
      return {
        success: false,
        error: 'Please enter a valid 10-digit Indian mobile number.',
      };
    }

    const serviceKey = (payload?.serviceId || '').trim().toLowerCase();
    const services = this.getPublicServices();
    const matchedService = services.find(
      (s) => s.id.toLowerCase() === serviceKey || s.slug.toLowerCase() === serviceKey
    );

    if (!matchedService) {
      return {
        success: false,
        error: 'Please select a valid, active carpentry service from the list.',
      };
    }

    const description = (payload?.description || '').trim();
    if (!description || description.length < 10) {
      return {
        success: false,
        error:
          'Please provide at least 10 characters describing your carpentry or repair requirements.',
      };
    }
    if (description.length > 1000) {
      return { success: false, error: 'Description cannot exceed 1000 characters.' };
    }

    const area = (payload?.location?.area || '').trim();
    if (!area || area.length < 2) {
      return { success: false, error: 'Please specify your town, mandal, or locality.' };
    }

    if (!payload?.consent?.contactForThisEnquiry) {
      return {
        success: false,
        error: 'You must provide consent for Vuyyuru Carpentry to contact you regarding this request.',
      };
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const reference = `VC-ENQ-2026-${randomSuffix}`;
    const enquiryId = `enq_${Date.now()}_${randomSuffix}`;

    return {
      success: true,
      data: {
        enquiryId,
        reference,
        status: 'received',
        receivedAt: new Date().toISOString(),
        message:
          'Your enquiry has been received by our workshop. Our artisan team will review your scope and location and reach out via your preferred contact channel.',
        summary: {
          serviceName: matchedService.name,
          area,
          urgency: payload.urgency || 'flexible',
          siteVisitRequested: payload.siteVisit?.requested || 'no',
          preferredContactMethod: payload.customer?.preferredContactMethod || 'phone',
          preferredDate: payload.siteVisit?.preferredDate || null,
          preferredTimeWindow: payload.siteVisit?.preferredTimeWindow || null,
          consultationNotice:
            'Submitting an enquiry or selecting a date does not constitute an automatically confirmed booking. The workshop will confirm time and travel feasibility directly.',
        },
      },
    };
  }

  getPublicServices(category?: string) {
    const services = [
      {
        id: 'srv-repairs',
        name: 'Carpentry Repairs & Hardware Maintenance',
        slug: 'repairs',
        summary:
          'Door sagging correction, squeaking hinges, loose joinery clamping, Godrej/Ebco lock replacement, and termite damage inspection.',
        description:
          'Comprehensive on-site repair and restoration service across Vuyyuru and nearby towns. Our skilled carpenters diagnose sagging shutters, replace worn-out drawer runners, plane rubbing door edges, and reinforce loose joint dowels with high-tensile fasteners.',
        category: 'repair',
        categoryName: 'Repairs & Maintenance',
        pricingMode: 'indicative',
        indicativeMinPaise: 45000,
        indicativeMaxPaise: 250000,
        scopeNotes: [
          'Comprehensive on-site inspection and diagnosis',
          'Hinge realignment, lubrication, and door edge planing',
          'Structural dowel joint clamping and wood adhesive re-bonding',
          'Lock mortising and alignment with strike plates',
          'Replacement hardware (Ebco/Godrej/Blum) and timber infills billed at verified actuals',
        ],
        exclusions: [
          'Civil masonry cracking, wall replastering, or floor tiling alterations',
          'Aluminum / UPVC sliding window frame fabrication',
          'Motorized gate electrical sensor servicing',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80',
        iconName: 'Hammer',
        status: 'active',
        displayOrder: 1,
        leadTimeEstimate: 'Same-day to 48-hour dispatch based on artisan availability',
        typicalDuration: '1 to 4 hours on site',
        serviceAreaNotice: 'Immediate dispatch in Vuyyuru town; Vijayawada and Guntur subject to daily routing.',
      },
      {
        id: 'srv-custom-furniture',
        name: 'Bespoke Solid Teakwood Furniture Fabrication',
        slug: 'custom-furniture',
        summary:
          'Handcrafted king cots, solid dining tables, diwans, study desks, and carved pooja mandirs built with seasoned Burma and CP teakwood.',
        description:
          'Heirloom-grade made-to-measure furniture crafted by master artisans at our Vuyyuru workshop. Every commission begins with 3D CAD joinery planning, timber grain inspection by the customer, traditional mortise-and-tenon construction, and hand-rubbed melamine or PU finishing.',
        category: 'custom_furniture',
        categoryName: 'Custom Furniture',
        pricingMode: 'inspection_required',
        scopeNotes: [
          'Detailed requirement analysis and 3D CAD blueprint sign-off',
          'Customer grain inspection of seasoned Burma/CP teakwood before cutting',
          'Traditional mortise-and-tenon joinery with zero sapwood compromise',
          'Multi-coat hand-sanded Italian PU or melamine protective coating',
          'White-glove delivery, room placement, and leveling on site',
        ],
        exclusions: [
          'Soft furnishings, external mattress procurement, and cushions',
          'Third-party electrical lighting not specified in written scope',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
        iconName: 'Sofa',
        status: 'active',
        displayOrder: 2,
        leadTimeEstimate: '3 to 5 weeks made-to-order',
        typicalDuration: 'Fabricated in workshop with 1-day home installation',
        serviceAreaNotice: 'Delivered and assembled across Krishna, NTR, and Guntur districts.',
      },
      {
        id: 'srv-doors-frames',
        name: 'Solid Teak Main Entrance Doors & Architraves',
        slug: 'doors-and-frames',
        summary:
          'Heavy-gauge solid teak main doors with temple floral carvings, architraves, door frames (chowkhats), and natural veneer interior doors.',
        description:
          'Traditional and contemporary architectural door fabrication. Built from solid 40mm–45mm seasoned teakwood frames capable of withstanding coastal Andhra humidity without warping or joint shrinkage.',
        category: 'doors_wardrobes',
        categoryName: 'Doors & Architectural Frames',
        pricingMode: 'inspection_required',
        scopeNotes: [
          'On-site laser measurement of masonry openings and wall plumbness',
          'Solid teak frame (chowkhat) anchoring with anti-corrosion wall fasteners',
          'Hand-carved floral, geometric, or traditional temple motif detailing',
          'Installation of heavy brass hinges, brass tower bolts, and mortise handles',
          'Polyurethane spray sealer for maximum weather protection',
        ],
        exclusions: [
          'Civil masonry demolition or structural beam alteration',
          'External steel security collapsible grill fabrication',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
        iconName: 'DoorClosed',
        status: 'active',
        displayOrder: 3,
        leadTimeEstimate: '2 to 4 weeks depending on carving intricacy',
        typicalDuration: '1 to 2 days on-site hanging and fitting',
        serviceAreaNotice: 'On-site survey and installation across coastal Andhra Pradesh.',
      },
      {
        id: 'srv-modular-wardrobes',
        name: 'Fitted Modular Wardrobes & Loft Storage',
        slug: 'modular-wardrobes',
        summary:
          'Floor-to-ceiling wardrobes, sliding shutters, customized internal drawers, and walk-in dressing units in BWP ply or HDHMR.',
        description:
          'Maximized storage solutions tailored to bedroom architecture. Engineered with Action TESA HDHMR or Century BWP 710 marine plywood carcasses, soft-close tandem runners, integrated dressers, and high-pressure 1mm laminate or acrylic finishes.',
        category: 'doors_wardrobes',
        categoryName: 'Wardrobes & Closets',
        pricingMode: 'inspection_required',
        scopeNotes: [
          'Laser site survey to detect wall undulations and floor gradients',
          'Customized internal division (saree hangers, double hanging, jewelry trays)',
          'Soft-close telescopic drawer channels and 110-degree clip-on hinges',
          'Factory edge-banded shutters with 2mm PVC hot-melt tape',
          'Full floor-to-ceiling loft boxing with seamless alignment',
        ],
        exclusions: [
          'Room electrical wiring overhaul or ceiling lighting modifications',
          'Civil skirting tile removal',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
        iconName: 'Store',
        status: 'active',
        displayOrder: 4,
        leadTimeEstimate: '2 to 3 weeks',
        typicalDuration: '2 to 3 days on-site assembly',
        serviceAreaNotice: 'Full measurement and installation service in Vuyyuru, Vijayawada, and Guntur.',
      },
      {
        id: 'srv-modular-kitchens',
        name: 'BWP Marine Ply Modular Kitchen Joinery',
        slug: 'modular-kitchens',
        summary:
          '100% boiling-waterproof BWP 710 marine plywood carcasses, soft-close Blum/Hettich tandem baskets, and anti-fingerprint acrylic shutters.',
        description:
          'High-durability modular kitchen joinery built to endure coastal Andhra cooking conditions. We utilize Century Club Prime BWP 710 marine plywood, anti-corrosion SS304 fittings, and precision layout planning around existing granite slabs and plumbing lines.',
        category: 'interiors',
        categoryName: 'Modular Kitchens & Interiors',
        pricingMode: 'inspection_required',
        scopeNotes: [
          'Laser survey of countertop level, gas inlet, and sink plumbing positions',
          '100% BWP 710 marine plywood carcass with waterproof laminate lining',
          'Tandem soft-close pull-out baskets (thali, cup-saucer, cutlery, grain trolley)',
          'Pantry tall units with multi-level heavy-duty chrome baskets',
          'Overhead cabinet boxing with gas-spring hydraulic lift-up shutters',
        ],
        exclusions: [
          'Granite or quartz stone countertop slab casting',
          'Civil plumbing pipe relocation and kitchen chimney appliance purchase',
          'Gas copper pipeline laying',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
        iconName: 'Utensils',
        status: 'active',
        displayOrder: 5,
        leadTimeEstimate: '3 to 4 weeks',
        typicalDuration: '3 to 4 days on-site erection and sealing',
        serviceAreaNotice: 'Available across Vuyyuru, Vijayawada, Guntur, and Tenali.',
      },
      {
        id: 'srv-finishing-polishing',
        name: 'Wood Polishing, Melamine & Italian PU Finishing',
        slug: 'wood-polishing-finishing',
        summary:
          'Hand-rubbed spirit polish, Italian Polyurethane (PU) spray coating in high-gloss and matte, melamine sealing, and vintage restoration.',
        description:
          'Artisanal wood finishing that seals, protects, and magnifies the natural grain character of teakwood. We offer multi-coat clear sealers, stain tints (walnut, honey, antique), and ultra-durable Italian PU coatings resistant to water rings and daily wear.',
        category: 'finishing',
        categoryName: 'Finishing & Polishing',
        pricingMode: 'indicative',
        indicativeMinPaise: 3500,
        indicativeMaxPaise: 12000,
        scopeNotes: [
          'Multi-grit pneumatic machine sanding (80 to 400 grit) to achieve glass-smooth base',
          'Wood pore filling with color-matched natural timber putty',
          'Hand-rubbed sealer coats to prevent moisture absorption',
          'Dust-free spray application of Asian Paints / Sirca Italian PU or Melamine',
          'Antique furniture surface decontamination and natural luster revival',
        ],
        exclusions: [
          'Civil building wall painting and false ceiling emulsion painting',
          'Outdoor exterior wood exposed directly to monsoon rain without overhead eaves',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
        iconName: 'Sparkles',
        status: 'active',
        displayOrder: 6,
        leadTimeEstimate: '1 to 2 weeks depending on square footage and coat curing time',
        typicalDuration: '2 to 5 days on site or in workshop spray booth',
        serviceAreaNotice: 'Workshop spray booth and on-site service across Krishna district.',
      },
      {
        id: 'srv-commercial-fixtures',
        name: 'Commercial Interiors & Retail Shop Fixtures',
        slug: 'commercial-fixtures',
        summary:
          'Heavy-duty billing counters, retail display showcase shelving, reception desks, and acoustic partition screens for offices and shops.',
        description:
          'Fast-turnaround commercial woodwork designed for high daily footfall. We construct modular billing desks, glass showcase display vitrines, fluted timber acoustic partitions, and pharmacy/boutique wall display racks with concealed cable ducts.',
        category: 'commercial',
        categoryName: 'Commercial & Retail Fixtures',
        pricingMode: 'inspection_required',
        scopeNotes: [
          'Commercial space measurement and workflow circulation planning',
          'Heavy-duty 1.2mm anti-wear commercial grade laminates',
          'Concealed POS cable ducts, cash drawers with central locking',
          'Toughened glass showcase display shelving with concealed LED profiles',
          'Staggered night installation options to minimize business downtime',
        ],
        exclusions: [
          'Exterior storefront LED signage and flex glow-sign boards',
          'HVAC ducting and central air conditioning civil modifications',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
        iconName: 'Store',
        status: 'active',
        displayOrder: 7,
        leadTimeEstimate: '2 to 3 weeks with milestone handover',
        typicalDuration: '2 to 4 days commercial installation',
        serviceAreaNotice: 'Serving commercial establishments in Vuyyuru, Vijayawada, and Guntur.',
      },
    ];

    let filtered = services.filter((s) => s.status === 'active');
    if (category && category !== 'all') {
      filtered = filtered.filter((s) => s.category === category);
    }
    return filtered.sort((a, b) => a.displayOrder - b.displayOrder);
  }

  getPublicServiceBySlug(slug: string) {
    if (!slug) return null;
    const services = this.getPublicServices();
    return services.find((s) => s.slug.toLowerCase() === slug.trim().toLowerCase()) || null;
  }

  getPublicServiceFaqs() {
    return [
      {
        id: 'faq-01',
        question: 'How do you calculate pricing for custom carpentry work?',
        answer:
          'All bespoke furniture, modular kitchens, and custom wardrobes require an in-person or laser site inspection. We prepare a transparent, itemized written quotation detailing seasoned timber cubic feet, hardware brands (Blum, Hettich, Ebco), joinery labor, and finishing coats. We never guess final prices from rough dimensions alone.',
        category: 'pricing',
        displayOrder: 1,
      },
      {
        id: 'faq-02',
        question: 'Do you charge for site visits in Vuyyuru, Vijayawada, and Guntur?',
        answer:
          'Initial consultation visits in Vuyyuru town are complimentary. For Vijayawada, Guntur, and outlying rural areas, a nominal travel and laser survey fee may apply, which is 100% credited toward your project balance upon quotation approval.',
        category: 'site_visit',
        displayOrder: 2,
      },
      {
        id: 'faq-03',
        question: 'Can I inspect the timber grains before carpentry cutting begins?',
        answer:
          'Yes, absolutely. We encourage customers to visit our Vuyyuru workshop after seasoned timber delivery to inspect the grain figure, natural color, and density of Burma Teak, CP Teak, or BWP 710 ply sheets before our carpenters make the first cut.',
        category: 'materials',
        displayOrder: 3,
      },
      {
        id: 'faq-04',
        question: 'How do milestone payments work for large carpentry contracts?',
        answer:
          'In strict accordance with our verified business documentation, we follow a traceable 3-stage milestone structure: 50% advance upon contract signing to procure seasoned timber; 40% after carcass fabrication and workshop inspection; and the final 10% after white-glove delivery, on-site installation, and leveling sign-off.',
        category: 'payments',
        displayOrder: 4,
      },
      {
        id: 'faq-05',
        question: 'Can you provide emergency same-day repair service?',
        answer:
          'Carpentry repairs depend on daily workshop capacity and carpenter routes. While we prioritize urgent lock malfunctions, door alignment issues, and broken hinges, we never promise unconditional same-day service without confirming active craftsman availability.',
        category: 'repairs',
        displayOrder: 5,
      },
      {
        id: 'faq-06',
        question: 'What happens if on-site room measurements or requirements change during work?',
        answer:
          'Any modification in dimensions, additional internal drawers, or hardware upgrades is documented in a written scope variation with traceable cost adjustments. Both the customer and carpenter sign off on scope changes before joinery alterations begin.',
        category: 'scope',
        displayOrder: 6,
      },
    ];
  }

  // =============================================================
  // Screen 10: Shopping Cart Backend Engine
  // =============================================================
  private cartStore = new Map<string, any>();

  getCart(sessionId: string) {
    let cart = this.cartStore.get(sessionId);
    if (!cart) {
      cart = {
        id: `cart_${Date.now()}`,
        guestSessionId: sessionId,
        items: [
          {
            id: 'ci_demo_fixed_bed_01',
            productId: 'prod-teak-king-cot',
            quantity: 1,
            selectedWoodSpecies: 'CP Teakwood (Standard)',
            selectedFinish: 'Natural Teak Melamine Polish',
            snapshotPricePaise: 4850000,
            addedAt: new Date().toISOString(),
          },
        ],
        appliedCoupon: null,
        updatedAt: new Date().toISOString(),
      };
      this.cartStore.set(sessionId, cart);
    }
    return this.revalidateBackendCart(cart);
  }

  private revalidateBackendCart(cart: any) {
    const productsResult = this.getProducts({ page: 1, limit: 100 });
    const allProducts = productsResult.items || [];

    const items: any[] = [];
    let subtotalPaise = 0;
    let hasIneligibleItems = false;
    const staleWarnings: string[] = [];

    for (const item of cart.items) {
      const product = allProducts.find(
        (p: any) => p.id === item.productId || p.slug === item.productId
      );

      if (!product || product.status !== 'active') {
        hasIneligibleItems = true;
        items.push({
          id: item.id,
          productId: item.productId,
          slug: product?.slug || item.productId,
          name: product?.name || 'Unlisted Workshop Item',
          category: (product as any)?.categoryName || (product as any)?.category || 'Custom Furniture',
          image: product?.primaryImage?.url || '',
          pricePaise: item.snapshotPricePaise || 0,
          quantity: item.quantity,
          lineTotalPaise: 0,
          isEligible: false,
          eligibilityReason: 'Product is currently unlisted or inactive. Remove to proceed.',
        });
        continue;
      }

      if (product.priceMode !== 'fixed') {
        hasIneligibleItems = true;
        items.push({
          id: item.id,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          category: (product as any).categoryName || (product as any).category || 'Custom Furniture',
          image: product.primaryImage?.url || '',
          pricePaise: product.salePricePaise || ((product.startingPrice || 0) * 100),
          quantity: item.quantity,
          lineTotalPaise: 0,
          isEligible: false,
          eligibilityReason: 'Bespoke piece requires site visit and written quotation. Cannot be checked out online.',
        });
        continue;
      }

      const serverPricePaise = product.salePricePaise || ((product.startingPrice || 0) * 100);
      let priceChanged = false;
      if (item.snapshotPricePaise && item.snapshotPricePaise !== serverPricePaise) {
        priceChanged = true;
        staleWarnings.push(`Price for "${product.name}" was adjusted to current timber market rates.`);
      }

      const lineTotalPaise = serverPricePaise * item.quantity;
      subtotalPaise += lineTotalPaise;

      items.push({
        id: item.id,
        productId: product.id,
        slug: product.slug,
        name: product.name,
        category: (product as any).categoryName || (product as any).category || 'Custom Furniture',
        image: product.primaryImage?.url || '',
        pricePaise: serverPricePaise,
        originalPricePaise: item.snapshotPricePaise,
        priceChanged,
        quantity: item.quantity,
        lineTotalPaise,
        isEligible: true,
        eligibilityReason: null,
        selectedWoodSpecies: item.selectedWoodSpecies,
        selectedFinish: item.selectedFinish,
        dimensionsSummary: product.dimensionsSummary,
      });
    }

    const deliveryChargesPaise = 0;
    const taxPaise = 0;
    let discountPaise = 0;
    if (cart.appliedCoupon === 'VUYYURU2026') {
      discountPaise = Math.min(Math.round(subtotalPaise * 0.05), 250000);
    }

    const estimatedTotalPaise = Math.max(0, subtotalPaise + deliveryChargesPaise + taxPaise - discountPaise);
    const totalItemCount = items.reduce((acc, curr) => acc + (curr.isEligible ? curr.quantity : 0), 0);
    const canCheckout = items.length > 0 && !hasIneligibleItems;

    return {
      id: cart.id,
      guestSessionId: cart.guestSessionId,
      items,
      currency: 'INR',
      subtotalPaise,
      deliveryChargesPaise,
      deliveryNotice: 'Complimentary workshop pickup or local delivery within Vuyyuru town.',
      taxPaise,
      taxNotice: 'All prices include applicable taxes. Transparent workshop pricing.',
      discountPaise,
      appliedCouponCode: cart.appliedCoupon || null,
      estimatedTotalPaise,
      hasIneligibleItems,
      stalePriceWarning: staleWarnings.length > 0 ? staleWarnings.join(' ') : null,
      canCheckout,
      totalItemCount,
      updatedAt: cart.updatedAt,
    };
  }

  addItemToCart(sessionId: string, payload: any) {
    const { productId, quantity = 1, selectedWoodSpecies, selectedFinish } = payload || {};
    if (!productId) {
      return { success: false, error: 'Product ID is required.' };
    }
    if (typeof quantity !== 'number' || isNaN(quantity) || !Number.isInteger(quantity) || quantity < 1) {
      return { success: false, error: 'Quantity must be a positive whole number (minimum 1).' };
    }
    if (quantity > 10) {
      return { success: false, error: 'Maximum 10 units allowed per online order.' };
    }

    const productsResult = this.getProducts({ page: 1, limit: 100 });
    const product = (productsResult.items || []).find(
      (p: any) => p.id === productId || p.slug === productId
    );

    if (!product || product.status !== 'active') {
      return { success: false, error: 'This product is not currently available for online orders.' };
    }
    if (product.priceMode !== 'fixed') {
      return {
        success: false,
        error: 'Custom made-to-measure furniture requires site inspection and a written quotation.',
      };
    }

    let cart = this.cartStore.get(sessionId);
    if (!cart) {
      cart = {
        id: `cart_${Date.now()}`,
        guestSessionId: sessionId,
        items: [],
        appliedCoupon: null,
        updatedAt: new Date().toISOString(),
      };
      this.cartStore.set(sessionId, cart);
    }

    const existingIdx = cart.items.findIndex(
      (i: any) =>
        i.productId === product.id &&
        i.selectedWoodSpecies === (selectedWoodSpecies || undefined) &&
        i.selectedFinish === (selectedFinish || undefined)
    );

    const serverPricePaise = product.salePricePaise || ((product.startingPrice || 0) * 100);
    if (existingIdx > -1) {
      const newQty = cart.items[existingIdx].quantity + quantity;
      if (newQty > 10) {
        return { success: false, error: 'Maximum 10 units allowed per item in cart.' };
      }
      cart.items[existingIdx].quantity = newQty;
      cart.items[existingIdx].snapshotPricePaise = serverPricePaise;
    } else {
      cart.items.push({
        id: `ci_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
        productId: product.id,
        quantity,
        selectedWoodSpecies: selectedWoodSpecies || (product.woodSpecies && product.woodSpecies[0]),
        selectedFinish: selectedFinish || product.finishType,
        snapshotPricePaise: serverPricePaise,
        addedAt: new Date().toISOString(),
      });
    }

    cart.updatedAt = new Date().toISOString();
    return { success: true, cart: this.revalidateBackendCart(cart) };
  }

  updateCartItem(sessionId: string, itemId: string, quantity: number) {
    if (typeof quantity !== 'number' || isNaN(quantity) || !Number.isInteger(quantity) || quantity < 1) {
      return { success: false, error: 'Quantity must be a positive whole number (minimum 1).' };
    }
    if (quantity > 10) {
      return { success: false, error: 'Maximum 10 units allowed per online order.' };
    }

    const cart = this.cartStore.get(sessionId);
    if (!cart) {
      return { success: false, error: 'Cart not found.' };
    }

    const itemIdx = cart.items.findIndex((i: any) => i.id === itemId);
    if (itemIdx === -1) {
      return { success: false, error: 'Item not found in cart.' };
    }

    cart.items[itemIdx].quantity = quantity;
    cart.updatedAt = new Date().toISOString();
    return { success: true, cart: this.revalidateBackendCart(cart) };
  }

  removeCartItem(sessionId: string, itemId: string) {
    const cart = this.cartStore.get(sessionId);
    if (!cart) {
      return { success: false, error: 'Cart not found.' };
    }
    cart.items = cart.items.filter((i: any) => i.id !== itemId);
    cart.updatedAt = new Date().toISOString();
    return { success: true, cart: this.revalidateBackendCart(cart) };
  }

  clearCart(sessionId: string) {
    let cart = this.cartStore.get(sessionId);
    if (!cart) {
      cart = {
        id: `cart_${Date.now()}`,
        guestSessionId: sessionId,
        items: [],
        appliedCoupon: null,
        updatedAt: new Date().toISOString(),
      };
      this.cartStore.set(sessionId, cart);
    } else {
      cart.items = [];
      cart.appliedCoupon = null;
      cart.updatedAt = new Date().toISOString();
    }
    return { success: true, cart: this.revalidateBackendCart(cart) };
  }

  applyCartCoupon(sessionId: string, code: string) {
    const cleanCode = (code || '').trim().toUpperCase();
    const cart = this.cartStore.get(sessionId);
    if (!cart) {
      return { success: false, error: 'Cart not found.' };
    }

    if (cleanCode === 'VUYYURU2026') {
      cart.appliedCoupon = 'VUYYURU2026';
      cart.updatedAt = new Date().toISOString();
      return { success: true, cart: this.revalidateBackendCart(cart) };
    }

    return { success: false, error: 'Invalid or expired promotional code.' };
  }

  removeCartCoupon(sessionId: string) {
    const cart = this.cartStore.get(sessionId);
    if (cart) {
      cart.appliedCoupon = null;
      cart.updatedAt = new Date().toISOString();
    }
    return { success: true, cart: this.revalidateBackendCart(cart || { id: '', guestSessionId: sessionId, items: [], updatedAt: '' }) };
  }

  // Orders and checkout stores
  private ordersStore = new Map<string, any>();
  private idempotencyCache = new Map<string, string>();
  private siteVisitsStore = new Map<string, any>();

  getFulfilmentOptions() {
    return [
      {
        id: 'workshop_collection',
        name: 'Workshop Pickup (Direct from Vuyyuru)',
        description: 'Inspect and collect your finished timber furniture directly from our workshop at Main Bazar Road, Vuyyuru.',
        pricePaise: 0,
        estimatedDays: 'Ready in 3–5 working days',
        requiresAddress: false,
        notes: 'Meet the artisans and inspect timber joinery personally before transport.',
      },
      {
        id: 'local_delivery',
        name: 'Local Workshop Delivery (Vuyyuru Town & Mandal)',
        description: 'Complimentary safe blanket-wrapped workshop transport to your home doorstep in Vuyyuru.',
        pricePaise: 0,
        estimatedDays: '3–6 working days',
        requiresAddress: true,
        notes: 'Ground floor / lift access transit included. Handled carefully by our crew.',
      },
      {
        id: 'delivery_installation',
        name: 'Delivery + Professional Carpenter Installation',
        description: 'Direct delivery plus on-site bed assembly, alignment, levelling, and hardware tightening by master joiners.',
        pricePaise: 0,
        estimatedDays: '4–7 working days',
        requiresAddress: true,
        notes: 'Complimentary installation for qualifying solid wood beds in Vuyyuru mandal.',
      },
    ];
  }

  validateCheckout(guestSessionId: string, fulfilmentMethod: string = 'local_delivery', couponCode?: string) {
    if (couponCode) {
      this.applyCartCoupon(guestSessionId, couponCode);
    }
    const cart = this.getCart(guestSessionId);
    const changes: string[] = [];

    if (cart.items.length === 0) {
      return {
        valid: false,
        currency: 'INR',
        items: [],
        subtotalPaise: 0,
        deliveryPaise: 0,
        installationPaise: 0,
        taxPaise: 0,
        discountPaise: 0,
        totalPaise: 0,
        changes: ['Your cart is empty. Add eligible fixed-price products before checking out.'],
        canCheckout: false,
        policyNotice: 'Cannot initiate checkout with an empty cart.',
      };
    }

    const ineligible = cart.items.filter((i: any) => !i.isEligible);
    if (ineligible.length > 0) {
      ineligible.forEach((item: any) => {
        changes.push(`"${item.name}" is quote-only or custom and cannot be checked out online directly.`);
      });
    }

    const subtotalPaise = cart.subtotalPaise;
    const discountPaise = cart.discountPaise || 0;
    const totalPaise = Math.max(0, subtotalPaise - discountPaise);
    const canCheckout = cart.items.length > 0 && ineligible.length === 0;

    return {
      valid: canCheckout,
      currency: 'INR',
      items: cart.items,
      subtotalPaise,
      deliveryPaise: 0,
      installationPaise: 0,
      taxPaise: 0,
      discountPaise,
      totalPaise,
      changes,
      canCheckout,
      policyNotice: 'Final checkout revalidates timber stock availability and workshop scheduling.',
    };
  }

  createOrder(guestSessionId: string, payload: any) {
    const { idempotencyKey, contact, fulfilment, paymentMethod, orderNotes, termsAccepted } = payload;

    if (!idempotencyKey || typeof idempotencyKey !== 'string') {
      return { success: false, error: 'Idempotency key is required to prevent duplicate order placement.', statusCode: 400 };
    }

    if (this.idempotencyCache.has(idempotencyKey)) {
      const existingOrderId = this.idempotencyCache.get(idempotencyKey)!;
      const existingOrder = this.ordersStore.get(existingOrderId);
      if (existingOrder) {
        return { success: true, order: existingOrder };
      }
    }

    if (!termsAccepted) {
      return { success: false, error: 'Please accept the workshop crafting and delivery terms before proceeding.', statusCode: 400 };
    }

    if (!contact || !contact.name || contact.name.trim().length === 0) {
      return { success: false, error: 'Customer contact name is required.', statusCode: 400 };
    }

    const rawPhone = (contact.phone || '').replace(/\D/g, '');
    let normalizedPhone: string | null = null;
    if (rawPhone.length === 10 && /^[6-9]\d{9}$/.test(rawPhone)) {
      normalizedPhone = `+91 ${rawPhone.slice(0, 5)} ${rawPhone.slice(5)}`;
    } else if (rawPhone.length === 12 && rawPhone.startsWith('91')) {
      const sub = rawPhone.slice(2);
      if (/^[6-9]\d{9}$/.test(sub)) normalizedPhone = `+91 ${sub.slice(0, 5)} ${sub.slice(5)}`;
    }
    if (!normalizedPhone) {
      return { success: false, error: 'Please enter a valid 10-digit Indian mobile number (e.g., 98480 12345).', statusCode: 400 };
    }

    const cart = this.getCart(guestSessionId);
    if (!cart || cart.items.length === 0) {
      return { success: false, error: 'Your cart is empty. Cannot place an order without items.', statusCode: 400 };
    }

    const ineligible = cart.items.filter((i: any) => !i.isEligible);
    if (ineligible.length > 0) {
      return { success: false, error: 'Your cart contains custom or quote-only items that cannot be checked out online.', statusCode: 400 };
    }

    const itemSnapshots = cart.items.map((item: any) => ({
      productId: item.productId,
      productSlug: item.slug,
      productName: item.name,
      category: item.category,
      image: item.image,
      selectedWoodSpecies: item.selectedWoodSpecies,
      selectedFinish: item.selectedFinish,
      dimensionsSummary: item.dimensionsSummary,
      quantity: item.quantity,
      unitPricePaise: item.pricePaise,
      lineTotalPaise: item.lineTotalPaise,
    }));

    const calculatedSubtotalPaise = cart.subtotalPaise;
    const discountPaise = cart.discountPaise || 0;
    const totalPaise = Math.max(0, calculatedSubtotalPaise - discountPaise);

    const timestamp = Date.now();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderId = `ord_${timestamp}_${randomSuffix}`;
    const orderReference = `VC-ORD-2026-${randomSuffix}`;
    const orderToken = `tok_${Math.random().toString(36).substring(2, 15)}_${Date.now()}`;

    const orderRecord = {
      id: orderId,
      orderReference,
      orderToken,
      guestSessionId,
      items: itemSnapshots,
      contact: {
        name: contact.name.trim(),
        phone: normalizedPhone,
        email: contact.email?.trim() || undefined,
      },
      fulfilment: {
        method: fulfilment?.method || 'local_delivery',
        methodName: 'Local Workshop Delivery (Vuyyuru Town & Mandal)',
        address: fulfilment?.address,
        preferredSchedule: fulfilment?.preferredSchedule,
        deliveryChargesPaise: 0,
        installationChargesPaise: 0,
      },
      pricing: {
        currency: 'INR',
        subtotalPaise: calculatedSubtotalPaise,
        deliveryChargesPaise: 0,
        installationChargesPaise: 0,
        taxPaise: 0,
        discountPaise,
        appliedCouponCode: cart.appliedCouponCode,
        totalPaise,
      },
      orderStatus: 'pending_review',
      paymentStatus: paymentMethod === 'pay_on_delivery' ? 'unpaid' : 'pending',
      paymentMethod,
      orderNotes: orderNotes?.trim()?.slice(0, 300) || undefined,
      termsAccepted: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.ordersStore.set(orderId, orderRecord);
    this.idempotencyCache.set(idempotencyKey, orderId);
    this.clearCart(guestSessionId);

    return { success: true, order: orderRecord };
  }

  getOrderById(orderId: string, orderToken?: string, guestSessionId?: string) {
    const order = this.ordersStore.get(orderId);
    if (!order) {
      return { success: false, error: 'Order not found.', statusCode: 404 };
    }
    const tokenMatches = orderToken && order.orderToken === orderToken;
    const sessionMatches = guestSessionId && order.guestSessionId === guestSessionId;
    if (!tokenMatches && !sessionMatches) {
      return { success: false, error: 'Unauthorized: You do not have permission to view this order.', statusCode: 403 };
    }
    return { success: true, order };
  }

  createPaymentSession(payload: any) {
    const { orderId, orderToken, paymentMethod } = payload;
    const order = this.ordersStore.get(orderId);
    if (!order) {
      return { success: false, error: 'Order not found for payment session.', statusCode: 404 };
    }
    if (order.orderToken !== orderToken) {
      return { success: false, error: 'Unauthorized: Invalid order verification token.', statusCode: 403 };
    }
    return {
      success: true,
      session: {
        sessionId: `sess_${Date.now()}`,
        orderId: order.id,
        orderReference: order.orderReference,
        amountPaise: order.pricing.totalPaise,
        currency: 'INR',
        status: paymentMethod === 'pay_on_delivery' ? 'completed' : 'initiated',
        paymentMethod,
        instructions: 'Direct workshop inspection payment or advance transaction reference.',
      },
    };
  }
}


