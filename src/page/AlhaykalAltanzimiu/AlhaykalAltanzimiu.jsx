import React from "react";
import Image7 from "../../images/الهيكل التنظيمي للمعهد_page-0001.jpg";

export default function AlhaykalAltanzimiu() {
  return (
    <div className="px-3 pb-1  min-h-fit bg-gradient-to-br from-[#0f172a] to-[#f28a24] bg-fixed bg-cover">
      <div className="w-full h-[90px] lg:mb-15 mb-2"></div>
      <div className=" container  rounded-2xl overflow-hidden mx-auto shadow-2xl mb-4 bg-gray-200 ">
        <div className="bg-gray-900 w-full py-3 px-4 cursor-pointer ">
          <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
            الهيكل التنظيمي للمعهد
          </h1>
        </div>
        <div className="container mx-auto ">
          <div
            className={` gap-x-3  overflow-hidden flex items-center justify-center `}
          >
            <div className="  py-2 px-4 font-medium text-lg h-fit">
              <div>
                <img src={Image7} alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
