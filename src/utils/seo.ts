import type { TApart } from "../types/types";
import { FOOTER_CONTACTS } from "../data/data";

const allLinks: string[] = [];
FOOTER_CONTACTS.forEach(person => {
  person.links.forEach(link => {
    allLinks.push(link.href);
  });
});

export const getApartmentSchema = (apartment: TApart, url: string) => {
  return {
              "@context": "https://schema.org",
              "@type": "Accommodation",
              "name": apartment?.name,
              "description": apartment?.shortDescription,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Владивосток",
                "streetAddress": apartment?.addres
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": apartment?.lat,
                "longitude": apartment?.lng
              },
              "image": apartment?.mainImage,
              "occupancy": {
                "@type": "QuantitativeValue",
                "maxValue": apartment?.icons?.[0]?.text
              },
              "url": url
  };
};

export const getMainSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Аренда квартир во Владивостоке посуточно",
    "url": "https://apartsvl.ru",
    "sameAs": allLinks,
    "image": "https://apartsvl.ru/apple-touch-icon.png",
    "telephone": "+79147048747",
    "priceRange": "RUB",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Владивосток",
      "addressRegion": "Приморский край",
      "addressCountry": "RU"
    },
    "description": "Посуточная аренда уютных апартаментов во Владивостоке от собственника. Квартиры в центре, вид на море, отчетные документы.",
  };
};