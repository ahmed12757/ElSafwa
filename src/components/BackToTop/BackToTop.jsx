import { useEffect, useState, useRef } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // لو المستخدم نزل أكتر من 300px
      if (window.scrollY > 300) {
        setVisible(true);

        // إعادة ضبط العداد كل مرة المستخدم يعمل Scroll
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        // الزر يختفي بعد 5 ثواني
        timeoutRef.current = setTimeout(() => {
          setVisible(false);
        }, 5000);
      } else {
        setVisible(false);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-primary-500/70 hover:bg-primary-700/90 text-white p-4 rounded-full shadow-lg hover:transition-all hover:duration-300"
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up animate-bounce"></i>
      </button>
    )
  );
};

export default BackToTop;
