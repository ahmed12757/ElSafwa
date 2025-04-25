import React, { useState } from "react";

export default function CivilEngineeringProgram() {
  const [MenuCase1, setMenuCase1] = useState(true);
  const [MenuCase2, setMenuCase2] = useState(false);
  const [MenuCase3, setMenuCase3] = useState(false);
  const [MenuCase4, setMenuCase4] = useState(false);

  const employee = [
    {
      id: 1,
      name: "د/ أحمد محمد السيد السكري",
      title: "رئيس القسم",
    },
    { id: 2, name: "د/ أحمد محمد حبيب", title: "المدرس بالقسم" },
    { id: 3, name: "د/ علاء الدين إسماعيل علي", title: "المدرس بالقسم" },
    { id: 4, name: "د/ محمد الطناني محمد", title: "المدرس بالقسم" },
    { id: 5, name: "د/ أحمد طلعت محمد", title: "المدرس بالقسم" },
    { id: 6, name: "د/ أحمد عبد الحميد أحمد", title: "المدرس بالقسم" },
    { id: 7, name: "د/ محمد محمد سليمان", title: "المدرس بالقسم" },
    { id: 8, name: "د/ سعد عبدالعاطي غنيم", title: "المدرس بالقسم" },
    { id: 9, name: "د/ محمد عادل قناوي", title: "المدرس بالقسم" },
    { id: 10, name: "د/ حسام الدين عبدالعظيم علي", title: "المدرس بالقسم" },
    { id: 11, name: "د/ شيرين يسر أحمد", title: "المدرس بالقسم" },
    { id: 12, name: "د/ آية سعيد عطا", title: "المدرس بالقسم" },
    { id: 13, name: "م/ مصطفى محمود شكري", title: "مدرس مساعد" },
    { id: 14, name: " م/أحمد حسن محمد", title: "مدرس مساعد" },
    { id: 15, name: " م/محمد إسماعيل عبد الفتاح", title: "مدرس مساعد" },
    { id: 16, name: " م/محمد خالد محمد", title: "مدرس مساعد" },
    { id: 17, name: " م/أحمد ماهر علي", title: "مدرس مساعد" },
    { id: 18, name: " م/عمر طلعت عبد الهادي", title: "مدرس مساعد" },
    { id: 19, name: " م/عمر هشام عبد الوهاب", title: "مدرس مساعد" },
    { id: 20, name: " م/ميزنا أحمد حسن", title: "مدرس مساعد" },
    { id: 21, name: " م/آية علاء السيد", title: "مدرس مساعد" },
    { id: 22, name: " م/ميادة عادل محمد", title: "مدرس مساعد" },
    { id: 23, name: " م/أميرة محمد محمد", title: "مدرس مساعد" },
    { id: 24, name: " م/أحمد محمد أحمد", title: "مدرس مساعد" },
    { id: 25, name: " م/محمد شكري عشري", title: "معيد" },
    { id: 26, name: " م/معاذ محمود حسن", title: "معيد" },
    { id: 27, name: " م/محمود صلاح محمد", title: "معيد" },
  ];
  const employee2 = [
    {
      id: 1,
      name: "د/ أحمد محمد السيد السكري",
      title: "رئيس القسم",
    },
    { id: 2, name: "د/ أحمد محمد حبيب", title: "المدرس بالقسم" },
    { id: 3, name: "د/ علاء الدين إسماعيل علي", title: "المدرس بالقسم" },
    { id: 4, name: "د/ محمد الطناني محمد", title: "المدرس بالقسم" },
    { id: 5, name: "د/ أحمد طلعت محمد", title: "المدرس بالقسم" },
    { id: 6, name: "د/ أحمد عبد الحميد أحمد", title: "المدرس بالقسم" },
    { id: 7, name: "د/ محمد محمد سليمان", title: "المدرس بالقسم" },
    { id: 8, name: "د/ سعد عبدالعاطي غنيم", title: "المدرس بالقسم" },
    { id: 9, name: "د/ محمد عادل قناوي", title: "المدرس بالقسم" },
    { id: 10, name: "د/ حسام الدين عبدالعظيم علي", title: "المدرس بالقسم" },
    { id: 11, name: "د/ شيرين يسر أحمد", title: "المدرس بالقسم" },
    { id: 12, name: "د/ آية سعيد عطا", title: "المدرس بالقسم" },
  ];

  return (
    <>
      <section
        className={`sec-1 px-3 pb-4 min-h-screen bg-gradient-to-br from-[#0f172a] to-[#f28a24] bg-fixed bg-cover `}
      >
        <div className="w-full h-[90px] lg:mb-15 mb-2"></div>
        <div className=" container  rounded-2xl overflow-hidden mx-auto shadow-2xl mb-4 bg-gray-200 ">
          <div
            onClick={() => {
              setMenuCase1(!MenuCase1);
              setMenuCase2(false);

              setMenuCase4(false);
            }}
            className="bg-gray-900 w-full py-3 px-4 cursor-pointer"
          >
            <h1 className="container mx-auto text-white md:text-3xl text-lg font-bold">
              برنامج الهندسة المدنية{" "}
            </h1>
          </div>
          <div className="container mx-auto ">
            <div
              className={` grid grid-cols-12 gap-x-3  overflow-hidden duration-500 transition-all ${
                MenuCase1 ? `  max-h-[9999px] ` : `max-h-0`
              } `}
            >
              <div className="col-span-12  py-2 px-4 font-medium text-lg h-fit">
                <h2 className=" font-bold text-lg">وصف البرنامج</h2>
                <p className="px-6">
                  الهندسة المدنية هي المختصة بدراسة وتصميم وتحليل المنشآت
                  المختلفة وهي فرع من فروع الهندسة العلمية وتعرف بأنها واحدة من
                  أهم وأقدم الفروع الهندسية حيث يمتد تاريخها لآلاف السنين، وعلى
                  مر العصور تطور وتشعب ذلك المجال وارتبط كثيراً في السنوات
                  الماضية بالتطورات الصناعية بهدف تحسين جودة المواد الإنشائية
                  وإدخال معدات وأجهزة متطورة تساهم في زيادة كفاءة الأعمال
                  الإنشائية.{" "}
                </p>
                <h2 className=" font-bold text-lg mt-3">
                  كما أن القسم يحتوي على عدد من المعامل المجهزة لخدمة المقررات
                  الدراسية وهي على النحو التالي:
                </h2>
                <ul className="px-6 pt-4 space-y-4">
                  <li>
                    <span>1-</span>
                    معمل الري والصرف (هيدروليكا – ميكانيكا الموائع)
                  </li>
                  <li>
                    <span>2-</span>
                    معمل ميكانيكا التربة والطرق{" "}
                  </li>
                  <li>
                    <span>3-</span>
                    معمل الخرسانة{" "}
                  </li>
                  <li>
                    <span>4-</span>
                    معمل خواص المواد
                  </li>
                  <li>
                    <span>5-</span>
                    معمل المساحة
                  </li>
                </ul>
                <h2 className=" font-bold text-lg pt-5"> كلمة منسق البرنامج</h2>
                <p className="px-6 pt-2">
                  أبنائي وأعزائي طلاب البرنامج انه لمن دواعي سروري أن أرحب بكم
                  في برنامج الهندسة المدنية، وأريد أن أتقدم أولا بأصدق كلمات
                  الشكر والعرفان إلى كافة زملاء الهيئة التدريسية لما يقدموه من
                  جهود عظيمة في دعم وتوجيه المسيرة التعليمية كما أود أن أتطلع
                  إلى تحسين البيئة التعليمية للطلبة ولتحقيق ذلك لابد من تعاون
                  الجميع وأداء الواجبات وإعطاء الحقوق، وأوصي طلابنا الأعزاء أن
                  تسعوا دائما لتحصيل العلم واكتساب المعرفة سائلين المولى عز وجل
                  أن يوفقكم لتصبحوا مهندسين أكفاء لمواجهة تحديات المجال
                  والمساهمة في تطوير العلم والمجتمع.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" container  rounded-2xl overflow-hidden mx-auto shadow-2xl mb-4 bg-gray-200 ">
          <div
            onClick={() => {
              setMenuCase1(false);

              setMenuCase2(false);
              setMenuCase4(!MenuCase4);
            }}
            className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
          >
            <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
              الرؤية والرسالة والاهداف{" "}
            </h1>
          </div>
          <div className="container mx-auto ">
            <div
              className={` gap-x-3  overflow-hidden duration-500 transition-all ${
                MenuCase4 ? `  max-h-[9999px] ` : `max-h-0`
              } `}
            >
              <div className="  py-2 px-4 font-medium text-lg h-fit">
                <h2 className=" font-bold text-xl my-2"> رؤية البرنامج</h2>
                <p className="px-4">
                  يتطلع قسم الهندسة المدنية بمعهد الصفوة العالي للهندسة أن يكون
                  قسماً أكثر تميزاً محلياً وإقليمياً وقومياً، وضمن المؤسسات
                  التعليمية المتميزة في العلوم الهندسية والتكنولوجية والبحث
                  العلمي وتنمية المجتمع والتواصل والتعاون مع المؤسسات العلمية
                  والتعليمية المحلية والعالمية، ويدعم الابتكار وريادة الأعمال في
                  مجالات الهندسة المدنية لتحقيق أهداف التنمية المستدامة.{" "}
                </p>
                <h2 className=" font-bold text-xl my-2"> رسالة البرنامج </h2>
                <p className="px-4">
                  يلتزم برنامج الهندسة المدنية بمعهد الصفوة العالي للهندسة
                  بإعداد كوادر من المهندسين المتخصصين من خلال تزويدهم بالمعارف
                  والمهارات والقيم العلمية والتكنولوجية والمهنية التخصصية وفقاً
                  للمعايير القومية، لتأهيلهم أكاديمياً ومهنياً وأخلاقياً، كما
                  يهدف إلى تحقيق احتياجات المجتمع المصري والإقليمي عن طريق برامج
                  ذات جودة عالية في التعليم والبحث العلمي وخدمة المجتمع، ويلتزم
                  البرنامج بإعداد خريج قادر على المنافسة في سوق العمل محلياً
                  وإقليمياً في إطار من القيم الإنسانية والأخلاقية.{" "}
                </p>
                <h2 className=" font-bold text-lg mt-3">أهداف البرنامج</h2>
                <ul className="px-6 pt-4 space-y-4">
                  <li>
                    <span>1-</span>
                    تقديم منهج أكاديمي متميز وفق المقاييس العالمية في مجال
                    الهندسة المدنية لضمان مسايرة التطور المستمر والتعرف على
                    القضايا العلمية المعاصرة في مجال التخصص، مع مراعاة الجوانب
                    المهنية والأخلاقية والمسئولية المجتمعية.
                  </li>
                  <li>
                    <span>2-</span>
                    توفير بيئة تعليمية تمكن الطلاب من تحقيق أهدافهم في برنامج
                    يدعم قدراتهم على الفهم والابتكار من خلال إجراء التجارب
                    والتحليلات والمحاكاة وتقييمها لاستخلاص النتائج.
                  </li>
                  <li>
                    <span>3-</span>تزويد الطلاب بأسس العلوم الهندسية والرياضيات
                    لتأصيل فهم أساسيات الهندسة المدنية والمضي قدماً لعمل دراسات
                    متقدمة في تلك المجالات، والاستفادة من التقنيات المعاصرة
                    والتطبيقات الحديثة.{" "}
                  </li>
                  <li>
                    <span>4-</span>
                    العمل بكفاءة مع مختلف التخصصات وإظهار الحرفية والكفاءة
                    والمسئولية.{" "}
                  </li>
                  <li>
                    <span>5-</span>
                    تمكين الخريجين للعمل ليس فقط في الأسواق المحلية من خلال
                    ممارسة تقنيات البحث والتعلم الذاتي والدراسات العليا ولكن
                    أيضاً على المستوى الإقليمي خاصة العالم العربي وإفريقيا بما
                    يحقق النمو الاقتصادي.{" "}
                  </li>
                  <li>
                    <span>6-</span>
                    إكساب الطلاب القدرة على تشخيص المشاكل ووضع خطط للحل حسب
                    مواصفات تقنية عالية، وتطبيق قواعد الممارسة ومعايير الجودة
                    ومتطلبات الصحة والقضايا البيئية.{" "}
                  </li>
                  <li>
                    <span>7-</span>
                    الحفاظ على الأخلاق المهنية والآداب العامة في كل الأعمال
                    والأنشطة والقدرة على التكيف والتعامل مع المشروعات المختلفة.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className=" container  rounded-2xl overflow-hidden mx-auto shadow-2xl mb-4 bg-gray-200 ">
          <div
            onClick={() => {
              setMenuCase1(false);
              setMenuCase3(false);
              setMenuCase2(!MenuCase2);
              setMenuCase4(false);
            }}
            className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
          >
            <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
              مجلس القسم{" "}
            </h1>
          </div>
          <div className="container mx-auto ">
            <div
              className={` gap-x-3  overflow-hidden duration-500 transition-all ${
                MenuCase2 ? `  max-h-[9999px] ` : `max-h-0`
              } `}
            >
              <div className="  py-2 px-4 font-medium text-lg h-fit">
                <p className="py-3 text-center text-xl font-bold">
                  تشكيل مجلس القسم{" "}
                </p>

                <div className="grid grid-cols-12 gap-x-3 border-1">
                  <div className="col-span-12 grid grid-cols-11 border-1 text-center bg-primary-500  font-bold">
                    <div className=" col-span-1 py-2 border  px-2">م</div>
                    <div className=" col-span-5 py-2 border px-2">
                      هيئة التدريس
                    </div>
                    <div className=" col-span-5 py-2 border  px-2">
                      الدرجة الوظيفية
                    </div>
                  </div>

                  <div className="col-span-12 grid grid-cols-11 border-1  font-bold">
                    {employee2.map((emp) => (
                      <>
                        <div className=" col-span-1 py-2 border px-2">
                          {emp.id}
                        </div>
                        <div className=" col-span-5 py-2 border px-2">
                          {emp.name}
                        </div>
                        <div className=" col-span-5 py-2 border px-2">
                          {emp.title}
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" container  rounded-2xl overflow-hidden mx-auto shadow-2xl mb-4 bg-gray-200 ">
          <div
            onClick={() => {
              setMenuCase1(false);
              setMenuCase2(false);
              setMenuCase3(!MenuCase3);
              setMenuCase4(false);
            }}
            className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
          >
            <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
              هيئة التدريس باقسم{" "}
            </h1>
          </div>
          <div className="container mx-auto ">
            <div
              className={` gap-x-3  overflow-hidden duration-500 transition-all ${
                MenuCase3 ? `  max-h-[9999px] ` : `max-h-0`
              } `}
            >
              <div className="  py-2 px-4 font-medium text-lg h-fit">
                <p className="py-3 text-center text-xl font-bold">
                  تشكيل هيئة التدريس بالقسم
                </p>

                <div className="grid grid-cols-12 gap-x-3 border-1">
                  <div className="col-span-12 grid grid-cols-11 border-1 text-center bg-primary-500  font-bold">
                    <div className=" col-span-1 py-2 border  px-2">م</div>
                    <div className=" col-span-5 py-2 border px-2">
                      هيئة التدريس
                    </div>
                    <div className=" col-span-5 py-2 border  px-2">
                      الدرجة الوظيفية
                    </div>
                  </div>

                  <div className="col-span-12 grid grid-cols-11 border-1  font-bold">
                    {employee.map((emp) => (
                      <>
                        <div className=" col-span-1 py-2 border px-2">
                          {emp.id}
                        </div>
                        <div className=" col-span-5 py-2 border px-2">
                          {emp.name}
                        </div>
                        <div className=" col-span-5 py-2 border px-2">
                          {emp.title}
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" container  rounded-2xl overflow-hidden mx-auto shadow-2xl mb-4">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 w-full py-3 px-4 inline-block "
          >
            <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
              مجلس البرنامج
            </h1>
          </a>
        </div>

        <div className=" container  rounded-2xl overflow-hidden mx-auto shadow-2xl mb-4">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 w-full py-3 px-4 inline-block "
          >
            <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
              البرامج الدراسية
            </h1>
          </a>
        </div>

        <div className=" container  rounded-2xl overflow-hidden mx-auto shadow-2xl ">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 w-full py-3 px-4 inline-block "
          >
            <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
              المعايير الأكاديمية
            </h1>
          </a>
        </div>
      </section>
    </>
  );
}
