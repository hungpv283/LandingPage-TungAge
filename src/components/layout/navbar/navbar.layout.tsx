import { listMenu } from "@/constants/menu/listMenu.menu";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [magnifyVisible, setMagnifyVisible] = useState(false);
  const [magnifyImg, setMagnifyImg] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMagnify = () => {
    setMagnifyVisible(false);
    setTimeout(() => setMagnifyImg(null), 800);
  };

  return (
    <>
      {magnifyVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 animate-fadeIn">
          <button
            className="absolute top-5 right-5 text-white text-4xl hover:text-green-500"
            onClick={closeMagnify}
          >
            &times;
          </button>
          {magnifyImg && (
            <div
              className="w-11/12 h-5/6 bg-center bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${magnifyImg})` }}
            ></div>
          )}
        </div>
      )}

      <header
        className={`sticky top-0 w-full py-4 px-6 z-40 transition-all duration-300 ${isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
          }`}
      >
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-red-500">Tungage FreeStyle</div>

          <div className="hidden md:flex space-x-6 text-lg">
            {listMenu.map((menu, index) => (
              <a
                key={index}
                href={menu.href}
                className="hover:underline decoration-red-500 underline-offset-4"
              >
                {menu.title}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Menu */}
          <button className="md:hidden text-2xl">☰</button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
