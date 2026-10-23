export interface LinkItem {
  label: string;
  href: string;
}

export interface ImageItem {
  src: string;
  alt: string;
}

export interface SectionHeading {
  main: string;
  middle?: string;
  highlight?: string;
  script?: string;
}

export interface SocialLink {
  name?: string;
  platform?: string;
  url: string;
  icon?: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbPageData {
  title: string;
  breadcrumb?: BreadcrumbItem[];
  items?: BreadcrumbItem[];
}

export interface PageBannersData {
  pages: {
    about?: BreadcrumbPageData;
    services?: BreadcrumbPageData;
    serviceDetail?: BreadcrumbPageData;
    blog?: BreadcrumbPageData;
    blogs?: BreadcrumbPageData;
    blogDetail?: BreadcrumbPageData;
    contact?: BreadcrumbPageData;
    testimonials?: BreadcrumbPageData;
    [key: string]: BreadcrumbPageData | undefined;
  };
}

export interface GlobalData {
  companyName: string;
  logo: ImageItem;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  socials: SocialLink[];
}

export interface HeaderData {
  logo: ImageItem;
  menu: LinkItem[];
  cta: LinkItem;
}

export interface HeroData {
  image: ImageItem;
  heading: SectionHeading;
  cta: LinkItem;
}

export interface AboutUsData {
  badge: string;
  heading: SectionHeading;
  description: string;
  list: string[];
  cta: LinkItem;
  images: {
    left: string;
    right: string;
  };
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  imageType?: string;
  href: string;
}

export interface ServiceDetailFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceDetailStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceDetailItem {
  slug: string;
  breadcrumb: {
    title: string;
    items: BreadcrumbItem[];
  };
  section1: {
    badge: string;
    heading: SectionHeading;
    description: string;
    cta: LinkItem;
    introRight: string;
    list: ServiceDetailFeature[];
  };
  section2: {
    image: string;
    badge: string;
    heading: SectionHeading;
    description: string;
    checklist: string[];
  };
  section3: {
    badge: string;
    heading: SectionHeading;
    description: string;
    image: string;
    list: ServiceDetailStep[];
  };
}

export interface ServicesData {
  badge: string;
  description: string;
  heading: SectionHeading;
  list: ServiceItem[];
  serviceDetails?: {
    list: ServiceDetailItem[];
  };
}

export interface WorkingProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface WorkingProcessData {
  badge: string;
  heading: SectionHeading;
  images: {
    execution: string;
    consultation: string;
    planning: string;
  };
  list: WorkingProcessStep[];
}

export interface TestimonialItem {
  id: string;
  quote?: string;
  feedback?: string;
  author: string;
  role: string;
  avatar?: string;
  rating?: number;
  initial?: string;
}

export interface TestimonialsData {
  badge: string;
  heading: SectionHeading;
  image: string;
  list: TestimonialItem[];
  page?: {
    list: TestimonialItem[];
  };
}

export interface BlogItem {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  href: string;
}

export interface BlogDetailData {
  badge: string;
  date: string;
  author: string;
  heading: SectionHeading;
  featuredImage: ImageItem;
  paragraphs: string[];
  checklist: string[];
  quote: {
    text: string;
    author: string;
  };
  closingParagraph: string;
}

export interface BlogNewsData {
  badge: string;
  heading: SectionHeading;
  cta: LinkItem;
  list: BlogItem[];
  details?: BlogDetailData;
}

export interface EnquiryPageData {
  badge: string;
  heading: SectionHeading;
  description: string;
  eventTypes: string[];
  buttonText: string;
  bgImage: string;
}

export interface ContactDetailCard {
  type: string;
  title: string;
  lines: string[];
}

export interface ContactPageData {
  formSection: {
    badge: string;
    heading: SectionHeading;
    description: string;
    buttonText: string;
    image: string;
  };
  mapSection: {
    badge: string;
    heading: SectionHeading;
    description: string;
    buttonText: string;
    locationPin: string;
  };
  detailsSection: {
    badge: string;
    heading: SectionHeading;
    list: ContactDetailCard[];
  };
}

export interface FooterData {
  heading: {
    script: string;
    main: string;
  };
  menu: LinkItem[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  socials: SocialLink[];
  copyright: string;
}

export interface SectionProps<T = any> {
  data?: T;
}

export namespace SectionProps {
  export type Header = { data?: HeaderData };
  export type Hero = { data?: HeroData };
  export type About = { data?: AboutUsData; showButton?: boolean };
  export type Services = { data?: ServicesData; showButton?: boolean };
  export type WorkingProcess = { data?: WorkingProcessData };
  export type Testimonials = { data?: TestimonialsData };
  export type Blog = { data?: BlogNewsData; showButton?: boolean; maxItems?: number };
  export type Footer = { data?: FooterData };
  export type Breadcrumb = { data?: BreadcrumbPageData; title?: string; items?: BreadcrumbItem[]; className?: string };
  export type EnquiryPage = { data?: EnquiryPageData };
  export type ContactPage = { data?: ContactPageData };
}

export type HeaderProps = SectionProps.Header;
export type HeroProps = SectionProps.Hero;
export type AboutProps = SectionProps.About;
export type ServicesProps = SectionProps.Services;
export type WorkingProcessProps = SectionProps.WorkingProcess;
export type TestimonialsProps = SectionProps.Testimonials;
export type BlogProps = SectionProps.Blog;
export type FooterProps = SectionProps.Footer;
export type BreadcrumbProps = SectionProps.Breadcrumb;

export interface TemplateComponentRef {
  key: string;
  component: string;
}

export interface OrviqueTemplateData {
  categories: {
    Orvique: {
      templateComponents?: {
        [template: string]: {
          shared: { Header: string; Footer: string };
          pages: { [page: string]: { components: TemplateComponentRef[] } };
        };
      };
      sections: {
        Global?: { variants?: { OrviqueGlobal1?: GlobalData } };
        Header?: { variants?: { OrviqueHeader1?: HeaderData } };
        PageBanners?: { variants?: { OrviquePageBanners1?: PageBannersData } };
        HeroBanner?: { variants?: { OrviqueHeroBanner1?: HeroData } };
        AboutUs?: { variants?: { OrviqueAboutUs1?: AboutUsData } };
        Services?: { variants?: { OrviqueServices1?: ServicesData } };
        WorkingProcess?: { variants?: { OrviqueWorkingProcess1?: WorkingProcessData } };
        Testimonials?: { variants?: { OrviqueTestimonials1?: TestimonialsData } };
        BlogNews?: { variants?: { OrviqueBlogNews1?: BlogNewsData } };
        EnquiryPage?: { variants?: { OrviqueEnquiryPage1?: EnquiryPageData } };
        ContactPage?: { variants?: { OrviqueContactPage1?: ContactPageData } };
        Footer?: { variants?: { OrviqueFooter1?: FooterData } };
      };
    };
  };
}
