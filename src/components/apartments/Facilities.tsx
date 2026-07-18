import { motion } from "framer-motion";
import type { TApart } from "../../types/types";
import { FacilityList } from "./FacilityList";

interface MyComponentProps {
  apart: TApart | null;
}


export const Facilities = ({ apart }: MyComponentProps) => {
  if (!apart || !apart.facilities.length) return null;

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-8">
        Основные удобства
      </h2>

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7"
      >
        {apart.facilities.map((facility, idx) => (
          <motion.li 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col">
            <div className="flex items-center gap-3 mb-4 transition-transform duration-300 hover:-translate-y-1">
              <div className="p-2 bg-primary rounded-xl text-white">
                  <facility.iconType className="w-6 h-6"/>
              </div>
              <h3 className="text-lg">
                  {facility.facilityName}
              </h3>
            </div>
            <FacilityList facility={facility}/>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};