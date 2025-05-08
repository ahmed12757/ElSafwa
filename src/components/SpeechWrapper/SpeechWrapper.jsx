import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SpeechWrapper = () => {
  const [enabled, setEnabled] = useState(true);
  const location = useLocation();

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

  // دالة لنطق النص
  const speakText = (text) => {
    if (!enabled || !text) return;

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
  };

  useEffect(() => {
    // عند المرور على العناصر العامة
    const speakOnHover = (event) => {
      const el = event.currentTarget;
      const text = getDirectText(el);
      speakText(text);
    };

    // عند تغيير الخيار المحدد في select
    const speakOnSelectChange = (event) => {
      const select = event.currentTarget;
      const selectedOption = select.options[select.selectedIndex];
      const text = selectedOption ? selectedOption.text : "";
      speakText(text);
    };

    // إضافة مستمع أحداث للضغط على Tab
    const handleTabNavigation = (event) => {
      if (event.key === "Tab") {
        const focusedElement = document.activeElement;
        const text = getDirectText(focusedElement);
        speakText(text);
      }
    };

    // عند تغيير الصفحة أو التفاعل مع العنصر
    const generalSelectors =
      "p, h1, h2, h3, h4, h5, h6, button, a, li, span, div, form, label";
    const generalElements = document.querySelectorAll(generalSelectors);
    const selectElements = document.querySelectorAll("select");

    generalElements.forEach((el) => {
      el.addEventListener("mouseenter", speakOnHover);
    });

    selectElements.forEach((el) => {
      el.addEventListener("change", speakOnSelectChange);
    });

    // إضافة مستمع الحدث عند الضغط على Tab
    window.addEventListener("keydown", handleTabNavigation);

    // تنظيف الأحداث عند الخروج أو تغيير الصفحة
    return () => {
      generalElements.forEach((el) => {
        el.removeEventListener("mouseenter", speakOnHover);
      });
      selectElements.forEach((el) => {
        el.removeEventListener("change", speakOnSelectChange);
      });
      window.removeEventListener("keydown", handleTabNavigation);
    };
  }, [location.pathname, enabled]);

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
