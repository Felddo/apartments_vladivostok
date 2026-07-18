import { motion } from "framer-motion";
import { BOOKING } from "../../data/data";

export const BookingSteps = () => {
  return (
    <motion.section 
        className="bg-white rounded-4xl p-8 md:p-10 shadow-xl scroll-mt-30"
        id="bookingsteps"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold">Как забронировать?</h2>
        <p className="text-gray-500 mt-2">Всего 4 простых шага до вашего заселения</p>
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-6`}>
        {BOOKING.map((step, inx) => (
            <div className="flex flex-col items-center text-center">
                <span className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 transition-all duration-300 hover:-translate-y-1">
                    {inx + 1}
                </span>
                <h3 className="text-base md:text-lg">
                    {step.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                    {step.description}
                </p>
            </div>
        ))}
      </div>
    </motion.section>
  );
};