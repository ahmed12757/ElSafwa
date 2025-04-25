import React, { useState } from "react";
export default function ArchitectureProgram() {
  const [MenuCase1, setMenuCase1] = useState(true);
  const [MenuCase2, setMenuCase2] = useState(false);
  const [MenuCase3, setMenuCase3] = useState(false);
  const [MenuCase4, setMenuCase4] = useState(false);

  const employee = [
    {
      id: 1,
      name: "د/ حسن عبدالوهاب محمود",
      title: "المدرس بالقسم ورئيس القسم ",
    },
    { id: 2, name: "د/ هشام رجب علي", title: " المدرس بالقسم" },
    { id: 3, name: "د/ عبدالراضي محمد حسين", title: "المدرس بالقسم" },
    { id: 4, name: "د/ ضحى محمد سعيد", title: "المدرس بالقسم" },

    { id: 5, name: " م / إسراء محمد عبد اللطيف", title: "مدرس مساعد" },
    { id: 6, name: " م / ولاء محمد رزق", title: "مدرس مساعد" },
    { id: 7, name: " م / نهاد محمد عبد الحميد", title: "مدرس مساعد" },
    { id: 8, name: " م / تغريد السيد محمد", title: "مدرس مساعد" },

    { id: 9, name: " م / أمنية عبد المنصف حسن", title: "معيد" },
    { id: 10, name: " م / أماني حامد سيد", title: "معيد" },
    { id: 11, name: " م / سهيلة محمود عبدالقوي", title: "معيد" },
    { id: 12, name: " م / رحاب عبد المنعم خيري", title: "معيد" },
    { id: 13, name: " م / لميس عصام محمد", title: "معيد" },
    { id: 14, name: " م / محمد عبد اللطيف بدوي", title: "معيد" },
  ];
  const employee2 = [
    {
      id: 1,
      name: "د/ حسن عبدالوهاب محمود",
      title: "المدرس بالقسم ورئيس القسم ",
    },
    { id: 2, name: "د/ هشام رجب علي", title: " المدرس بالقسم" },
    { id: 3, name: "د/ عبدالراضي محمد حسين", title: "المدرس بالقسم" },
    { id: 4, name: "د/ ضحى محمد سعيد", title: "المدرس بالقسم" },
  ];

  return (
    <>
      <section
        className={`sec-1 px-3 pb-4 min-h-fit  bg-gradient-to-br from-[#0f172a] to-[#f28a24] bg-fixed bg-cover bg-gray-200 `}
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
              برنامج الهندسة المعمارية{" "}
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
                  صممت رسالة برنامج الهندسة المعمارية بمعهد الصفوة العالي
                  للهندسة،بما يسهم في تحقيق تطلعات الدولة المصرية في المرحلة
                  الراهنة (أو ما يُعرف برؤية مصر ٢٠٣٠)، والتي تسعى مصر من خلالها
                  بخطى حثيثة لتنفيذ خطط تنموية عملاقة ومشروعات عمرانية ضخمة،
                  بهدف معالجة مشكلات الماضي المتراكمة، والخروج من الوادي الضيق،
                  ومواجهة تحديات المستقبل، وتغيير وجه مصر واستعادة مكانتها
                  الحضارية اللائقة على الصعيدين الاقليمي و العالمي، الى جانب أن
                  مجال العمارة نفسه شهد العديد من التطورات الفكرية والتقنية
                  الهامة على مستوى التصميم والتنفيذ، وأصبح يستلزم خريجين ذوي
                  قدرات ومهارات متميزة حتى يمكنهم المنافسة في سوق العمل.{" "}
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
                  يتطلع قسم الهندسة المعمارية بمعهد الصفوة العالي للهندسة أن
                  يكون قسماً رائداً بين الأوساط الأكاديمية في مجال التعليم
                  المعماري ومتميزاً في البحث العلمي على المستوى المحلي والدولي،
                  وأن يقدم خدمة مجتمعية واعدة لتحسين جودة الحياة.
                </p>
                <h2 className=" font-bold text-xl my-2"> رسالة البرنامج </h2>
                <p className="px-4">
                  يلتزم برنامج الهندسة المعمارية بمعهد الصفوة العالي للهندسة
                  بتقديم خدمة تعليمية متميزة وتخريج مهندس معماري كفء، مزود
                  بالقدرات والمعارف والمهارات العقلية والعلمية والبحثية والفنية
                  والمهنية والسلوكية التي تؤهله لممارسة مهنة العمارة على مستوى
                  احترافي، والمنافسة في سوق العمل محلياً ودولياً، وتقديم خدمات
                  متميزة للمجتمع، والارتقاء بمهنة العمارة، في إطار القيم
                  الإنسانية والأخلاقية.
                </p>
                <h2 className=" font-bold text-lg mt-3">أهداف البرنامج</h2>
                <ul className="px-6 pt-4 space-y-4">
                  <li>
                    <span>1-</span>
                    تزويد الطلاب بالمعارف والعلوم النظرية والتطبيقات الحديثة
                    المرتبطة بالعمارة وكذلك العلوم الهندسية والإنسانية المتعلقة
                    بها والمتوافقة مع كل من احتياجات المجتمع وسوق العمل، بما
                    يضمن التعلم الذاتي المستمر ويحقق متطلبات الاستدامة.{" "}
                  </li>
                  <li>
                    <span>2-</span>
                    تخريج مهندس معماري كفء لديه الفهم والمعرفة العلمية اللازمة
                    لمتطلبات التخصص، بالإضافة إلى دعم قدرته على الالتزام
                    بأخلاقيات المهنة وتقاليدها والتنافس الشريف بكل اقتدار.
                  </li>
                  <li>
                    <span>3-</span>
                    توسيع أفق الطلاب وتدريبهم وتنمية قدراتهم ومهاراتهم في كافة
                    المجالات المرتبطة بالهندسة المعمارية.{" "}
                  </li>
                  <li>
                    <span>4-</span>
                    تدعيم قدرة الطلاب على اتباع المنهج العلمي في حل المشكلات من
                    خلال تعريف المشكلة وجمع المعلومات اللازمة عنها وتصنيفها
                    وتحليلها ووضع الحلول المناسبة لها لإنتاج مشروعات تصميمية
                    معمارية وعمرانية وتخطيطية بالكفاءة والجودة الواجبة
                    بالاستعانة بالتقنيات والأدوات المتطورة.
                  </li>
                  <li>
                    <span>5-</span>
                    إكساب الطلاب الخبرات العلمية اللازمة في مجال التصميم من خلال
                    تدريبهم على مشروعات مشابهة للواقع ذات محددات واعتبارات
                    مختلفة سواء كانت اقتصادية أو بيئية أو اجتماعية أو سياسية أو
                    أمنية أو أخلاقية، وتنمية قدراتهم على المشاركة المتكاملة
                    والفعالة مع فرق العمل لاقتراح بدائل مختلفة للحل وتقييمها
                    لاختيار أنسبها وإعداد المستندات والرسوم اللازمة لها والإشراف
                    على تنفيذها.{" "}
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
