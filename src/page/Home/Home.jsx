import React from "react";
import Image1 from "../../images/366367874_757780299686711_38417103172271602_n.jpg";
import Image2 from "../../images/366362704_757780206353387_2280086567107803439_n.jpg";
import Image3 from "../../images/366743172_757780193020055_739551604709386342_n.jpg";
import Background from "../../images/article.jpg";
import Image4 from "../../images/uxbTMLX.jpg";
import Image5 from "../../images/image_1649764910_zFZYkDimjdZFAuMMW3DhnTKMmPKNQrKA3lz6QdPO.jpg";
import Image6 from "../../images/بحث-عن-الحاسوب-فوائده-وأضراره-جاهز-للتحميل.jpg";
import Image7 from "../../images/1.jpg";
import User1 from "../../images/WhatsApp-Image-2024-01-03-at-4.56.56-PM.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Card from "../../components/Card/Card";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <section className="w-full  h-screen relative  ">
          <div className="bg-black/30 absolute top-0 bottom-0 right-0 left-0 z-10"></div>
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            modules={[Autoplay]}
            className="h-full "
          >
            <SwiperSlide>
              <div className="h-full ">
                <img
                  src={Image1}
                  alt=""
                  className="w-full h-full inline-block  object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full ">
                <img
                  src={Image2}
                  alt=""
                  className="w-full h-full inline-block  object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full ">
                <img
                  src={Image3}
                  alt=""
                  className="w-full h-full inline-block  object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className=" w-full container absolute !mx-auto left-0 px-3 right-0 -bottom-[44px] z-30  ">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 5000,
              }}
              navigation={true}
              breakpoints={{
                620: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },

                930: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },

                1124: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              modules={[Navigation, Pagination, Autoplay]}
              className="flex items-center justify-center "
            >
              <SwiperSlide className=" bg-gray-300/50 flex items-center justify-center flex-col rounded-2xl overflow-hidden">
                <NavLink to={`/emailPage`}>
                  <div className="h-[150px] pt-10 text-5xl font-bold flex items-center justify-center">
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <p className="bg-primary-500 w-full py-2 text-center text-xl font-bold flex items-center justify-center hover:text-white  hover:transition-colors hover:duration-300 duration-300">
                    البريـــد الإلكترونـــــي
                  </p>
                </NavLink>
              </SwiperSlide>
              <SwiperSlide className=" bg-gray-300/50 flex items-center justify-center flex-col rounded-2xl overflow-hidden">
                <NavLink to={`/libraryPage`}>
                  <div className="h-[150px] pt-10 text-5xl font-bold flex items-center justify-center">
                    <i class="fa-solid fa-book"></i>
                  </div>
                  <p className="bg-primary-500 w-full py-2 text-center text-xl font-bold flex items-center justify-center hover:text-white  hover:transition-colors hover:duration-300 duration-300">
                    المكتبــــــة الإلكترونيـــــة
                  </p>
                </NavLink>
              </SwiperSlide>
              <SwiperSlide className=" bg-gray-300/50 flex items-center justify-center flex-col rounded-2xl overflow-hidden">
                <NavLink to={`lmsPage`}>
                  <div className="h-[150px] pt-10 text-5xl font-bold flex items-center justify-center">
                    <i class="fa-solid fa-circle-user"></i>
                  </div>
                  <p className="bg-primary-500 w-full py-2 text-center text-xl font-bold flex items-center justify-center hover:text-white  hover:transition-colors hover:duration-300 duration-300">
                    نظام إدارة التعلم (LMS)
                  </p>
                </NavLink>
              </SwiperSlide>
              <SwiperSlide className=" bg-gray-300/50 flex items-center justify-center flex-col rounded-2xl overflow-hidden">
                <NavLink to={`/examPage`}>
                  <div className="h-[150px] pt-10 text-5xl font-bold flex items-center justify-center">
                    <i class="fa-regular fa-file"></i>
                  </div>
                  <p className="bg-primary-500 w-full py-2 text-center text-xl font-bold flex items-center justify-center hover:text-white  hover:transition-colors hover:duration-300 duration-300">
                    نتائج الامتحانات
                  </p>
                </NavLink>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className=" container mx-auto w-full mt-22 py-4">
          <h2 className=" flex justify-center items-center text-2xl font-bold my-4">
            احدث الاخبار
          </h2>

          <div className=" grid grid-cols-12 gap-4 px-4 ">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div className="flex items-center text-end justify-end px-4 my-6">
            <NavLink
              to={`/allNews`}
              className=" text-lg font-semibold hover:text-primary-500 hover:transition-colors duration-300 hover:duration-300"
            >
              المزيد من الاخبار{" "}
              <span>
                {" "}
                <i class="fa-solid fa-angle-left"></i>{" "}
              </span>
            </NavLink>
          </div>
        </section>

        <section
          style={{
            backgroundImage: `url(${Background})`,
            backgroundAttachment: "fixed",
          }}
          className="w-full min-h-[500px] mt-10  "
        >
          <div className="min-h-[500px] flex items-center justify-center ">
            <div className="w-full min-h-[500px] bg-black/30  py-6 flex items-center justify-center flex-col ">
              <p className="text-4xl font-semibold text-white text-center my-10 px-4">
                احصائية خريجى معهد الصفوة العالي للهندسة
              </p>
              <div className="container mx-auto flex items-center justify-center h-full px-4 ">
                <div className="grid grid-cols-12 gap-x-6 mx-auto gap-y-4 mb-5 ">
                  <div className="flex items-center justify-center flex-col bg-gray-300/50 col-span-12 sm:col-span-4 px-3 py-4 space-y-4 ">
                    <div className="w-[80px] h-[80px] rounded-full overflow-hidden ">
                      <img src={Image4} alt="" className="w-full" />
                    </div>
                    <p className=" text-white font-medium text-2xl bg-primary-500 rounded-4xl px-5 py-[1px]">
                      2,477 +
                    </p>
                    <p className=" text-white font-semibold text-xl ">
                      الهندسه المدنية
                    </p>
                  </div>
                  <div className="flex items-center justify-center flex-col bg-gray-300/50 col-span-12 sm:col-span-4 px-3 py-4 space-y-4 ">
                    <div className="w-[80px] h-[80px] rounded-full overflow-hidden ">
                      <img
                        src={Image5}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className=" text-white font-medium text-2xl bg-primary-500 rounded-4xl px-5 py-[1px]">
                      333 +
                    </p>
                    <p className=" text-white font-semibold text-xl ">
                      الهندسة المعمارية
                    </p>
                  </div>
                  <div className="flex items-center justify-center flex-col bg-gray-300/50 col-span-12 sm:col-span-4 px-3 py-4 space-y-4 ">
                    <div className="w-[80px] h-[80px] rounded-full overflow-hidden ">
                      <img
                        src={Image6}
                        alt=""
                        className="w-full  h-full object-cover"
                      />
                    </div>
                    <p className=" text-white font-medium text-2xl bg-primary-500 rounded-4xl px-5 py-[1px]">
                      811 +
                    </p>
                    <p className=" text-white font-semibold text-xl text-center ">
                      هندسة الحاسبات لاتصالات
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" w-full py-10 my-6 flex items-center justify-center flex-col container mx-auto">
          <p className="text-center text-2xl font-bold my-4">
            إدارة معهد الصفوة العالي للهندسة
          </p>
          <div className="w-full px-4">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 5000,
              }}
              navigation={true}
              breakpoints={{
                620: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },

                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1080: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },

                1124: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
              }}
              modules={[Navigation, Pagination, Autoplay]}
              className="flex items-center justify-center  "
            >
              <SwiperSlide>
                <div className=" space-y-5 w-fit mx-auto shadow-lg rounded-3xl overflow-hidden flex items-center justify-center flex-col hover:scale-[1.1] hover:transition-all hover:duration-300 duration-300">
                  <div className="w-[200px] h-[250px] overflow-hidden rounded-full ">
                    <img src={User1} alt="" className="w-full" />
                  </div>
                  <div className=" px-2 py-2 mb-4 space-y-4">
                    <h1 className="font-medium text-2xl xl:text-[18px] xl:font-semibold">
                      <span className="text-primary-500"> وكيل المعهد:</span>{" "}
                      د.ياسر حسن
                    </h1>
                    <p className="font-medium text-2xl xl:text-[18px] xl:font-semibold">
                      بريد العميد:{" "}
                      <span className="text-primary-500">******</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" space-y-5 w-fit mx-auto shadow-lg rounded-3xl overflow-hidden flex items-center justify-center flex-col hover:scale-[1.1] hover:transition-all hover:duration-300 duration-300">
                  <div className="w-[200px] h-[250px] overflow-hidden rounded-full ">
                    <img src={User1} alt="" className="w-full" />
                  </div>
                  <div className=" px-2 py-2 mb-4 space-y-4">
                    <h1 className="font-medium text-2xl xl:text-[18px] xl:font-semibold">
                      <span className="text-primary-500"> وكيل المعهد:</span>{" "}
                      د.ياسر حسن
                    </h1>
                    <p className="font-medium text-2xl xl:text-[18px] xl:font-semibold">
                      بريد العميد:{" "}
                      <span className="text-primary-500">******</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" space-y-5 w-fit mx-auto shadow-lg rounded-3xl overflow-hidden flex items-center justify-center flex-col hover:scale-[1.1] hover:transition-all hover:duration-300 duration-300">
                  <div className="w-[200px] h-[250px] overflow-hidden rounded-full ">
                    <img src={User1} alt="" className="w-full" />
                  </div>
                  <div className=" px-2 py-2 mb-4 space-y-4">
                    <h1 className="font-medium text-2xl xl:text-[18px] xl:font-semibold">
                      <span className="text-primary-500"> وكيل المعهد:</span>{" "}
                      د.ياسر حسن
                    </h1>
                    <p className="font-medium text-2xl xl:text-[18px] xl:font-semibold">
                      بريد العميد:{" "}
                      <span className="text-primary-500">******</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" space-y-5 w-fit mx-auto shadow-lg rounded-3xl overflow-hidden flex items-center justify-center flex-col hover:scale-[1.1] hover:transition-all hover:duration-300 duration-300">
                  <div className="w-[200px] h-[250px] overflow-hidden rounded-full ">
                    <img src={User1} alt="" className="w-full" />
                  </div>
                  <div className=" px-2 py-2 mb-4 space-y-4">
                    <h1 className="font-medium text-2xl xl:text-[18px] xl:font-semibold">
                      <span className="text-primary-500"> وكيل المعهد:</span>{" "}
                      د.ياسر حسن
                    </h1>
                    <p className="font-medium text-2xl xl:text-[18px] xl:font-semibold">
                      بريد العميد:{" "}
                      <span className="text-primary-500">******</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" space-y-5 w-fit mx-auto shadow-lg rounded-3xl overflow-hidden flex items-center justify-center flex-col hover:scale-[1.1] hover:transition-all hover:duration-300 duration-300">
                  <div className="w-[200px] h-[250px] overflow-hidden rounded-full ">
                    <img src={User1} alt="" className="w-full" />
                  </div>
                  <div className=" px-2 py-2 mb-4 space-y-4">
                    <h1 className="font-medium text-2xl xl:text-[18px] xl:font-semibold">
                      <span className="text-primary-500"> وكيل المعهد:</span>{" "}
                      د.ياسر حسن
                    </h1>
                    <p className="font-medium text-2xl xl:text-[18px] xl:font-semibold">
                      بريد العميد:{" "}
                      <span className="text-primary-500">******</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className=" bg-gray-300 py-6">
          <div className="mt-12 py-8 px-4 container mx-auto">
            <div>
              <h2 className="text-center font-bold text-2xl">
                البرامج العلمية المتخصصة
              </h2>
              <p className="text-center font-medium text-lg my-6">
                تقدم معهد الصفوة للهندسة العديد من البرامج المميزة بنظام الساعات
                المعتمدة التي تخدم الطلاب
              </p>
              <div className="grid grid-cols-12 gap-5">
                <div className=" col-span-12 sm:col-span-6  lg:col-span-3  rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:scale-[1.05] hover:transition-all hover:duration-300 duration-300">
                  <img
                    src={Image7}
                    alt=""
                    className="w-full h-[240px] object-cover hover:scale-[1.1] hover:transition-all hover:duration-300 duration-300"
                  />
                  <h3 className="text-xl text-center bg-white py-4 font-semibold text-primary-400 hover:text-primary-600 hover:transition-colors hover:duration-300 duration-300">
                    برنامج هندسة الاتصالات
                  </h3>
                </div>
                <div className=" col-span-12 sm:col-span-6  lg:col-span-3  rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:scale-[1.05] hover:transition-all hover:duration-300 duration-300">
                  <img
                    src={Image6}
                    alt=""
                    className="w-full h-[240px] object-cover hover:scale-[1.1] hover:transition-all hover:duration-300 duration-300"
                  />
                  <h3 className="text-xl text-center bg-white py-4 font-semibold text-primary-400 hover:text-primary-600 hover:transition-colors hover:duration-300 duration-300">
                    برنامج هندسة الحاسبات
                  </h3>
                </div>
                <div className=" col-span-12 sm:col-span-6  lg:col-span-3  rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:scale-[1.05] hover:transition-all hover:duration-300 duration-300">
                  <img
                    src={Image5}
                    alt=""
                    className="w-full h-[240px] object-cover hover:scale-[1.1] hover:transition-all hover:duration-300 duration-300"
                  />
                  <h3 className="text-xl text-center bg-white py-4 font-semibold text-primary-400 hover:text-primary-600 hover:transition-colors hover:duration-300 duration-300">
                    برنامج الهندسة المعمارية
                  </h3>
                </div>
                <div className=" col-span-12 sm:col-span-6  lg:col-span-3  rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:scale-[1.05] hover:transition-all hover:duration-300 duration-300">
                  <img
                    src={Image4}
                    alt=""
                    className="w-full h-[240px] object-cover hover:scale-[1.1] hover:transition-all hover:duration-300 duration-300"
                  />
                  <h3 className="text-xl text-center bg-white py-4 font-semibold text-primary-400 hover:text-primary-600 hover:transition-colors hover:duration-300 duration-300">
                    برنامج الهندسة المدنية
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
