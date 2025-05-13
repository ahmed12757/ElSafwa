import React, { useState } from "react";
import ProgramCouncilPDF from "../../pdfs/ComputerEngineeringProgram/مجلس البرنامج ( الهيكل التنظيمي).pdf";
import OldRegulationsPDF from "../../pdfs/ComputerEngineeringProgram/قوائم حاسبات - قديم.pdf";
import NewRegulationsPDF from "../../pdfs/ComputerEngineeringProgram/9 الخطة الدراسية حاسبات.pdf";
import AcademicStandardsPDF from "../../pdfs/ComputerEngineeringProgram/Computers Competencies.pdf";

export default function ComputerEngineeringProgram() {
  const [MenuCase1, setMenuCase1] = useState(true);
  const [MenuCase2, setMenuCase2] = useState(false);
  const [MenuCase4, setMenuCase4] = useState(false);
  const [MenuCase3, setMenuCase3] = useState(false);
  const [MenuCase5, setMenuCase5] = useState(false);

  const employee = [
    {
      id: 1,
      name: "أ.د/ محمد لطفي رابح",
      title: "المدرس بالقسم ورئيس القسم  ",
    },

    {
      id: 2,
      name: "د/ عادل يحيى عزت",
      title: "  منسق البرنامج باقسم ",
    },
    {
      id: 3,
      name: "د/ علاء الدين عبدالرحمن إبراهيم",
      title: "المدرس بالقسم",
    },
    { id: 4, name: "د/ صلاح الدين محمد بدر", title: "المدرس بالقسم" },

    { id: 5, name: "د/ محمود أسامة عوف", title: "المدرس بالقسم" },

    {
      id: 6,
      name: "د/ إيمان محمد عبدالوهاب فيلب",
      title: "المدرس بالقسم",
    },
    { id: 7, name: "د/ وفاء سامي عبدالحليم", title: "المدرس بالقسم" },

    // المدرسون المساعدون والمعيدون الجدد
    { id: 8, name: "م/ متحسم محمد السيد", title: "مدرس مساعد" },
    { id: 9, name: "م/ إدريس مصطفى عبد الله", title: "مدرس مساعد" },
    { id: 10, name: "م/ رغدة رزق جوده", title: "مدرس مساعد" },
    { id: 11, name: "م/ منار أسامة محمد", title: "مدرس مساعد" },
    { id: 12, name: "م/ عبير سعيد مله", title: "معيد" },
    { id: 13, name: "م/ ريم محجوب محمود", title: "معيد" },
    { id: 14, name: "م/ آية شريف حامد", title: "معيد" },
    { id: 15, name: "م/ الآء إبراهيم علي", title: "معيد" },
    { id: 16, name: "م/ كريستينا أشرف خليل", title: "معيد" },
    { id: 17, name: "م/ هاجر محمد حسن", title: "معيد" },
    { id: 18, name: "م/ تهاني أحمد محمد", title: "معيد" },
  ];
  const employee2 = [
    {
      id: 1,
      name: "أ.د/ محمد لطفي رابح",
      title: "المدرس بالقسم ورئيس القسم  ",
    },

    {
      id: 2,
      name: "د/ عادل يحيى عزت",
      title: "  منسق البرنامج باقسم ",
    },
    {
      id: 3,
      name: "د/ علاء الدين عبدالرحمن إبراهيم",
      title: "المدرس بالقسم",
    },
    { id: 4, name: "د/ صلاح الدين محمد بدر", title: "المدرس بالقسم" },

    { id: 5, name: "د/ محمود أسامة عوف", title: "المدرس بالقسم" },

    {
      id: 6,
      name: "د/ إيمان محمد عبدالوهاب فيلب",
      title: "المدرس بالقسم",
    },
    { id: 7, name: "د/ وفاء سامي عبدالحليم", title: "المدرس بالقسم" },

    // المدرسون المساعدون والمعيدون الجدد
  ];

  return (
    <>
      <section
        className={`sec-1 pb-4 px-3 min-h-screen bg-gradient-to-br from-[#0f172a] to-[#f28a24] bg-fixed bg-cover`}
      >
        <div className="w-full h-[90px] lg:mb-15 mb-2 "></div>
        <div className=" container  rounded-2xl overflow-hidden mx-auto shadow-2xl mb-4 bg-gray-200 ">
          <div
            onClick={() => {
              setMenuCase1(!MenuCase1);
              setMenuCase2(false);
              setMenuCase3(false);
              setMenuCase2(false);
              setMenuCase5(false);
            }}
            className="bg-gray-900 w-full py-3 px-4 cursor-pointer"
          >
            <h1 className="container mx-auto text-white md:text-3xl text-lg font-bold">
              برنامج هندسة الحاسبات{" "}
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
                  إعداد خريج مزود بالمعرفة والمهارات في مجال هندسة أنظمة الحاسب
                  تؤهله للمنافسة في سوق العمل محلياً وإقليمياً، وإنتاج أبحاث
                  علمية من شأنها المساهمة في نشر ثقافة الابتكار وريادة الأعمال
                  والمسؤولية الاجتماعية، في إطار القيم الإنسانية والأخلاقية يعد
                  تخصص هندسة الحاسبات من أهم تخصصات الهندسة في وقتنا الحالي وذلك
                  بسبب التطور الكبير في التكنولوجيا والاساليب الجديده التي تم
                  تطويرها في البرمجه والتشفير والتقنيات المستخدمة. يهدف برنامج
                  هندسة الحاسبات الى:{" "}
                </p>
                <ul className="px-6 pt-4 space-y-4">
                  <li>
                    <span>1-</span>
                    تدريب الخريجين على تطبيق المعرفة بالرياضيات والعلوم
                    والمفاهيم الهندسية لتحديد وصياغة وحل المشكلات الهندسية.
                  </li>
                  <li>
                    <span>2-</span>
                    تدريب الخريجين على استخدام التقنيات والمهارات والأدوات
                    الهندسية الحديثة اللازمة للحواسب الذكية.{" "}
                  </li>
                  <li>
                    <span>3-</span>
                    إعداد خريجين مؤهلين لاستخدام أساليب الذكاء الاصطناعي في حل
                    المشكلات المعقدة.
                  </li>
                  <li>
                    <span>4-</span>
                    تدريب الخريجين على استخدام البرمجيات المناسبة والأدوات
                    المتخصصة في كافة مراحل دورة حياة تطوير الأنظمة وتحقيق معايير
                    الجودة المقبولة في تطوير البرمجيات.{" "}
                  </li>
                  <li>
                    <span>5-</span>
                    بناء مهارات الخريجين في تقييم خصائص وأداء مكونات وعمليات
                    نظام الحاسب.
                  </li>
                  <li>
                    <span>6-</span>
                    تنمية مهارات الخريجين في تصميم وإجراء التجارب وتحليل النتائج
                    وتفسيرها.{" "}
                  </li>
                  <li>
                    <span>7-</span>
                    إعداد الخريجين لإدارة المشاريع المتعلقة بأنظمة الحاسب التي
                    تخضع لقيود اقتصادية وبيئية واجتماعية.{" "}
                  </li>
                  <li>
                    <span>8-</span>
                    إعداد الخريجين للعمل بكفاءة ضمن فرق متعددة التخصصات والتواصل
                    بشكل فعال.{" "}
                  </li>
                  <li>
                    <span>9-</span>
                    تنمية مهارات الخريجين المتعلقة بالتفكير الإبداعي والنقدي في
                    حل المشكلات
                  </li>
                </ul>
                <h2 className=" font-bold text-lg mt-3">
                  كما أن القسم يحتوي على عدد من المعامل المجهزة لخدمة المقررات
                  الدراسية وهي على النحو التالي:
                </h2>
                <ul className="px-6 pt-4 space-y-4">
                  <li>
                    <span>1-</span>
                    معمل الدوائر المنطقية{" "}
                  </li>
                  <li>
                    <span>2-</span>
                    معمل أسس الهندسة الكهربية والإلكترونية{" "}
                  </li>
                  <li>
                    <span>3-</span>
                    معمل الشبكات
                  </li>
                  <li>
                    <span>4-</span>
                    معمل الهوائيات والميكرويف
                  </li>
                  <li>
                    <span>5-</span>
                    معمل (الميكروبروسيسور) ومعالجة الإشارات الرقمية{" "}
                  </li>
                  <li>
                    <span>6-</span>
                    معمل أسس الهندسة الإلكترونية
                  </li>
                  <li>
                    <span>7-</span>
                    معمل وحدة الإبتكار وريادة الأعمال
                  </li>
                  <li>
                    <span>8-</span>
                    معمل الالات الكهربية ونظم التحكم
                  </li>
                </ul>
                <h2 className=" font-bold text-lg pt-5"> كلمة منسق البرنامج</h2>
                <p className="px-6 pt-2">
                  الطلاب الاعزاء اهلا و مرحبا بكم فى برنامج هندسة الحاسبات و
                  الذى يعد من اهم البرامج المميزة داخل معهد الصفوة لكم منا كل
                  تقدير و اعتزاز فأنتم فخر بلدنا و عليكم تعقد الآمال من اجل
                  مستقبل واعد لمصرنا الحبيبة. انتم الاساس في بناء وتعمير الوطن
                  فدائما المهندسون هم صناع النهضة وأساس التطوير فى شتى مجالات
                  الحياة. إسعوا دائما لتحصيل العلم وإكتساب المعرفة والمهارات
                  التقنية التى ستجدونها داخل البرنامج من قبل افضل اعضاء هيئة
                  تدريس فى مصر. يهتم البرنامج بالتعامل مع مجالات واسعه والمتعلقة
                  بهندسة البرمجيات ومعداته، والشبكات. ويعطي المجال للتخصص في
                  الإتصالات اللاسلكية وشبكاتها، والشبكات الخلوية والأقمار
                  الصناعية، وأنظمة المعالجات الدقيقة، بالأضافة الى الأنظمه
                  المضمنة، وتصميم الحاسب، وأساسيات البرمجة، والبرامج الهندسية،
                  والروبوت. مع تركيز قوي على هندسة الكمبيوتر والحوسبة المتنقلة
                  والمنتشرة ، وخطوط إنتاج البرمجيات والحوسبة السحابية ، والأنظمة
                  المضمنة ، والوسائط المتعددة، والرسومات ثلاثية الأبعاد.{" "}
                </p>
                <p className="px-6 pt-2">
                  تتيح للخريجين فرصا متعددة في سوق العمل الذي يشهد ثورة تنافسية
                  من قطاعات مختلفة ومتنوعة ويمكن أن يتخصص خريجين هذا البرنامج فى
                  نظم البرمجيات – نظم التحكم – مطور تطبيقات الويب/الموبايل –
                  اتصالات البيانات – محلل ومصمم نظم – شبكات الحاسب – أمن شبكات
                  ومعلومات الحاسب – تصميم وتنفيذ دوائر الإتصالات المتقدمة –
                  تركيب اجهزة – تطوير نظم الإتصالات والإلكترونيات باستخدام النظم
                  المدمجة – بناء حلول برمجية باستخدام تقنيات وبنيات مختلفة –
                  تحليل البرمجيات والنمذجة والتصميم – الأنظمة المدمجة – رسومات
                  الحاسب والوسائط المتعددة – الحوسبة السحابية – الحوسبة
                  المتنقلة.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" container  rounded-2xl overflow-hidden mx-auto shadow-2xl mb-4 bg-gray-200 ">
          <div
            onClick={() => {
              setMenuCase1(false);
              setMenuCase3(false);
              setMenuCase5(false);
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
                  يتطلع برنامج هندسة نظم الحاسبات بمعهد الصفوة العالي للهندسة أن
                  يكون برنامجاً رائداً في التعليم والبحث العلمي في مجالات هندسة
                  الحاسبات على المستويين الإقليمي والدولي، وأن يقدم خدمة مجتمعية
                  متميزة للمجتمع والبيئة المحيطة.{" "}
                </p>
                <h2 className=" font-bold text-xl my-2"> رسالة البرنامج </h2>
                <p className="px-4">
                  يلتزم البرنامج بإعداد خريج مزود بالمعارف والمهارات في مجالات
                  هندسة نظم الحاسبات التي تؤهله للمنافسة في سوق العمل محلياً
                  وإقليمياً، كما يلتزم بإنتاج بحث علمي متميز، وتقديم خدمات
                  مجتمعية متميزة، وذلك في إطار القيم الإنسانية والأخلاقية.{" "}
                </p>
                <h2 className=" font-bold text-lg mt-3">أهداف البرنامج</h2>
                <ul className="px-6 pt-4 space-y-4">
                  <li>
                    <span>1-</span>
                    تطبيق المعرفة بالرياضيات ومفاهيم العلوم الهندسية لتحديد
                    وصياغة وحل المشكلات الهندسية.
                  </li>
                  <li>
                    <span>2-</span>
                    استخدام التقنيات والمهارات والأدوات الهندسية الحديثة اللازمة
                    لممارسة الحوسبة الذكية.{" "}
                  </li>
                  <li>
                    <span>3-</span>
                    استخدام أساليب الذكاء الاصطناعي في حل المشكلات المعقدة.{" "}
                  </li>
                  <li>
                    <span>4-</span>
                    استخدام البرمجيات والأدوات المتخصصة المناسبة في جميع مراحل
                    دورة حياة تطوير النظم وتحقيق مقاييس الجودة المقبولة في تطوير
                    البرمجيات.
                  </li>
                  <li>
                    <span>5-</span>
                    تقييم خصائص وأداء المكونات والعمليات لنظم الحاسبات.{" "}
                  </li>
                  <li>
                    <span>6-</span>
                    تصميم وإجراء التجارب وتحليل وتفسير النتائج.{" "}
                  </li>
                  <li>
                    <span>7-</span>
                    إدارة المشاريع المتعلقة بنظم الحاسبات والتي تخضع لقيود
                    اقتصادية وبيئية واجتماعية.{" "}
                  </li>
                  <li>
                    <span>8-</span>
                    العمل بكفاءة داخل فرق متعددة التخصصات والتواصل بشكل فعال.{" "}
                  </li>
                  <li>
                    <span>9-</span>
                    تطوير المهارات المتعلقة بالتفكير الإبداعي والنقدي في حل
                    المشكلات.{" "}
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
              setMenuCase2(false);
              setMenuCase3(!MenuCase3);
              setMenuCase4(false);
              setMenuCase5(false);
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
                MenuCase3 ? `  max-h-[9999px] ` : `max-h-0`
              } `}
            >
              <div className="  py-2 px-4 font-medium text-lg h-fit">
                <p className="py-3 text-center text-2xl font-bold">
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
              setMenuCase3(false);
              setMenuCase2(!MenuCase2);
              setMenuCase4(false);
              setMenuCase5(false);
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
                MenuCase2 ? `  max-h-[9999px] ` : `max-h-0`
              } `}
            >
              <div className="  py-2 px-4 font-medium text-lg h-fit">
                <p className="py-3 text-center text-2xl font-bold">
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
            href={ProgramCouncilPDF}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 w-full py-3 px-4 inline-block "
          >
            <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
              مجلس البرنامج
            </h1>
          </a>
        </div>

        <div className=" container  rounded-2xl overflow-hidden mx-auto shadow-lg mb-4  bg-gray-200 ">
          <div
            onClick={() => {
              setMenuCase5(!MenuCase5);
              setMenuCase2(false);
              setMenuCase3(false);
              setMenuCase4(false);
              setMenuCase1(false);
            }}
            className="bg-gray-900 w-full py-3 px-4 cursor-pointer"
          >
            <h1 className="container mx-auto text-white md:text-3xl text-lg font-bold">
              البرامج الدراسية{" "}
            </h1>
          </div>
          <div className="container mx-auto ">
            <div
              className={`  gap-x-3  overflow-hidden duration-500 transition-all ${
                MenuCase5 ? `  max-h-[9999px] ` : `max-h-0`
              } `}
            >
              <div className="grid grid-cols-11 px-3">
                <div className=" col-span-12 py-2  font-medium text-lg h-fit flex flex-col items-center">
                  <ul className="px-4 pt-4 w-full space-y-5">
                    <li className="flex flex-col gap-1 w-full items-center ">
                      <a
                        href={OldRegulationsPDF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center flex-col gap-1 w-fit"
                      >
                        <div className=" text-5xl font-bold text-red-500 ">
                          <i className="fa-regular fa-file-pdf"></i>
                        </div>
                        <p className="text-lg font-bold"> اللائحة القديمة </p>
                      </a>
                    </li>
                    <hr className=" border-t-2 border-dotted border-gray-700" />
                    <li className="flex flex-col gap-1 w-full items-center ">
                      <a
                        href={NewRegulationsPDF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center flex-col gap-1 w-fit"
                      >
                        <div className=" text-5xl font-bold text-red-500 ">
                          <i className="fa-regular fa-file-pdf"></i>
                        </div>
                        <p className="text-lg font-bold">اللائحة الجديدة </p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" container  rounded-2xl overflow-hidden mx-auto shadow-2xl ">
          <a
            href={AcademicStandardsPDF}
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
