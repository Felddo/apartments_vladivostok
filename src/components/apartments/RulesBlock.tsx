import { motion } from "framer-motion";
import type { TApart } from "../../types/types";

interface MyComponentProps {
  apart: TApart | null;
}

export const RulesBlock = ({ apart }: MyComponentProps) => {
  if (!apart || !apart.rules.length) return null;

  return (
    <motion.div 
        className="scroll-mt-30 w-full"
        id='rules'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
    >

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {apart.rules.map((rule, idx) => {
            const isWide = idx % 3 === 0;
            const isAccent = idx % 4 === 0;

            return (
              <motion.li
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`
                  relative flex items-center gap-3 p-4 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1
                  ${(isWide || idx == apart.rules.length - 1) ? "col-span-2" : "col-span-1"}
                  ${isAccent 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-slate-700'}
                `}
              >
                <div className={`
                    p-2 rounded-xl 
                    ${isAccent ? 'bg-white/20' : 'bg-primary/20 text-primary'}
                `}>
                  <rule.iconType className="w-5 h-5" />
                </div>

                <div className="flex flex-col">
                    <span className="text-xs uppercase font-bold tracking-wider opacity-60">
                        {isWide ? 'Важно' : 'Правило'}
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        {rule.text}
                    </span>
                </div>

                {isAccent && (
                    <div className="absolute right-3 top-3 opacity-20">
                        <rule.iconType className="w-8 h-8" />
                    </div>
                )}
              </motion.li>
            );
          })}
        </ul>
    </motion.div>
  );
};