import React from "react";
import { NavLink } from "react-router-dom";
import Image from "../../images/471472905_1118713656926705_8957267301599236104_n-1536x1152.jpg";

export default function Card() {
  return (
    <>
      <div className="col-span-12 sm:col-span-6  lg:col-span-3  rounded-2xl overflow-hidden shadow-2xl">
        <div className="  ">
          <img src={Image} alt="" className="w-full" />
          <div className=" flex flex-col  space-y-2 px-3 py-2 bg-gray-100">
            <p className=" text-xl font-semibold line-clamp-1 mt-2">
              مناقشة مشاريع مادة نظم التحكم (١) الفرقة الثالثة قسم هندسة
              الحاسبات تحت إشراف: د/ فاطمة عبدالوهاب م/ عبير سعيد
            </p>
            <p className=" text-lg font-medium text-gray-600 ">
              مناقشة مشاريع مادة نظم التحكم (١)الفرقة الثالثة قسم هندسة
              الحاسباتتحت إشراف:د/ فاطمة عبدالوهابم/ عبير سعيد <br />
              <a href="" className={`text-blue-500 hover:text-blue-700`}>
                المشاهدة على فيسبوك
              </a>
            </p>
            <div className=" flex items-center">
              <p className="text-lg font-semibold">التاريخ :</p>
              <div className="flex items-center gap-6 text-gray-500 text-base font-semibold">
                <span>2024-06-01</span>
              </div>
            </div>
            <NavLink
              to={`/newsDetails`}
              className={`py-2 px-3 bg-primary-500 hover:bg-transparent hover:transition-all hover:duration-300 duration-300 hover:border border hover:border-primary-500 border-primary-500  rounded-2xl w-fit mt-5 mb-2 text-lg font-medium hover:text-primary-900 `}
            >
              تابع المزيد
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
