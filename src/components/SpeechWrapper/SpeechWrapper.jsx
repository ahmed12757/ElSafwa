import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // عشان نعرف الصفحة الحالية

const SpeechWrapper = () => {
  const [enabled, setEnabled] = useState(true);
  const location = useLocation(); // بنستخدمها لمراقبة تغير الصفحة

  // دالة للحصول على النص المباشر فقط من العنصر
  const getDirectText = (element) => {
    let text = "";
    element.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent;
      }
    });
    return text.trim();
  };

  useEffect(() => {
    const speak = (event) => {
      if (!enabled) return;

      const el = event.currentTarget;
      const text = getDirectText(el);

      if (text.length > 0) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "ar-EG";

        const voices = window.speechSynthesis.getVoices();
        const arabicVoice = voices.find(
          (voice) =>
            voice.lang.startsWith("ar") &&
            (voice.name.toLowerCase().includes("majeed") ||
              voice.name.toLowerCase().includes("hazem"))
        );
        utterance.voice =
          arabicVoice || voices.find((v) => v.lang.startsWith("ar")) || null;

        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
      }
    };

    const selectors = "p, h1, h2, h3, h4, h5, h6, button, a, li, span, div";
    const elements = document.querySelectorAll(selectors);

    elements.forEach((el) => {
      el.addEventListener("mouseenter", speak);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", speak);
      });
    };
  }, [location.pathname, enabled]); // الكود يعيد التنفيذ عند كل تغيير للصفحة

  const toggleSpeech = () => {
    window.speechSynthesis.cancel();
    setEnabled(!enabled);
  };

  return (
    <div className="fixed top-1/2 left-[10px] opacity-50 transform -translate-y-1/2 z-50">
      <button
        onClick={toggleSpeech}
        title={enabled ? "إيقاف الصوت" : "تشغيل الصوت"}
        className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-white text-xl transition-colors duration-300
          ${
            enabled
              ? "bg-red-600 hover:bg-red-700"
              : "bg-green-600 hover:bg-green-700"
          }`}
      >
        <i className={`fas ${enabled ? "fa-volume-up" : "fa-volume-mute"}`}></i>
      </button>
    </div>
  );
};

export default SpeechWrapper;
