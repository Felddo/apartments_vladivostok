import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { TApart } from '../../types/types';


interface MyComponentProps {
  apart: TApart | null;
}


export const Carousel = ({apart}: MyComponentProps) => {
  const safeImages = apart?.images || [];

  const [mainRef, mainApi] = useEmblaCarousel();

  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: 'keepSnaps',
    align: 'center',
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {mainApi?.scrollPrev()}, [mainApi]);
  const scrollNext = useCallback(() => {mainApi?.scrollNext()}, [mainApi]);

  const scrollTo = useCallback(
    (index: number) => {
      mainApi?.scrollTo(index);
      thumbsApi?.scrollTo(index);
    }, [mainApi, thumbsApi]
  );

  useEffect(() => {
    if (!mainApi) return;
    const onSelect = () => {
      const index = mainApi.selectedScrollSnap();
      setSelectedIndex(index);
      thumbsApi?.scrollTo(index);
    };
    mainApi.on('select', onSelect);
    mainApi.on('reInit', onSelect);

    onSelect();
    return () => {
      mainApi.off('select', onSelect);
      mainApi.off('reInit', onSelect);
    };
  }, [mainApi, thumbsApi]);

  return (
    <motion.div
        className="scroll-mt-30 w-full max-w-5xl mx-auto"
        id='photos'
        initial={{ opacity: 0, x: -50}}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden rounded-3xl" ref={mainRef}>
        <div className="flex">
          {safeImages.map((src, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0">
              <img
                src={src}
                alt={`${apart?.name} во Владивостоке — фото интерьера, номер ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
                className="w-full h-[400px] object-cover"
              />
            </div>
          ))}
        </div>

        <button
          onClick={scrollPrev}
          className="absolute bottom-4 right-20 bg-primary text-white rounded-full p-3 
                     hover:-translate-x-0.5 hover:-translate-y-0.5 
                     cursor-pointer transition-transform duration-300"
          aria-label="Предыдущее фото"
          type="button"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={scrollNext}
          className="absolute bottom-4 right-4 bg-primary text-white rounded-full p-3 
                     hover:-translate-x-0.5 hover:-translate-y-0.5 
                     cursor-pointer transition-transform duration-300"
          aria-label="Следующее фото"
          type="button"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-3 overflow-hidden" ref={thumbsRef}>
        <div className="-ml-3 flex">
          {safeImages.map((src, i) => (
            <div
              key={i}
              className="min-w-0 grow-0 shrink-0 basis-1/3 pl-3"
            >
              <button
                onClick={() => scrollTo(i)}
                type="button"
                className={`block w-full overflow-hidden rounded-2xl transition ${
                  selectedIndex === i
                    ? 'outline outline-4 outline-primary -outline-offset-4'
                    : ''
                }`}
              >
                <img
                  src={src}
                  alt={`Превью ${i + 1}`}
                  className="w-full h-24 object-cover "
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};