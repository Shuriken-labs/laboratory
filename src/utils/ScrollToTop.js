import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Use smooth scrolling behavior
    });
  }, [pathname]);

  return null; // The component doesn't render anything
};

export default ScrollToTop;
