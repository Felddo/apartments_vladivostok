import type { TApart } from "../../types/types";
import { motion } from "framer-motion";

interface MyComponentProps {
  apart: TApart | null;
}

export const IconsBlock = ({ apart }: MyComponentProps) => {
  if (!apart?.icons) return null;
  const cols = Math.ceil(apart.icons.length / 2);

  return (
    <motion.div 
        className="bg-white rounded-4xl p-5 shadow-xl"
        initial={{ opacity: 0, x: 50}}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
        <div 
            className={`grid gap-y-5`}
            style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
            {apart.icons.map((item, i) => (
                <div 
                    key={i} 
                    className="flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
                >
                    <div className="mb-3 p-3 rounded-2xl bg-primary text-white">
                        <item.iconType className="w-6 h-6 md:w-6 md:h-6" />
                    </div>
                    
                    <span className="text-xs sm:text-sm">
                    {item.text}
                    </span>
                </div>
            ))}
        </div>
    </motion.div>
  );
};