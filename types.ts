
export type Language = 'de' | 'es';

export interface BilingualString {
  de: string;
  es: string;
}

export interface Project {
  id: number;
  title: BilingualString;
  category: BilingualString;
  image: string;
  location: string;
  year: string;
  description: BilingualString;
  gallery: string[];
}

export interface Service {
  id: number;
  title: BilingualString;
}

export interface ProcessStep {
  id: number;
  title: BilingualString;
  description: BilingualString;
}

export interface SiteContent {
  nav: {
    projects: BilingualString;
    about: BilingualString;
    services: BilingualString;
    process: BilingualString;
    contact: BilingualString;
  };
  hero: {
    name: string;
    role: BilingualString;
    claim: BilingualString;
    cta: BilingualString;
    image: string;
  };
  about: {
    title: BilingualString;
    paragraphs: BilingualString[];
    image: string;
    signature: string;
  };
  contact: {
    title: BilingualString;
    email: string;
    instagram: string;
    address: string;
    formName: BilingualString;
    formEmail: BilingualString;
    formMessage: BilingualString;
    formButton: BilingualString;
  };
  footer: {
    rights: BilingualString;
    legal: BilingualString;
    privacy: BilingualString;
  }
}
