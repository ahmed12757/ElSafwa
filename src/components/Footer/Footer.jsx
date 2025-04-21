import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-900 px-4 py-3 ">
        <footer className="container mx-auto grid grid-cols-12 space-y-4 md:space-y-0 text-gray-300 py-4">
          <div className="md:col-span-6 col-span-12  md:text-left ">
            <div className="flex justify-center flex-col space-y-3">
              <h1 className="text-2xl font-bold text-center md:text-start">
                تواصل معنا
              </h1>
              <ul className="space-y-2 md:text-start">
                <li className="text-lg font-semibold">
                  <i class="fa-solid fa-location-dot"></i>{" "}
                  <span className="font-bold"> العنوان : </span> ك 39 أيسر طريق
                  مصر- الإسماعيلية الصحراوى- أمام مدينة الشروق
                </li>
                <li className="text-lg font-semibold">
                  <i class="fa-solid fa-phone-flip"></i>{" "}
                  <span className="font-bold"> رقم التليفون : </span> 0226289010
                  – 01000389996-01273973013{" "}
                </li>
                <li className="text-lg font-semibold">
                  <i class="fa-solid fa-paper-plane"></i>{" "}
                  <span className="font-bold">الرقم البريدى : </span>11837
                  الشروق ص. ب 162{" "}
                </li>
                <li className="text-lg font-semibold">
                  <i class="fa-solid fa-envelope"></i>{" "}
                  <span className="font-bold">البــريد الإلكتــروني : </span>
                  <a href="mailto:info@alsafwa.edu.eg">info@alsafwa.edu.eg</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-6 col-span-12 rounded-lg overflow-hidden shadow-lg ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d220709.67451443936!2d31.635828000000004!3d30.191742000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145802b2150225c5%3A0xe432633adc3d0d12!2sAl-Safwa%20Higher%20Institute%20for%20Engineering!5e0!3m2!1sen!2sus!4v1744978394048!5m2!1sen!2sus"
              title="Google Map"
              className="w-full h-full border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </footer>
      </div>
      <div className="bg-gray-950 px-4 py-3 text-white text-center">
        <p>
          <span>جميع الحقوق محفوظة </span>
          <i class="fa-regular fa-copyright"></i>{" "}
          <span> معهد الصفوة العالي للهندسة </span>
        </p>
        <p className="text-lg font-semibold">
          <span>Created By :</span> Eng/ Ali Hanafy
          <p>
            {" "}
            <a
              href="https://linktr.ee/A7M3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Eng/Ahmed Mohamed{" "}
            </a>
            &
          </p>
        </p>
      </div>
    </>
  );
}
