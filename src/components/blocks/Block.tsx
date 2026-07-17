import type { TName } from "../../types/types";
import { motion } from "motion/react";
// import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

interface IBlockProps extends TName {
  className?: string;
  animation?: number;
}

export const Block = ({ name, image, slug, className, animation }: IBlockProps) => {

  return (
    <motion.div 
      className={`relative overflow-hidden rounded-4xl p-8 flex flex-col justify-between shadow-xl ${className}
      hover:-translate-x-0.5 hover:-translate-y-0.5 cursor-pointer transition-transform duration-300`}
      initial={{ opacity: 0, x: (Number(animation) / 2 !== 0) ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src={image} 
        alt={`Квартира ${name}`}
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <h2 className="title-card text-black relative">{name}</h2>


      <HashLink
        to={`/kvartiry-posutochno-vladivostok/${slug || ''}`}
        className="relative z-10 bg-primary px-5 py-3 text-white btn-text rounded-full w-fit"
      >
        Подробнее
      </HashLink>
    </motion.div>
  );
};