export default function SocialSidebar() {
  const icons = [
    {
      href: "https://www.facebook.com/AlSafwaInstitute",
      class: "fab fa-facebook-f",
    },
    { href: "https://x.com", class: "fab fa-x-twitter" },
    {
      href: "https://www.instagram.com/alsafwa_high_institute/",
      class: "fab fa-instagram",
    },
    { href: "https://telegram.org", class: "fab fa-telegram-plane" },
    {
      href: "https://www.youtube.com/@al-safwahighinstituteofeng8256",
      class: "fab fa-youtube",
    },
  ];

  return (
    <div className=" absolute top-1/2 right-3 transform -translate-y-1/2 flex flex-col items-center space-y-4 px-2 py-4 z-50">
      <div className="hidden lg:block w-[2px] h-16 bg-white" />

      {icons.map((item, idx) => (
        <a
          key={`${idx}`}
          href={`${item.href}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl hover:scale-125 transition-transform"
        >
          <i className={`${item.class}`}></i>
        </a>
      ))}

      <div className="hidden lg:block w-[2px] h-16 bg-white" />
    </div>
  );
}
