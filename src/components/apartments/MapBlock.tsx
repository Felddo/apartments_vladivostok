import React, { useMemo } from 'react';
import { motion } from "motion/react";
import type { TApart } from "../../types/types";

interface MapBlockProps {
  apart: TApart | null;
}

export const MapBlock: React.FC<MapBlockProps> = ({ apart }) => {
  const mapUrl = useMemo(() => {
    if (!apart?.lat || !apart?.lng) return null;
    const { lat, lng } = apart;
    const zoom = 16;
    return `https://yandex.ru/map-widget/v1/?ll=${lng}%2C${lat}&z=${zoom}&pt=${lng}%2C${lat}%2Cpm2rdl`;
  }, [apart?.lat, apart?.lng]);

  if (!apart || !mapUrl) return null;

  return (
    <motion.div 
      className="scroll-mt-30 w-full bg-white rounded-4xl p-8 md:p-10 shadow-xl"
      id='location'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-6">
        
        <div className="space-y-2">
            <h2 className="text-2xl font-bold">
                Расположение
            </h2>
            <address className="text-slate-700 text-lg">
                {apart.addres}
            </address>
        </div>

        <div className="relative w-full h-[400px] overflow-hidden rounded-3xl">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            allowFullScreen={true}
            title="Интерактивная карта"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
};