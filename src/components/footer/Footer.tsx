import { motion } from "motion/react";
import { FooterColumn } from "./FooterColumn";
import { FooterContacts } from "./FooterContacts";
import { FOOTER_CONTACTS, FOOTER_ROOMS } from "../../data/data";


export const Footer = () => {
  return (
    <motion.footer
      id="contacts"
      className="px-[5%] py-[3%] flex flex-col gap-10 bg-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <strong className="uppercase title-footer font-black text-black">Аренда квартир</strong>
          <p className="text-footer">
            Три уютные квартиры посуточно от собственника. Идеально подходят как для отпуска у моря, так и для деловых поездок.
            Прямое бронирование без комиссий и переплат, гибкие условия заселения и выезда
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FOOTER_ROOMS.map((section) => (
            <FooterColumn
              key={section.title}
              title={section.title}
              links={section.links}
              className=""
            />
          ))}
          
          <address className="flex flex-col lg:col-span-2 gap-4">
            <h3 className="text-footer text-black uppercase">Контакты</h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_CONTACTS.map((section) => (
                <FooterContacts
                  key={section.name}
                  name={section.name}
                  number={section.number}
                  links={section.links}
                  className=""
                />
              ))}
            </ul>
          </address>
        </div>
      </div>

      <hr className="text-inf"/>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 text-footer uppercase">
        <span>
          © {new Date().getFullYear()} АРЕНДА КВАРТИР · ВСЕ ПРАВА ЗАЩИЩЕНЫ
        </span>
        <div className="flex items-center gap-2 md:justify-self-end">
          <span className="block">Сделано с любовью 🧡</span>
        </div>
      </div>
    </motion.footer>
  );
};
