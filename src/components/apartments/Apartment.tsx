import { useParams } from "react-router-dom";

import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { NameApart } from "./NameApart";
import { IconsBlock } from "./IconsBlock";
import { Carousel } from "./Carousel";
import { Description } from "./Description";
import { Facilities } from "./Facilities";
import { RulesBlock } from "./RulesBlock";
import { MapBlock } from "./MapBlock";
import { Calendar } from "../Calendar/Calendar";

import { ScrollRestoration } from 'react-router-dom';

import { APART_INFO } from "../../data/data";


export const Apartment = () => {
  const { slug } = useParams();
  const apartment = slug ? APART_INFO[slug] : null;
  console.log("Текущий slug из URL:", slug);
  console.log("Найдена ли квартира в данных:", apartment?.seoTitle);

  return (
    <>
      <title>{`${apartment?.seoTitle} — Аренда во Владивостоке`}</title>
      <meta name="description" content={apartment?.shortDescription} />
      {apartment && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
              }
            })
          }}
        />
      )}

      <main key={slug}>
        <ScrollRestoration />
        <Header page="apartment"/>
        <article className={`px-[5%] py-10`}>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Carousel apart={apartment}/>
              <div className="grid grid-rows-1 lg:grid-rows-2 gap-6">
                <NameApart apart={apartment}/>
                <IconsBlock apart={apartment}/>
              </div>
            </div>
            <div className="bg-white rounded-4xl p-8 md:p-10 shadow-xl flex flex-col">
              <Description apart={apartment}/>
              <Facilities apart={apartment}/>
            </div>
            <RulesBlock apart={apartment}/>
            <Calendar ical={apartment?.ical}/>
            <MapBlock apart={apartment}/>
          </div>
        </article>
        <Footer/>
      </main>
    </>
  );
};