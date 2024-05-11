import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-2 text-lg">
      <a
        className="social-icon text-[#1877F2] hover:bg-[#1877F2] hover:text-white"
        href="https://www.facebook.com/waliullah9099"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF />
      </a>
      <a
        className="social-icon text-[#0077b5] hover:bg-[#0077b5] hover:text-white"
        href="https://www.linkedin.com/in/waliullah9099"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a
        className="social-icon text-[#2b3137] hover:bg-[#2b3137] hover:text-white"
        href="https://github.com/waliullah9099"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialIcons;
