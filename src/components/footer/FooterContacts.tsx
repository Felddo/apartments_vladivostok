import type { TFooterContacts } from "../../types/types";
import { SiTelegram, SiWhatsapp } from "react-icons/si";


export const FooterContacts = ({ name, number, links, className }: TFooterContacts) => {
  return (
    <li
      className={`flex justify-between bg-primary px-5 py-3 text-white text-footer rounded-full  hover:-translate-x-0.5 hover:-translate-y-0.5 cursor-pointer transition-transform duration-300 ${className}`}
    >
      <div className="flex flex-col">
        <span className="font-bold">{name}</span>
        <a href={`tel:${number.replace(/\D/g, '')}`} className="hover:underline">
          {number}
        </a>
      </div>

      <div className="flex items-center gap-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110"
            aria-label={`Связаться с ${name} через ${link.type}`}
          >
            {link.type === "telegram" && (
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#27A7E7]">
                <SiTelegram size={18} color="white"/>
              </span>
            )}

            {link.type === "whatsapp" && (
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366]">
                <SiWhatsapp size={18} color="white"/>
              </span>
            )}

            {link.type === "max" && (
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600">
                <span className="text-[10px] font-black text-white pt-[1px]">
                  макс
                </span>
              </span>
            )}
          </a>
        ))}
      </div>
    </li>
  );
};