import { motion } from "framer-motion";
import { Link } from "react-scroll";

interface MenuItem {
  to: string;
  label: string;
}

interface MenuProps {
  setNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  navbar: boolean;
}

const menuItems: MenuItem[] = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "services", label: "Services" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "education", label: "Education" },
  { to: "blogs", label: "Blogs" },
  { to: "contact", label: "Contact" },
];

const menuItemVariants = {
  hidden: { opacity: 0, x: -10, y: -10 },
  visible: { opacity: 1, x: 0, y: 0 },
  hover: { scale: 1.1 },
};

const NavItems: React.FC<MenuProps> = ({ setNavbar, navbar }) => {
  return (
    <ul className="h-screen md:h-auto items-center justify-center md:flex">
      {menuItems.map((item, index) => (
        <motion.li
          key={item.to}
          className="menuItem rounded-lg overflow-hidden"
          variants={menuItemVariants}
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 6px 20px rgba(0, 255, 255, 0.5)",
          }}
          transition={{ duration: 0.1, delay: index * 0.05 }}
        >
          <Link
            to={item.to}
            smooth={true}
            offset={-80}
            duration={1000}
            onClick={() => setNavbar(!navbar)}
            className="py-3 px-4"
          >
            {item.label}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};

export default NavItems;
