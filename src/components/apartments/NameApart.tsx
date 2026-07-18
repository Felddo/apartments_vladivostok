import type { TApart } from "../../types/types";
import { TYPES } from "../../data/data";
import { motion } from "framer-motion";

interface MyComponentProps {
  apart: TApart | null;
}

export const NameApart = ({ apart }: MyComponentProps) => {
  return (
    <motion.div 
      className="bg-foreground rounded-4xl pt-6 px-6 pb-4 flex flex-col items-end gap-4 shadow-xl"
      initial={{ opacity: 0, x: 50}}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="uppercase text-3xl md:text-4xl lg:text-4xl font-black tracking-tighter">
        {apart?.name}
      </h1>

      <div className="flex flex-col gap-1 border-r-4 border-primary pr-4">
        <span className="uppercase text-base md:text-lg lg:text-lg opacity-80 tracking-widest">
          {apart?.addres}
        </span>
        
        <div className="flex items-baseline justify-end gap-1">
          <span className="text-xl lg:text-2xl font-light">
            {apart?.square}
          </span>
          <span className="uppercase text-sm font-bold opacity-60">
            м<sup>2</sup>
          </span>
        </div>
      </div>

      <div className="flex bg-secondary rounded-4xl p-3 font-black">
        {TYPES.map((item) => (
          <span 
            key={item}
            className={`px-4 py-1.5 rounded-full text-xs md:text-sm
              ${(item === apart?.type) ? "bg-primary text-white" : "text-black"}`}>{item}</span>
        ))}
      </div>
    </motion.div>
  );
};