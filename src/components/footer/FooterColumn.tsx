import type { TFooterColumn } from "../../types/types";
import { HashLink } from 'react-router-hash-link';

export const FooterColumn = ({ title, links, className}: TFooterColumn) => {
  return (
    <div className={`lg:ml-5 text-footer ${className}`}>
      <h3 className="text-black mb-4 uppercase">{title}</h3>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <HashLink
              to={`/kvartiry-posutochno-vladivostok/${link.slug}`}
              className="hover:text-primary cursor-pointer transition-colors duration-300"
            >
              {link.label}
            </HashLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
