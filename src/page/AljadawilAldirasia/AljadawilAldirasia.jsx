import React, { useState } from "react";

export default function AljadawilAldirasia() {
  const [MenuCase1, setMenuCase1] = useState(true);
  const [MenuCase2, setMenuCase2] = useState(false);
  const [MenuCase3, setMenuCase3] = useState(false);
  const [MenuCase4, setMenuCase4] = useState(false);
  const [MenuCase5, setMenuCase5] = useState(false);
  const [MenuCase6, setMenuCase6] = useState(false);
  const duration = 1000;
  return (
    <div className="  pt-3 ">
      <div className="w-full h-[90px] mb-16 "></div>
      <section className={`sec-1 `}>
        <div className="bg-gray-200 mb-5 ">
          <div
            onClick={() => {
              setMenuCase1(!MenuCase1);
              setMenuCase2(false);
              setMenuCase3(false);
              setMenuCase4(false);
              setMenuCase5(false);
              setMenuCase6(false);
            }}
            className="bg-gray-900 w-full py-3 px-4 cursor-pointer"
          >
            <h1 className="container mx-auto text-white md:text-3xl text-lg font-bold">
              جداول هندسة العلوم الاساسية
            </h1>
          </div>
          <div className="container mx-auto ">
            <div
              style={{
                duration: `${duration}sm`,
              }}
              className={`  gap-x-3  overflow-hidden  transition-all ${
                MenuCase1 ? ` h-[300px] ` : `h-0`
              } `}
            >
              <div className="grid grid-cols-11 px-1">
                <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                  <h1 className="font-bold text-xl">
                    جداول الفصل الدراسي الأول
                  </h1>
                  <ul className="px-4 pt-4 w-full space-y-5">
                    <li className="flex flex-col gap-1 w-full  items-center ">
                      <a
                        href=""
                        className="flex items-center flex-col gap-1 w-fit"
                      >
                        <div className=" text-5xl font-bold text-red-500 ">
                          <i class="fa-regular fa-file-pdf"></i>
                        </div>
                        <p className="text-lg font-bold">2025/2026</p>
                      </a>
                    </li>
                    <hr className=" border-t-2 border-dotted border-gray-700" />
                    <li className="flex flex-col gap-1 w-full  items-center ">
                      <a
                        href=""
                        className="flex items-center flex-col gap-1 w-fit"
                      >
                        <div className=" text-5xl font-bold text-red-500 ">
                          <i class="fa-regular fa-file-pdf"></i>
                        </div>
                        <p className="text-lg font-bold">2025/2026</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-span-1 flex items-center justify-center space-x-[5px]">
                  <div className=" w-0.5 h-[90%] bg-black my-auto  "></div>
                  <div className=" w-0.5 h-[90%] bg-black my-auto "></div>
                </div>
                <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                  <h1 className="font-bold text-xl">
                    جداول الفصل الدراسي الثاني
                  </h1>
                  <ul className="px-4 pt-4 w-full space-y-5">
                    <li className="flex flex-col gap-1 w-full  items-center ">
                      <a
                        href=""
                        className="flex items-center flex-col gap-1 w-fit"
                      >
                        <div className=" text-5xl font-bold text-red-500 ">
                          <i class="fa-regular fa-file-pdf"></i>
                        </div>
                        <p className="text-lg font-bold">2025/2026</p>
                      </a>
                    </li>
                    <hr className=" border-t-2 border-dotted border-gray-700" />
                    <li className="flex flex-col gap-1 w-full  items-center ">
                      <a
                        href=""
                        className="flex items-center flex-col gap-1 w-fit"
                      >
                        <div className=" text-5xl font-bold text-red-500 ">
                          <i class="fa-regular fa-file-pdf"></i>
                        </div>
                        <p className="text-lg font-bold">2025/2026</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 mb-5">
          <div
            onClick={() => {
              setMenuCase1(false);
              setMenuCase3(false);
              setMenuCase2(false);
              setMenuCase6(!MenuCase6);
              setMenuCase5(false);
              setMenuCase4(false);
            }}
            className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
          >
            <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
              جداول هندسة الالكترونيات والاتصالات والحاسبات
            </h1>
          </div>
          <div className="container mx-auto bg-gray-200">
            <div
              style={{
                duration: `${duration}sm`,
              }}
              className={` gap-x-3  overflow-hidden  transition-all ${
                MenuCase6 ? ` h-[690px] ` : `h-0`
              } `}
            >
              <div className="py-4  ">
                <p className="font-bold text-2xl bg-primary-600 py-2 px-5">
                  الفرقة الأولى
                </p>
                <div className="grid grid-cols-11 px-1">
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الأول
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-1 flex items-center justify-center space-x-[5px]">
                    <div className=" w-0.5 h-[90%] bg-black my-auto  "></div>
                    <div className=" w-0.5 h-[90%] bg-black my-auto "></div>
                  </div>
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الثاني
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="py-4  ">
                <p className="font-bold text-2xl bg-primary-600 py-2 px-5">
                  الفرقة الثانية
                </p>
                <div className="grid grid-cols-11 px-1">
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الأول
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-1 flex items-center justify-center space-x-[5px]">
                    <div className=" w-0.5 h-[90%] bg-black my-auto  "></div>
                    <div className=" w-0.5 h-[90%] bg-black my-auto "></div>
                  </div>
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الثاني
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 mb-5">
          <div
            onClick={() => {
              setMenuCase1(false);
              setMenuCase3(false);
              setMenuCase2(false);
              setMenuCase4(!MenuCase4);
              setMenuCase5(false);
              setMenuCase6(false);
            }}
            className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
          >
            <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
              جداول هندسة الالكترونيات والاتصالات
            </h1>
          </div>
          <div className="container mx-auto bg-gray-200">
            <div
              style={{
                duration: `${duration}sm`,
              }}
              className={` gap-x-3  overflow-hidden  transition-all ${
                MenuCase4 ? ` h-[690px] ` : `h-0`
              } `}
            >
              <div className="py-4  ">
                <p className="font-bold text-2xl bg-primary-600 py-2 px-5">
                  الفرقة الثالثة
                </p>
                <div className="grid grid-cols-11 px-1">
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الأول
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-1 flex items-center justify-center space-x-[5px]">
                    <div className=" w-0.5 h-[90%] bg-black my-auto  "></div>
                    <div className=" w-0.5 h-[90%] bg-black my-auto "></div>
                  </div>
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الثاني
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="py-4  ">
                <p className="font-bold text-2xl bg-primary-600 py-2 px-5">
                  الفرقة الرابعة
                </p>
                <div className="grid grid-cols-11 px-1">
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الأول
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-1 flex items-center justify-center space-x-[5px]">
                    <div className=" w-0.5 h-[90%] bg-black my-auto  "></div>
                    <div className=" w-0.5 h-[90%] bg-black my-auto "></div>
                  </div>
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الثاني
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 mb-5">
          <div
            onClick={() => {
              setMenuCase1(false);
              setMenuCase3(false);
              setMenuCase2(!MenuCase2);
              setMenuCase4(false);
              setMenuCase5(false);
              setMenuCase6(false);
            }}
            className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
          >
            <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
              جداول هندسة الحاسبات
            </h1>
          </div>
          <div className="container mx-auto bg-gray-200">
            <div
              style={{
                duration: `${duration}sm`,
              }}
              className={` gap-x-3  overflow-hidden  transition-all ${
                MenuCase2 ? `  h-[690px] ` : `h-0`
              } `}
            >
              <div className="py-4  ">
                <p className="font-bold text-2xl bg-primary-600 py-2 px-5">
                  الفرقة الثالثة
                </p>
                <div className="grid grid-cols-11 px-1">
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الأول
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-1 flex items-center justify-center space-x-[5px]">
                    <div className=" w-0.5 h-[90%] bg-black my-auto  "></div>
                    <div className=" w-0.5 h-[90%] bg-black my-auto "></div>
                  </div>
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الثاني
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="py-4  ">
                <p className="font-bold text-2xl bg-primary-600 py-2 px-5">
                  الفرقة الرابعة
                </p>
                <div className="grid grid-cols-11 px-1">
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الأول
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-1 flex items-center justify-center space-x-[5px]">
                    <div className=" w-0.5 h-[90%] bg-black my-auto  "></div>
                    <div className=" w-0.5 h-[90%] bg-black my-auto "></div>
                  </div>
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الثاني
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 mb-5">
          <div
            onClick={() => {
              setMenuCase1(false);
              setMenuCase2(false);
              setMenuCase3(!MenuCase3);
              setMenuCase4(false);
              setMenuCase5(false);
              setMenuCase6(false);
            }}
            className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
          >
            <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
              جداول الهندسة المدنيه
            </h1>
          </div>
          <div className="container mx-auto bg-gray-200">
            <div
              style={{
                duration: `${duration}sm`,
              }}
              className={` gap-x-3  overflow-hidden  transition-all ${
                MenuCase3 ? `  h-[1380px] ` : `h-0`
              } `}
            >
              <div className="py-4  ">
                <p className="font-bold text-2xl bg-primary-600 py-2 px-5">
                  الفرقة الاولى
                </p>
                <div className="grid grid-cols-11 px-1">
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الأول
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-1 flex items-center justify-center space-x-[5px]">
                    <div className=" w-0.5 h-[90%] bg-black my-auto  "></div>
                    <div className=" w-0.5 h-[90%] bg-black my-auto "></div>
                  </div>
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الثاني
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="py-4  ">
                <p className="font-bold text-2xl bg-primary-600 py-2 px-5">
                  الفرقة الثانية
                </p>
                <div className="grid grid-cols-11 px-1">
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الأول
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-1 flex items-center justify-center space-x-[5px]">
                    <div className=" w-0.5 h-[90%] bg-black my-auto  "></div>
                    <div className=" w-0.5 h-[90%] bg-black my-auto "></div>
                  </div>
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الثاني
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="py-4  ">
                <p className="font-bold text-2xl bg-primary-600 py-2 px-5">
                  الفرقة الثالثة
                </p>
                <div className="grid grid-cols-11 px-1">
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الأول
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-1 flex items-center justify-center space-x-[5px]">
                    <div className=" w-0.5 h-[90%] bg-black my-auto  "></div>
                    <div className=" w-0.5 h-[90%] bg-black my-auto "></div>
                  </div>
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الثاني
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="py-4  ">
                <p className="font-bold text-2xl bg-primary-600 py-2 px-5">
                  الفرقة الرابعة
                </p>
                <div className="grid grid-cols-11 px-1">
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الأول
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-1 flex items-center justify-center space-x-[5px]">
                    <div className=" w-0.5 h-[90%] bg-black my-auto  "></div>
                    <div className=" w-0.5 h-[90%] bg-black my-auto "></div>
                  </div>
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الثاني
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 mb-5">
          <div
            onClick={() => {
              setMenuCase1(false);
              setMenuCase2(false);
              setMenuCase3(false);
              setMenuCase4(false);
              setMenuCase6(false);
              setMenuCase5(!MenuCase5);
            }}
            className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
          >
            <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
              جداول الهندسة المعمارية{" "}
            </h1>
          </div>
          <div className="container mx-auto bg-gray-200">
            <div
              style={{
                duration: `${duration}sm`,
              }}
              className={` gap-x-3  overflow-hidden  transition-all ${
                MenuCase5 ? `  h-[1380px] ` : `h-0`
              } `}
            >
              <div className="py-4  ">
                <p className="font-bold text-2xl bg-primary-600 py-2 px-5">
                  الفرقة الاولى
                </p>
                <div className="grid grid-cols-11 px-1">
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الأول
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-1 flex items-center justify-center space-x-[5px]">
                    <div className=" w-0.5 h-[90%] bg-black my-auto  "></div>
                    <div className=" w-0.5 h-[90%] bg-black my-auto "></div>
                  </div>
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الثاني
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="py-4  ">
                <p className="font-bold text-2xl bg-primary-600 py-2 px-5">
                  الفرقة الثانية
                </p>
                <div className="grid grid-cols-11 px-1">
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الأول
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-1 flex items-center justify-center space-x-[5px]">
                    <div className=" w-0.5 h-[90%] bg-black my-auto  "></div>
                    <div className=" w-0.5 h-[90%] bg-black my-auto "></div>
                  </div>
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الثاني
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="py-4  ">
                <p className="font-bold text-2xl bg-primary-600 py-2 px-5">
                  الفرقة الثالثة
                </p>
                <div className="grid grid-cols-11 px-1">
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الأول
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-1 flex items-center justify-center space-x-[5px]">
                    <div className=" w-0.5 h-[90%] bg-black my-auto  "></div>
                    <div className=" w-0.5 h-[90%] bg-black my-auto "></div>
                  </div>
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الثاني
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="py-4  ">
                <p className="font-bold text-2xl bg-primary-600 py-2 px-5">
                  الفرقة الرابعة
                </p>
                <div className="grid grid-cols-11 px-1">
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الأول
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-1 flex items-center justify-center space-x-[5px]">
                    <div className=" w-0.5 h-[90%] bg-black my-auto  "></div>
                    <div className=" w-0.5 h-[90%] bg-black my-auto "></div>
                  </div>
                  <div className=" col-span-5 py-2  font-medium text-lg h-fit flex flex-col items-center">
                    <h1 className="font-bold text-xl">
                      جداول الفصل الدراسي الثاني
                    </h1>
                    <ul className="px-4 pt-4 w-full space-y-5">
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                      <hr className=" border-t-2 border-dotted border-gray-700" />
                      <li className="flex flex-col gap-1 w-full  items-center ">
                        <a
                          href=""
                          className="flex items-center flex-col gap-1 w-fit"
                        >
                          <div className=" text-5xl font-bold text-red-500 ">
                            <i class="fa-regular fa-file-pdf"></i>
                          </div>
                          <p className="text-lg font-bold">2025/2026</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
