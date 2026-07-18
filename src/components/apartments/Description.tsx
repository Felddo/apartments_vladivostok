import { useState } from "react";
import { motion } from "framer-motion";
import type { TApart } from "../../types/types";

interface MyComponentProps {
apart: TApart | null;
}

export const Description = ({ apart }: MyComponentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (!apart) return null;

  return (
    <section 
      className="scroll-mt-40 flex flex-col"
      id="description"
    >
      <h2 className="text-2xl font-bold mb-8">
        Описание квартиры
      </h2>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 150 }}
        className="overflow-hidden relative"
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="space-y-4">
          {apart.description.map((paragraph, i) => (
            <p key={i} className="text-slate-700 leading-relaxed text-base md:text-base lg:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
        
        {!isExpanded && (
          <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
        )}
      </motion.div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 text-blue-600 font-medium self-start"
      >
        {isExpanded ? "Свернуть описание" : "Читать далее..."}
      </button>
    </section>
  );
};