import React, { useState } from "react";

export default function WahdatAljawdih() {
  const [MenuCase1, setMenuCase1] = useState(true);
  const [MenuCase2, setMenuCase2] = useState(false);

  return (
    <div className="px-3 pb-4  min-h-fit bg-gradient-to-br from-[#0f172a] to-[#f28a24] bg-fixed bg-cover">
      <div className="w-full h-[90px] lg:mb-15 mb-2"></div>

      <div className=" container  rounded-2xl overflow-hidden mx-auto shadow-2xl mb-4 bg-gray-200 ">
        <div
          onClick={() => {
            setMenuCase1(!MenuCase1);
            setMenuCase2(false);
          }}
          className="bg-gray-900 w-full py-3 px-4 cursor-pointer"
        >
          <h1 className="container mx-auto text-white md:text-3xl text-lg font-bold">
            رؤية ورسالة الوحدة
          </h1>
        </div>
        <div className="container mx-auto ">
          <div
            className={` grid grid-cols-12 gap-x-3 duration-500  overflow-hidden  transition-all ${
              MenuCase1 ? `  max-h-[9999px] ` : `max-h-0`
            } `}
          >
            <div className="col-span-12  py-2 px-4 font-medium text-lg h-fit">
              <h2 className=" font-bold text-lg"> رؤية الوحدة </h2>
              <p className="px-6">
                تطمح الوحدة في أن تصبح واحدة من وحدات ضمان الجودة المتميزة علي
                المستوى القومي والإقليمي، من خلال تبنيها للمعايير القومية لنظم
                الجودة والإعتماد المتعلقة بالقدرة المؤسسية والفاعلية التعليمية
                لمؤسسات التعليم العالي، وأن تكتسب من خلال ممارساتها المصداقية
                وثقة المجتمع
              </p>
              <h2 className=" font-bold text-lg mt-3"> رسالة الوحدة </h2>
              <p className="px-6">
                تعمل وحدة ضمان الجودة بمعهد الصفوة العالي للهندسة بالتعاون مع
                إدارة المعهد علي تهيئة المعهد وإدارته للوفاء بمتطلبات تحقيق
                معايير الهيئة القومية لضمان جودة التعليم والإعتماد ، بهدف الحصول
                علي الإعتماد من خلال نشر ثقافة الجودة ، والتدريب وتقديم الدعم
                الفني، والمساهمة في عملية التحسين المستمر للأداء، وصولاً لكسب
                ثقة المجتمع في مخرجات المعهد من الخريجين وخدمة المجتمع
              </p>
              <h2 className=" font-bold text-lg pt-5"> اهداف وحدة الجودة </h2>
              <ul className="px-6 pt-4 space-y-4">
                <p>
                  تعمل الوحدة من خلال تبنى مجموعة من الأهداف الإستراتيجية التي
                  تتوافق تماماً مع قيم ومتطلبات الهيئة القومية لضمان جودة
                  التعليم والإعتماد، و تحقق رسالة الوحدة ، وتسهم في ذات الوقت في
                  تحقيق رسالة المعهد ، وهي :
                </p>
                <li>
                  <span>1-</span>
                  الإنتهاء من إنشاء نظام داخلي لإدارة الجودة بالمعهد طبقاً
                  لمتطلبات ومعايير الهيئة القومية لضمان جودة التعليم والإعتماد .{" "}
                </li>
                <li>
                  <span>2-</span>
                  الإنتهاء من إعداد المعهد للتقدم لطلب الإعتماد من الهيئة
                  القومية لضمان جودة التعليم والإعتماد .{" "}
                </li>
                <li>
                  <span>3-</span>
                  نشر ثقافة الجودة بالمعهد من خلال :
                  <div className="px-8 my-2 space-y-3 text-gray-900">
                    <p>
                      تدريب ما لا يقل عن 75 % من أعضاء هيئة التدريس ومعاونيهم
                      وقيادات المعهد على مفاهيم إدارة الجودة .
                    </p>
                    <p>
                      عقد ندوات توعية بمفاهيم ومبادئ إدارة الجودة وما يستجد من
                      معايير للجودة والإعتماد بالمعهد مرة واحدة على الأقل كل عام
                      .
                    </p>
                    <p>
                      إصدار نشرة دورية نصف سنوية متخصصة في إدارة الجودة لنشر
                      مفاهيم وإنجازات نظام الجودة بالمعهد .
                    </p>
                  </div>
                </li>
                <li>
                  <span>4-</span>
                  إكتساب ثقة المجتمع فى مخرجات العملية التعليمية من المعهد .{" "}
                </li>
                <li>
                  <span>5-</span>
                  إزكاء مبدأ المشاركة المجتمعية لمؤسسات المجتمع المدني والجمعيات
                  المهتمة بالتعليم للمشاركة في الرقابة ودعم مناخ الجودة بالمعهد
                  .{" "}
                </li>
                <li>
                  <span>6-</span>
                  إعلاء قيم التميز والتنافسية بين كافة الأقسام الأكاديمية
                  والوحدات الإدارية التابعة للمعهد .
                </li>
                <li>
                  <span>7-</span>
                  ترسيخ مفهوم وآليات التحسين المستمر من خلال توجيه القائمين علي
                  أنشطة التطوير المختلفة نحو مواكبة المستويات العالمية لإدارة
                  الجودة في جميع المجالات.
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
            setMenuCase2(!MenuCase2);
          }}
          className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
        >
          <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
            تشكيل مجلس إدارة الجودة{" "}
          </h1>
        </div>
        <div className="container mx-auto  h-fit">
          <div
            className={` gap-x-3  overflow-hidden duration-500  transition-all ${
              MenuCase2 ? `  max-h-[9999px] ` : `max-h-0`
            } `}
          >
            <div className="  py-2 px-4 font-medium text-lg overflow-hidden">
              <h2 className=" font-bold text-xl my-2"> تشكيل مجلس الادارة </h2>
              <p className="px-4">
                يشكل بقرار من عميد المعهد ” مجلس إدارة ” للوحدة برئاسته علي
                النحو التالي من كلٍ من:{" "}
              </p>
              <div className="grid grid-cols-12 gap-x-3 border-1">
                <div className="col-span-12 grid grid-cols-11 border-1 text-center   font-bold">
                  <div className=" col-span-1 py-2 border  px-2"> 1 </div>
                  <div className=" col-span-5 py-2 border px-2">
                    أ. د. عميد المعهد{" "}
                  </div>
                  <div className=" col-span-5 py-2 border  px-2">
                    رئيس مجلس الإدارة
                  </div>
                </div>
                <div className="col-span-12 grid grid-cols-11 border-1 text-center   font-bold">
                  <div className=" col-span-1 py-2 border  px-2"> 2 </div>
                  <div className=" col-span-5 py-2 border px-2">
                    أ. د. وكيل المعهد لشئون التعليم والطلاب{" "}
                  </div>
                  <div className=" col-span-5 py-2 border  px-2">
                    نائب رئيس مجلس الإدارة{" "}
                  </div>
                </div>
                <div className="col-span-12 grid grid-cols-11 border-1 text-center   font-bold">
                  <div className=" col-span-1 py-2 border  px-2"> 3 </div>
                  <div className=" col-span-5 py-2 border px-2">
                    أ. د. وكيل المعهد لشئون خدمة المجتمع وتنمية البيئة{" "}
                  </div>
                  <div className=" col-span-5 py-2 border  px-2">عضواً </div>
                </div>
                <div className="col-span-12 grid grid-cols-11 border-1 text-center   font-bold">
                  <div className=" col-span-1 py-2 border  px-2"> 4 </div>
                  <div className=" col-span-5 py-2 border px-2">
                    أ. د. مدير وحدة الجودة{" "}
                  </div>
                  <div className=" col-span-5 py-2 border  px-2">عضواً </div>
                </div>
                <div className="col-span-12 grid grid-cols-11 border-1 text-center   font-bold">
                  <div className=" col-span-1 py-2 border  px-2"> 5 </div>
                  <div className=" col-span-5 py-2 border px-2">
                    نائب مدير وحدة ضمان الجودة{" "}
                  </div>
                  <div className=" col-span-5 py-2 border  px-2">عضواً </div>
                </div>
                <div className="col-span-12 grid grid-cols-11 border-1 text-center   font-bold">
                  <div className=" col-span-1 py-2 border  px-2"> 6 </div>
                  <div className=" col-span-5 py-2 border px-2">
                    مدير عام المعهد
                  </div>
                  <div className=" col-span-5 py-2 border  px-2">عضواً</div>
                </div>
              </div>
              <p className=" py-4 px-4 text-red-500">
                ويجوز ضم اعضاء ممثلين لهيئات المجتمع المدني ولطلاب المعهد ومنسقى
                البرامج والاقسام والخريجين والهيئة المعاونه ومنسقى الوحدات .
              </p>
              <h2 className=" font-bold text-xl my-2"> التوصيف الوظيفى </h2>
              <p className="px-4">
                يتطلب بناء نظم ضمان الجودة بالمعهد إنشاء وحدة لإدارة نظام الجودة
                لتقديم الدعم الفني المطلوب وتقويم وتطوير وتحسين الأداء به ،
                ويتطلب تحقيق ذلك النظام لأهدافه دعم القيادات الأكاديمية
                والإدارية بالمعهد ، ووضع الإستراتيجيات والسياسات والخطط
                التنفيذية لنشر الوعي في مجتمع المعهد بأهمية هذا النظام ، وتحديد
                الآليات والأدوات اللازمة لتنفيذها، ورصد الموارد المادية والبشرية
                المطلوبة ، ومتابعة تنفيذ الأنشطة المختلفة لتحقيق الأهداف المرجوة
                منها .{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" container  rounded-2xl overflow-hidden mx-auto shadow-2xl">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 w-full py-3 px-4 inline-block "
        >
          <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
            الهيكل التنظيمى للوحدة
          </h1>
        </a>
      </div>
    </div>
  );
}
