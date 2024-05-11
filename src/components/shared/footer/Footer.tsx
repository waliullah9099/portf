const Footer = () => {
  const getCurrentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#04293C]">
      <div className="max-w-7xl mx-auto px-2 py-8 text-center font-medium text-lg text-white">
        &copy; {getCurrentYear} All rights reserved by Waliullah
      </div>
    </footer>
  );
};

export default Footer;
