import React, { useState } from "react";
import logo from "../../images/safwa.png";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  let [menuCase, setMenuCase] = useState(false);
  let [menuCase1, setMenuCase1] = useState(false);
  let [menuCaseActive1, setMenuCaseActive1] = useState(false);
  let [menuCase2, setMenuCase2] = useState(false);
  let [menuCaseActive2, setMenuCaseActive2] = useState(false);
  const duration = 500;

  return (
    <div
      style={{
        transition: `all ${duration}ms `,
      }}
      className={` bg-primary-500/70 rounded-4xl container lg:pt-10 lg:pb-5 border-8 border-primary-700/50 mx-auto px-4 absolute lg:top-10 top-1 right-0 left-0 z-50 overflow-hidden lg:overflow-visible  ${
        menuCase
          ? ` ${menuCase1 ? `h-[605px]` : `h-[405px]`} ${
              menuCase2 ? `h-[650px]` : `h-[405px]`
            } lg:h-fit py-3 `
          : `h-[88px] lg:h-fit`
      }`}
    >
      <div className=" relative">
        <div className="w-[80px] h-[80px] bg-primary-500/70  border-8 border-primary-700/50  lg:flex lg:justify-center lg:items-center  hidden  absolute rounded-full -top-[85px] right-[50%] translate-x-[50%]">
          <div className="w-[75px] h-[75px] lg:flex lg:justify-center lg:items-center ">
            <img
              src={logo}
              alt=""
              className="w-full inline-block spin-slow  "
            />
          </div>
        </div>
        <div className="flex items-center justify-between flex-col lg:flex-row  text-white ">
          <div className="flex items-center justify-between w-full lg:w-fit">
            <div className="w-[65px] lg:hidden h-[65px] rounded-full  ">
              <img src={logo} alt="" className="w-full" />
            </div>

            <div
              onClick={() => {
                setMenuCase(!menuCase);
                setMenuCase2(false);
                setMenuCase1(false);
              }}
              className="lg:hidden font-bold text-3xl"
            >
              {menuCase ? (
                <i className="fa-solid fa-x"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
            </div>
          </div>
          <div className="  lg:inline-block w-full pt-2 h-full lg:pt-0 ">
            <ul className="flex items-start justify-around lg:flex-row flex-col w-full  space-y-4 lg:space-y-0  lg:gap-x-4 font-bold text-lg ">
              <li
                onClick={() => {
                  setMenuCaseActive1(false);
                  setMenuCaseActive2(false);
                  setMenuCase1(false);
                  setMenuCase2(false);
                  setMenuCase(false);
                }}
              >
                <NavLink
                  to={"/"}
                  className={({ isActive }) => {
                    return `${
                      isActive ? `text-black font-bold  text-xl  ` : ``
                    }`;
                  }}
                >
                  الرئيسية
                </NavLink>
              </li>

              <li
                onClick={() => {
                  setMenuCaseActive1(false);
                  setMenuCaseActive2(false);
                  setMenuCase1(false);
                  setMenuCase2(false);
                  setMenuCase(false);
                }}
              >
                <NavLink
                  to={`/almaehad`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? `text-black font-bold  text-xl  ` : ``
                    }`;
                  }}
                >
                  المعهد
                </NavLink>
              </li>

              <li
                onClick={() => {
                  setMenuCase1(!menuCase1);
                  setMenuCase2(false);
                }}
                className={`relative group/min1 cursor-pointer w-full lg:w-fit ${
                  menuCaseActive2
                    ? `text-black font-bold text-xl `
                    : `text-white`
                }`}
              >
                الدراسة والامتحانات{" "}
                {menuCase1 ? (
                  <i class="fa-solid fa-caret-up"></i>
                ) : (
                  <i class="fa-solid fa-caret-down"></i>
                )}
                <ul
                  className={`lg:absolute  bg-primary-400 space-y-2 lg:group-hover/min1:py-3 w-full lg:w-[180px] lg:top-[61px]  lg:group-hover/min1:h-[140px]   overflow-hidden lg:group-hover/min1:transition-all lg:group-hover/min1:duration-300 duration-300 lg:delay-400 ${
                    menuCase1
                      ? `h-[140px] lg:h-0 lg:py-0 py-3 mt-3 lg:mt-0 `
                      : `h-0 `
                  } `}
                >
                  <NavLink
                    onClick={() => {
                      setMenuCaseActive1(false);
                      setMenuCaseActive2(true);
                      setMenuCase1(false);
                      setMenuCase2(false);
                      setMenuCase(false);
                    }}
                    to={`/nizamAldirasih`}
                    className={({ isActive }) => {
                      return `  px-3 w-full inline-block  ${
                        isActive
                          ? `text-black  bg-primary-600 `
                          : `hover:bg-primary-700 text-white hover:transition-colors duration-300 hover:duration-300`
                      }`;
                    }}
                  >
                    نظام الدراسة
                  </NavLink>
                  <p className="border-b border-dashed  border-primary-700 w-[85%] mx-auto "></p>
                  <NavLink
                    onClick={() => {
                      setMenuCaseActive1(false);
                      setMenuCaseActive2(true);
                      setMenuCase1(false);
                      setMenuCase2(false);
                      setMenuCase(false);
                    }}
                    to={`/aljadawilAldirasia`}
                    className={({ isActive }) => {
                      return `  px-3 w-full inline-block  ${
                        isActive
                          ? `text-black  bg-primary-600 `
                          : `hover:bg-primary-700 text-white hover:transition-colors duration-300 hover:duration-300`
                      }`;
                    }}
                  >
                    الجداول الدراسية
                  </NavLink>
                  <p className="border-b border-dashed  border-primary-700 w-[85%] mx-auto "></p>
                  <NavLink
                    onClick={() => {
                      setMenuCaseActive1(false);
                      setMenuCaseActive2(true);
                      setMenuCase1(false);
                      setMenuCase2(false);
                      setMenuCase(false);
                    }}
                    to={`/aljadawilAlaimtihanat`}
                    className={({ isActive }) => {
                      return `  px-3 w-full inline-block  ${
                        isActive
                          ? `text-black bg-primary-600 `
                          : `hover:bg-primary-700 text-white hover:transition-colors duration-300 hover:duration-300`
                      }`;
                    }}
                  >
                    جداول الامتحانات
                  </NavLink>
                </ul>
              </li>

              <li
                onClick={() => {
                  setMenuCase2(!menuCase2);
                  setMenuCase1(false);
                }}
                className={`relative group/min1 cursor-pointer w-full lg:w-fit ${
                  menuCaseActive1
                    ? `text-black font-bold  text-xl `
                    : `text-white`
                } `}
              >
                الوحدات بالمعهد{" "}
                {menuCase2 ? (
                  <i class="fa-solid fa-caret-up"></i>
                ) : (
                  <i class="fa-solid fa-caret-down"></i>
                )}
                <ul
                  className={`lg:absolute  bg-primary-400 space-y-2  lg:group-hover/min1:py-3 w-full lg:w-[230px] lg:top-[61px]  lg:group-hover/min1:h-[235px]   overflow-hidden lg:group-hover/min1:transition-all lg:group-hover/min1:duration-300 duration-300 lg:delay-400 text-start ${
                    menuCase2
                      ? `h-[235px] lg:h-0 lg:py-0 py-3 mt-3  lg:mt-0 `
                      : `h-0`
                  } `}
                >
                  <NavLink
                    onClick={() => {
                      setMenuCaseActive1(true);
                      setMenuCaseActive2(false);
                      setMenuCase1(false);
                      setMenuCase2(false);
                      setMenuCase(false);
                    }}
                    to={`/wahdatAljawdih`}
                    className={({ isActive }) => {
                      return `  px-3 w-full inline-block  ${
                        isActive
                          ? `text-black  text-xl bg-primary-600 `
                          : `hover:bg-primary-700 hover:transition-colors text-white duration-300 hover:duration-300`
                      }`;
                    }}
                  >
                    وحدة الجودة
                  </NavLink>
                  <p className="border-b border-dashed  border-primary-700 w-[85%] mx-auto "></p>
                  <NavLink
                    onClick={() => {
                      setMenuCaseActive1(true);
                      setMenuCaseActive2(false);
                      setMenuCase1(false);
                      setMenuCase2(false);
                      setMenuCase(false);
                    }}
                    to={`/wahdatAlazimat`}
                    className={({ isActive }) => {
                      return `  px-3 w-full inline-block  ${
                        isActive
                          ? `text-black  text-xl bg-primary-600 `
                          : `hover:bg-primary-700 hover:transition-colors text-white duration-300 hover:duration-300`
                      }`;
                    }}
                  >
                    وحدة الأزمات والكوارث
                  </NavLink>
                  <p className="border-b border-dashed  border-primary-700 w-[85%] mx-auto "></p>
                  <NavLink
                    onClick={() => {
                      setMenuCaseActive1(true);
                      setMenuCaseActive2(false);
                      setMenuCase1(false);
                      setMenuCase2(false);
                      setMenuCase(false);
                    }}
                    to={`/wahdatAltadrib`}
                    className={({ isActive }) => {
                      return `  px-3 w-full inline-block  ${
                        isActive
                          ? `text-black  text-xl bg-primary-600 `
                          : `hover:bg-primary-700 hover:transition-colors text-white duration-300 hover:duration-300`
                      }`;
                    }}
                  >
                    وحدة التدريب
                  </NavLink>
                  <p className="border-b border-dashed  border-primary-700 w-[85%] mx-auto "></p>
                  <NavLink
                    onClick={() => {
                      setMenuCaseActive1(true);
                      setMenuCaseActive2(false);
                      setMenuCase1(false);
                      setMenuCase2(false);
                      setMenuCase(false);
                    }}
                    to={`/wahdatAlqias`}
                    className={({ isActive }) => {
                      return `  px-3 w-full inline-block  ${
                        isActive
                          ? `text-black  text-xl bg-primary-600 `
                          : `hover:bg-primary-700 hover:transition-colors text-white duration-300 hover:duration-300`
                      }`;
                    }}
                  >
                    وحدة القياس والتقويم
                  </NavLink>
                  <p className="border-b border-dashed  border-primary-700 w-[85%] mx-auto "></p>
                  <NavLink
                    onClick={() => {
                      setMenuCaseActive1(true);
                      setMenuCaseActive2(false);
                      setMenuCase1(false);
                      setMenuCase2(false);
                      setMenuCase(false);
                    }}
                    to={`/wahdatAlkhiriyjin`}
                    className={({ isActive }) => {
                      return `  px-3 w-full inline-block  ${
                        isActive
                          ? `text-black  text-xl bg-primary-600 `
                          : `hover:bg-primary-700 hover:transition-colors text-white duration-300 hover:duration-300`
                      }`;
                    }}
                  >
                    وحدة الخريجين
                  </NavLink>
                </ul>
              </li>

              <li
                onClick={() => {
                  setMenuCaseActive1(false);
                  setMenuCaseActive2(false);
                  setMenuCase1(false);
                  setMenuCase2(false);
                  setMenuCase(false);
                }}
              >
                <NavLink
                  to={"/alhaykalAltanzimiu"}
                  className={({ isActive }) => {
                    return `${
                      isActive ? `text-black font-bold  text-xl  ` : ``
                    }`;
                  }}
                >
                  الهيكل التنظيمى
                </NavLink>
              </li>

              <li
                onClick={() => {
                  setMenuCaseActive1(false);
                  setMenuCaseActive2(false);
                  setMenuCase1(false);
                  setMenuCase2(false);
                  setMenuCase(false);
                }}
              >
                <NavLink
                  to={"/alianshita"}
                  className={({ isActive }) => {
                    return `${
                      isActive ? `text-black font-bold  text-xl  ` : ``
                    }`;
                  }}
                >
                  الأنشطة
                </NavLink>
              </li>

              <li
                onClick={() => {
                  setMenuCaseActive1(false);
                  setMenuCaseActive2(false);
                  setMenuCase1(false);
                  setMenuCase2(false);
                  setMenuCase(false);
                }}
              >
                <NavLink
                  to={"/contactUs"}
                  className={({ isActive }) => {
                    return `${
                      isActive ? `text-black font-bold  text-xl  ` : ``
                    }`;
                  }}
                >
                  اتصل بنا
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
