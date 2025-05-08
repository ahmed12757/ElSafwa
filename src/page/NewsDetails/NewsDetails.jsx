import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/autoplay";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
];

export default function NewsDetails() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="px-1 pb-4 min-h-fit bg-gradient-to-br from-[#0f172a] to-[#f28a24] bg-fixed bg-cover font-[Cairo]">
      <div className="w-full h-[60px] lg:h-[90px] mb-12 lg:mb-15"></div>
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-12 p-3 sm:p-6 lg:p-10 bg-white/80 rounded-xl shadow-lg max-w-full mx-auto rtl items-center lg:items-stretch gap-4 sm:gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center w-full lg:w-2/3 h-full ">
            <h2 className="text-2xl sm:text-3xl font-bold line-clamp-1 mt-2 flex items-center gap-2 text-center lg:text-right w-full mb-2 sm:mb-3 lg:mb-4 tracking-wide">
              <i className="fa-solid fa-newspaper text-primary-600"></i>
              عنوان الخبر الرئيسي
            </h2>
            <p className="text-lg sm:text-xl font-medium text-gray-700 text-center lg:text-right w-full leading-relaxed tracking-wide ">
              مناقشة مشاريع مادة نظم التحكم (١) الفرقة الثالثة قسم هندسة الحاسبات تحت إشراف: د/ فاطمة عبدالوهاب، م/ عبير سعيد
            </p>
            <div className="flex flex-col items-center lg:items-start mb-2 sm:mb-3 lg:mb-4">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 flex items-center gap-1 text-base font-semibold"
                title="مشاهدة على فيسبوك"
              >
                مشاهدة على فيسبوك
              </a>
            </div>
            <div className="flex flex-col gap-1 sm:gap-2 mb-2 sm:mb-3 lg:mb-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 text-base font-semibold">
                <span className="text-gray-700 font-bold">التاريخ :</span>
                <span className="tracking-wider">2024-06-01</span>
              </div>
            </div>
            <div className="flex gap-2 sm:gap-4 mt-2 mb-2 flex-wrap justify-center lg:justify-start">
              <NavLink
                to="/allNews"
                className="bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-2xl transition-colors text-base w-full sm:w-auto text-center shadow-md"
              >
                مشاهدة المزيد من الأخبار
              </NavLink>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 flex flex-col items-center justify-center mt-6 lg:mt-0 h-full lg:w-1/3">
            {/* Main Image Swiper */}
            <Swiper
              spaceBetween={5}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Thumbs, Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-lg border border-gray-200 mb-4"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`news-main-${idx}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Thumbnails Swiper */}
            <div className="w-64 sm:w-80 lg:w-96 flex justify-center mx-auto">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={5}
                slidesPerView={Math.min(images.length, 4)}
                watchSlidesProgress
                modules={[Thumbs]}
                className="w-full"
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`news-thumb-${idx}`}
                      className="w-16 h-16 object-cover rounded-md border border-gray-300 cursor-pointer"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
