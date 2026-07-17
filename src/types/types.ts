import type { IconType } from "react-icons/lib";


export interface NavLink {
  label: string;
  href: string;
}
export interface TLinks {
  main: NavLink[];
  apartment: NavLink[];
}

export interface TUlBlock {
  iconType: IconType;
  facilityName: string;
  facilityItems: string[];
}

export interface Ticons {
  iconType: IconType;
  text: string;
}

export interface TApart {
  name: string;
  square: number;
  mainImage: string;
  images: string[];
  type: "Студия" | "1-комн" | "3-комн";
  addres: string;
  lat: number;
  lng: number;
  ical: string;
  icons: Ticons[];
  description: string[];
  facilities: TUlBlock[];
  rules: Ticons[];
}


export interface TName {
  name: string;
  image: string;
  slug: string;
}

export interface TFooterColumn {
  title: string;
  links: {
    label: string;
    slug: string;
  }[];
  className?: string;
}

export type TLink = {
  href: string;
  type: "telegram" | "whatsapp" | "max";
};

export type TFooterContacts = {
  name: string;
  number: string;
  links: TLink[];
  className?: string;
};