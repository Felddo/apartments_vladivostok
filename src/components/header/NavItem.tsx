import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

interface Props {
  label: string;
  href: string;
}

export const NavItem = ({ label, href }: Props) => {
  return (
    <HashLink 
      to={href}
      className="hover:text-primary transition-colors duration-300"
    >
      {label}
    </HashLink>
  );
};
