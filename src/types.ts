export type Language = 'en' | 'ru' | 'tr';

export interface Skipper {
  id: string;
  name: string;
  avatar: string;
  license: string;
  experienceYears: number;
  nauticalMiles: number;
  rating: number;
  bio: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  anchorType: 'Marina' | 'Secluded Bay' | 'Island Port' | 'Buoy Field';
  distanceNm: number;
}

export interface Expedition {
  id: string;
  title: string;
  slug: string;
  region: 'mediterranean' | 'atlantic' | 'norway' | 'caribbean' | 'turkey_greece';
  regionLabel: string;
  country: string;
  startPort: string;
  endPort: string;
  dates: string;
  durationDays: number;
  pricePerPersonEur: number;
  totalSpots: number;
  spotsLeft: number;
  difficulty: 'Easy' | 'Moderate' | 'Adventure';
  yachtModel: string;
  yachtType: 'Monohull' | 'Catamaran';
  yachtYear: number;
  yachtLengthFt: number;
  cabins: number;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  skipper: Skipper;
  itinerary: ItineraryDay[];
  included: string[];
  notIncluded: string[];
}

export interface DestinationHub {
  id: string;
  name: string;
  title: string;
  season: string;
  waterTemp: string;
  windCondition: string;
  idealFor: string;
  image: string;
  popularRoutes: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  city: string;
  avatar: string;
  tripTitle: string;
  quote: string;
  rating: number;
  milesTraveled: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  badge?: string;
  description: string;
  specs: string[];
}

export interface TranslationContent {
  nav: {
    tagline: string;
    features: string;
    specs: string;
    offlineBadge: string;
    launchBtn: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    quickStats: {
      gpsStat: string;
      gpsDesc: string;
      wmmStat: string;
      wmmDesc: string;
      cartographyStat: string;
      cartographyDesc: string;
    };
  };
  features: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    items: {
      passagePlan: {
        title: string;
        desc: string;
        tag: string;
      };
      teaching: {
        title: string;
        desc: string;
        tag: string;
      };
      smartNavigator: {
        title: string;
        desc: string;
        tag: string;
      };
      paperChartOverlay: {
        title: string;
        desc: string;
        tag: string;
      };
      cloudSync: {
        title: string;
        desc: string;
        tag: string;
      };
    };
  };
  liveDemoBanner: {
    heading: string;
    text: string;
    launchText: string;
    pwaNotice: string;
  };
  deployment: {
    badge: string;
    title: string;
    subtitle: string;
    openModalBtn: string;
    dnsTitle: string;
    dnsDesc: string;
    cfPagesTitle: string;
    cfPagesDesc: string;
  };
  footer: {
    tagline: string;
    contactLabel: string;
    emailCopied: string;
    copyEmail: string;
    rights: string;
    linksTitle: string;
    mainSite: string;
    navigatorApp: string;
    community: string;
    privacyNote: string;
  };
}
