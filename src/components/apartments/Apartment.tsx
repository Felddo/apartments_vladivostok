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

  return (
    <>
      <div key={slug}>
        <ScrollRestoration />
        <Header page="apartment"/>
        <div className={`px-[5%] py-10`}>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Carousel images={apartment?.images}/>
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
        </div>
        <Footer/>
      </div>
    </>
  );
};