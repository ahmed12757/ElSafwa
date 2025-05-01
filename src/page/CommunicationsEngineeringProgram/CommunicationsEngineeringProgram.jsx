import React, { useState } from "react";

export default function CommunicationsEngineeringProgram() {
  const [MenuCase1, setMenuCase1] = useState(true);
  const [MenuCase2, setMenuCase2] = useState(false);
  const [MenuCase3, setMenuCase3] = useState(false);
  const [MenuCase4, setMenuCase4] = useState(false);
  const employee = [
    {
      id: 1,
      name: "أ.د/ محمد لطفي رابح",
      title: "رئيس القسم  ",
    },
    {
      id: 2,
      name: "د/ محمد محمد الهادي",
      title: "المدرس بالقسم ومنسق البرنامج  بالقسم",
    },
    {
      id: 3,
      name: "د/ عادل يحيى عزت",
      title: "المدرس بالقسم",
    },

    {
      id: 4,
      name: "د/ طارق حسني علي",
      title: " المدرس بالقسم ومدير وحدة ضمان الجودة بالقسم",
    },
    {
      id: 5,
      name: "د/ محمد إبراهيم جبر",
      title: " المدرس بالقسم ومنسق وحدة ضمان الجودة بالقسم",
    },

    {
      id: 6,
      name: "د/ دعاء السعيد حسن",
      title: "المدرس بالقسم",
    },
    {
      id: 7,
      name: "د/ بيداء مرتضى ذكي",
      title: "المدرس بالقسم",
    },

    {
      id: 8,
      name: "د/ فاطمة أحمد محمد",
      title: "المدرس بالقسم",
    },
    {
      id: 9,
      name: "د/ مصطفى أحمد حسن",
      title: "المدرس بالقسم",
    },
    {
      id: 10,
      name: "د/ محمد مصطفى محمد",
      title: "المدرس بالقسم",
    },
    { id: 11, name: "م/ معتصم محمد السيد", title: "مدرس مساعد" },
    { id: 12, name: "م/ ايناس مصطفى عبد الله", title: "مدرس مساعد" },
    { id: 13, name: "م/ رغدة رزق جوده", title: "مدرس مساعد" },
    { id: 14, name: "م/ منار أسامة محمد", title: "مدرس مساعد" },
    { id: 15, name: "م/ عبير سعيد طه", title: "معيد" },
    { id: 16, name: "م/ ريم مجدي محمود", title: "معيد" },
    { id: 17, name: "م/ آية شريف حلمي", title: "معيد" },
    { id: 18, name: "م/ الآء إبراهيم علي", title: "معيد" },
    { id: 19, name: "م/ كريستينا أشرف خليل", title: "معيد" },
    { id: 20, name: "م/ هاجر محمد حسن", title: "معيد" },
    { id: 21, name: "م/ نهى أحمد محمد", title: "معيد" },
  ];
  const employee2 = [
    {
      id: 1,
      name: "أ.د/ محمد لطفي رابح",
      title: "رئيس القسم  ",
    },
    {
      id: 2,
      name: "د/ محمد محمد الهادي",
      title: "المدرس بالقسم ومنسق البرنامج  بالقسم",
    },
    {
      id: 3,
      name: "د/ عادل يحيى عزت",
      title: "المدرس بالقسم",
    },

    {
      id: 4,
      name: "د/ طارق حسني علي",
      title: " المدرس بالقسم ومدير وحدة ضمان الجودة بالقسم",
    },
    {
      id: 5,
      name: "د/ محمد إبراهيم جبر",
      title: " المدرس بالقسم ومنسق وحدة ضمان الجودة بالقسم",
    },

    {
      id: 6,
      name: "د/ دعاء السعيد حسن",
      title: "المدرس بالقسم",
    },
    {
      id: 7,
      name: "د/ بيداء مرتضى ذكي",
      title: "المدرس بالقسم",
    },

    {
      id: 8,
      name: "د/ فاطمة أحمد محمد",
      title: "المدرس بالقسم",
    },
    {
      id: 9,
      name: "د/ مصطفى أحمد حسن",
      title: "المدرس بالقسم",
    },
    {
      id: 10,
      name: "د/ محمد مصطفى محمد",
      title: "المدرس بالقسم",
    },
  ];

  return (
    <>
      <section
        className={`sec-1 px-3 pb-4  min-h-screen bg-gradient-to-br from-[#0f172a] to-[#f28a24] bg-fixed bg-cover `}
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
              برنامج هندسة الإلكترونيات والاتصالات{" "}
            </h1>
          </div>
          <div className="container mx-auto ">
            <div
              className={` grid grid-cols-12 gap-x-3 duration-500  overflow-hidden  transition-all ${
                MenuCase1 ? `  max-h-[9999px] ` : `max-h-0`
              } `}
            >
              <div className="col-span-12  py-2 px-4 font-medium text-lg h-fit">
                <h2 className=" font-bold text-lg">وصف البرنامج</h2>
                <p className="px-6">
                  يعد تخصص هندسة الإلكترونيات والاتصالات من أهم تخصصات الهندسة
                  في وقتنا الحالي وذلك بسبب التطور الكبير في التكنولوجيا
                  والاساليب الجديده التي تم تطويرها في الاتصالات والتقنيات
                  المستخدمة. يهدف البرنامج الى تأهيل خريج هذا القسم ليكون قادر
                  على تصميم وتطوير انظمة جديده والاشراف على التصنيع والتعامل مع
                  المشاكل التقنية والالكترونية في مختلف مجالات الاتصالات مثل طرق
                  النقل التناظري ، والإلكترونيات الأساسية ، والمعالجات الدقيقة ،
                  والاتصالات الرقمية والتناظرية ، والدوائر المتكاملة التناظرية ،
                  وهندسة الميكروويف ، والاتصالات عبر الأقمار الصناعية ،
                  والهوائيات ، وتطور الموجات.{" "}
                </p>
                <h2 className=" font-bold text-lg mt-3">
                  كما أن القسم يحتوي على عدد من المعامل المجهزة لخدمة المقررات
                  الدراسية وهي على النحو التالي:
                </h2>
                <ul className="px-6 pt-4 space-y-4">
                  <li>
                    <span>1-</span>
                    معمل أسس هندسة الإلكترونيات والإتصالات
                  </li>
                  <li>
                    <span>2-</span>
                    معمل الهوائيات والميكرويف
                  </li>
                  <li>
                    <span>3-</span>
                    معمل أسس الهندسة الكهربية والإلكترونية والقياسات{" "}
                  </li>
                  <li>
                    <span>4-</span>
                    معمل الدوائر المنطقية{" "}
                  </li>
                  <li>
                    <span>5-</span>
                    معمل (الميكروبروسيسور) ومعالجة الإشارات الرقمية{" "}
                  </li>
                  <li>
                    <span>6-</span>
                    معمل الشبكات
                  </li>
                  <li>
                    <span>7-</span>
                    معمل وحدة الإبتكار وريادة الأعمال{" "}
                  </li>
                  <li>
                    <span>8-</span>
                    معمل الالات الكهربية ونظم التحكم{" "}
                  </li>
                </ul>
                <h2 className=" font-bold text-lg pt-5"> كلمة منسق البرنامج</h2>
                <p className="px-6 pt-2">
                  ابنائي وبناتي طلاب البرنامج اهلا ومرحبا بكم في برنامج هندسة
                  الإلكترونيات والاتصالات والذي يهدف إلى الوصول بمعارف ومهارات
                  الخريج للمنافسة بقوة في سوق العمل محليا وإقليميا وأن يتمكن
                  الخريجون المتميزون من الحصول على منح دراسية للماجستير
                  والدكتوراه في جامعات أوروبا. ولكي يتحقق ذلك لابد من التحديث
                  المستمر للخطط الدراسية وأساليب وتقنيات التعليم والتعلم لمواكبة
                  التطور العلمي والتقني وتبسيط وصول المعلومة للطالب بعيدا عن
                  التعقيد دون الإخلال بالعمق. كما يتطلب تطوير الجانب العملي من
                  خلال المعامل والورش والتدريب الميداني وكذلك المهارات الناعمة
                  مثل مهارات العرض واتقان اللغة الأجنبية باعتبارها الوسيلة
                  المتاحة للتحصيل العلمي وسد الفجوة المعرفية. كما يتضمن ذلك أيضا
                  وضع ضوابط لضمان جودة مخرجات البحث العلمي وربطه بالاحتياجات
                  المجتمعية وربط التعليم بالصناعة والتحديث المستمر لهذه الضوابط
                  كلما اقتضى الأمر.{" "}
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
          <div className="container mx-auto  h-fit">
            <div
              className={` gap-x-3  overflow-hidden duration-500  transition-all ${
                MenuCase4 ? `  max-h-[9999px] ` : `max-h-0`
              } `}
            >
              <div className="  py-2 px-4 font-medium text-lg overflow-hidden">
                <h2 className=" font-bold text-xl my-2"> رؤية البرنامج</h2>
                <p className="px-4">
                  تطلع برنامج هندسة الإلكترونيات والاتصالات بمعهد الصفوة العالي
                  للهندسة أن يكون برنامجاً رائداً في التعليم والبحث العلمي في
                  مجالات هندسة الإلكترونيات والاتصالات على المستويين الإقليمي
                  والدولي، وأن يقدم خدمة مجتمعية متميزة للمجتمع والبيئة المحيطة.{" "}
                </p>
                <h2 className=" font-bold text-xl my-2"> رسالة البرنامج </h2>
                <p className="px-4">
                  يلتزم البرنامج بإعداد خريج متميز يمتلك المعارف والمهارات التي
                  تؤهله للمنافسة في سوق العمل محلياً وإقليمياً، وتقديم أبحاث
                  علمية دولية في مجالات هندسة الإلكترونيات والاتصالات تساعد على
                  الابتكار والمشاركة الفعالة في التنمية المجتمعية، مع تطبيق
                  المعايير الأخلاقية الهندسية.{" "}
                </p>
                <h2 className=" font-bold text-lg mt-3">أهداف البرنامج</h2>
                <ul className="px-6 pt-4 space-y-4">
                  <li>
                    <span>1-</span>
                    إعداد خريج قادر على التعامل الفعال مع متطلبات العصر واستخدام
                    الوسائل التكنولوجية الحديثة.
                  </li>
                  <li>
                    <span>2-</span>
                    تخريج مهندسين لديهم مهارات الاتصال الفعال والعمل الجماعي في
                    المشاريع المختلفة والتعاون مع جميع التخصصات الهندسية.
                  </li>
                  <li>
                    <span>3-</span> تخريج مهندسين لديهم القدرة على تطوير الأداء
                    المهني والتفكير المبدع وريادة الأعمال استناداً إلى قيم
                    المجتمع وأخلاقيات المهنة.
                  </li>
                  <li>
                    <span>4-</span>
                    إعداد خريج قادر على دمج تطبيق المعرفة بالرياضيات والعلوم
                    الهندسية ومهارات التعلم الذاتي بالإضافة إلى الابتكار لتقديم
                    حل للمشكلات الطبيعية وإنتاج بحث علمي متميز.{" "}
                  </li>
                  <li>
                    <span>5-</span>
                    إعداد خريج قادر على تحليل وتصميم الدوائر الإلكترونية واكتشاف
                    الأخطاء وإصلاحها باستخدام الأجهزة الإلكترونية.
                  </li>
                  <li>
                    <span>6-</span>. إعداد خريج قادر على ابتكار أنظمة اتصالات
                    رقمية وتناظرية جديدة، وكذلك اتصالات المحمول وفق مواصفات فنية
                    عالية.{" "}
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
            }}
            className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
          >
            <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
              مجلس القسم{" "}
            </h1>
          </div>
          <div className="container mx-auto ">
            <div
              className={` gap-x-3  overflow-hidden duration-500  transition-all ${
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
            }}
            className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
          >
            <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
              هيئة التدريس باقسم{" "}
            </h1>
          </div>
          <div className="container mx-auto ">
            <div
              className={` gap-x-3  overflow-hidden duration-500  transition-all ${
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

        <div className=" container  rounded-2xl overflow-hidden mx-auto shadow-2xl">
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
