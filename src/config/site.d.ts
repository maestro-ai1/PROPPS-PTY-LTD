// Type declarations for site.js
export declare const SITE: {
  name: string;
  tagline: string;
  domain: string;
  abn: string;
  abrUrl?: string;
  locale: string;
  currency: string;
  target: string;
  primaryColor: string;
  gscVerification: string;
  indexNowKey: string;
  cartKey: string;
};

export declare const CONTACT: {
  abn?: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  hq: string;
  country: string;
};

export declare const SHOP: {
  minOrder: number;
  freeShippingThreshold: number;
  shippingFee: number;
  cryptoDiscount: number;
  paymentMethods: string[];
};

export declare const FORMS: {
  provider: string;
  smtpFrom: string;
  web3formsKey: string;
  resendFrom: string;
  turnstileSiteKey: string;
};

export interface ReplyPaymentMethod {
  id: string;
  label: string;
  opening: string;
  closing: string;
  instantRailNote?: string;
  discount?: { percent: number; label: string };
}

export declare const REPLY: {
  brand: { primary: string; headerDark: string };
  currency: { code: string; symbol: string };
  orderPrefix: string;
  headerTagline: string;
  dispatchLine: string;
  bizNumber: { label: string; value: string } | null;
  channels: { email: string; whatsapp: string; whatsappCountryCode: string };
  deadlineHours: number;
  paymentMethods: ReplyPaymentMethod[];
};

export declare const CHAT: {
  channels: Array<{ type: string; value: string }>;
};

export declare const BRAND: {
  foundingYear: string;
  foundingLocation: string;
  description: string;
  milestones: Array<{ year: string; event: string }>;
  differentiation: string[];
  sameAs: string[];
  awards: string[];
};

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export declare const CATEGORIES: Category[];

export interface Product {
  slug: string;
  name: string;
  price: number;
  category: string;
  badge?: string;
  featured?: boolean;
  images: string[];
  shortDescription: string;
  description: string;
  details?: Record<string, string>;
}

export declare const PRODUCTS: Product[];

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export declare const POSTS: Post[];

export declare const PAGES: Record<string, boolean>;

export declare const FAQ: Array<{ question: string; answer: string }>;

export declare const COMPLIANCE: {
  bannedTerms: string[];
  requiredFramings: string[];
  prohibitedClaims: string[];
  ageGate: boolean;
  ageMinimum: number;
  disclaimer: string;
};
