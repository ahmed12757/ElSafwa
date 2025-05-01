import React, { useState } from "react";

export default function WahdatAlqias() {
  const [MenuCase1, setMenuCase1] = useState(true);
  const [MenuCase2, setMenuCase2] = useState(false);
  const staffMembers = [
    {
      id: 1,
      name: "د. منال طلعت حلمي صميحي",
      position: "مدرس علوم أساسية (رئيساً)",
    },
    {
      id: 2,
      name: "د. عادل يحيى عزت عطا",
      position: "مدرس بقسم هندسة الإلكترونيات والاتصالات والحاسبات",
    },
    {
      id: 3,
      name: "د. علاء الدين إسماعيل علي إبراهيم",
      position: "مدرس بقسم الهندسة المدنية",
    },
    {
      id: 4,
      name: "د. ضحى محمد سعيد محمد",
      position: "مدرس بقسم الهندسة المعمارية",
    },
  ];

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
            وحدة القياس والتقويم{" "}
          </h1>
        </div>
        <div className="container mx-auto ">
          <div
            className={` grid grid-cols-12 gap-x-3  overflow-hidden  transition-all ${
              MenuCase1 ? `  max-h-[9999px] ` : `max-h-0`
            }`}
          >
            <div className="col-span-12  py-2 px-4 font-medium text-lg h-fit">
              <p className="pt-4">
                تختص وحدة القياس والتقويم بتقويم الأداء على مستوى المعهد من خلال
                بناء الأدوات اللازمة لذلك سواء كانت موشرات أداء أو استبيانات أو
                معايير أو غيرها . وكذلك مقارنة أداء المعهد بالمستويات العالمية
                فى مجالات التعليم و التعلم والبحث العلمى وخدمة المجتمع ، واتخاذ
                القرارات التى من شأنها تعزيز جوانب القوة ومعالجة جوانب الضعف،
                ومن هذا المنطلق تم إنشاء وحدة القياس والتقويم بالقرار رقم(24)
                لسنة 2022م
              </p>
              <h2 className=" font-bold text-lg"> رؤية </h2>
              <p className="px-6">
                تسعي وحدة القياس والتقويم بالمعهد إلى الريادة والتميز في جميع
                مجالات الاداء التعليمى للإرتقاء بمستوى الخريج علمياً ومهارياً
                لتحقيق التنافسية محلياً وإقليمياً.{" "}
              </p>
              <h2 className=" font-bold text-lg mt-3"> رسالة </h2>
              <p className="px-6">
                تحديث وتطوير عمليات التعليم والتعلم والبحث والتدريب من خلال
                منظومة شاملة ومتطورة لإجراءات القياس وتقويم الطلاب والإمتحانات
                تستوفي معايير الجودة في العملية التعليمية لتحقيق مخرجات التعلم
                المستهدفة للبرامج التعليمية بما يلبى احتياجات سوق العمل محلياً
                وإقليمياً.{" "}
              </p>
              <h2 className=" font-bold text-lg pt-5"> اهداف وحدة </h2>
              <ul className="px-6 pt-4 space-y-4">
                <li>
                  <span>1-</span>
                  نشر وتعزيز ثقافة التقويم الشامل بين أعضاء هيئة التدريس
                  ومعاونيهم والطلاب بالمعهد.{" "}
                </li>
                <li>
                  <span>2-</span>
                  تقديم المشورة الفنية للمعهد وإدارات المعهد في مجال إعداد
                  وتنفيذ نظم تقويم الأداء وضمان الجودة.{" "}
                </li>
                <li>
                  <span>3-</span>
                  تنمية القدرات الذاتية للمعهد للقيام بالتقويم الذاتي والمستمر.{" "}
                </li>
                <li>
                  <span>4-</span>
                  توفير وثيقة مرجعية للمساءلة والمحاسبة للمشاركين في عمليات
                  التقويم والامتحانات.
                </li>
                <li>
                  <span>5-</span>
                  تحقيق الرضا لدى المشاركين في تنظيم وعمليات التقويم والامتحانات
                  والمعنيين بها .
                </li>
                <li>
                  <span>6-</span>
                  تنمية الشعور بالعدالة والمصداقية من خلال نظم وعمليات التقويم
                  والامتحانات.
                </li>
                <li>
                  <span>7-</span>
                  الارتقاء بمستوى الأداء المهني والأخلاقي للمشاركين في عمليات
                  التقويم والامتحانات.
                </li>
                <li>
                  <span>8-</span>
                  مراجعة وتطوير المقررات والبرامج التي يقدمها المعهد.{" "}
                </li>
                <li>
                  <span>9-</span>
                  رفع مستوى ثقة المجتمع في نتائج ومخرجات المعهد.{" "}
                </li>
                <li>
                  <span>10-</span>
                  تهيئة المعهد للحصول على الاعتماد من الهيئة القومية لضمان جودة
                  التعليم والاعتماد.{" "}
                </li>
              </ul>
              <p className="pt-4 text-red-500">
                إعداد نماذج القياس اللازمة لأعمال القياس والتقويم وعمل الإحصاءات
                ومتابعة النتائج والإجراءات التصحيحية ومردودها على العملية
                التعليمية{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" container  rounded-2xl overflow-hidden mx-auto shadow-2xl  bg-gray-200 ">
        <div
          onClick={() => {
            setMenuCase2(!MenuCase2);
            setMenuCase1(false);
          }}
          className="bg-gray-900 w-full py-3 px-4 cursor-pointer"
        >
          <h1 className="container mx-auto text-white md:text-3xl text-lg font-bold">
            مجلس إدارة وحدة القياس والتقويم بالمعهد
          </h1>
        </div>
        <div className="container mx-auto ">
          <div
            className={` grid grid-cols-12 gap-x-3  overflow-hidden  transition-all ${
              MenuCase2 ? `  max-h-[9999px] ` : `max-h-0`
            }`}
          >
            <div className="col-span-12  py-2 px-4 font-medium text-lg h-fit">
              <p className="py-4">
                يشكل مجلس إدارة وحدة القياس والتقويم بالمعهد لمدة سنة واحدة
                قابلة للتجديد.
              </p>
              <h2 className=" font-bold text-lg">
                {" "}
                مهام مدير وحدة القياس والتقويم
              </h2>
              <ul className="px-6 pt-4 space-y-4">
                <li>
                  <span>1-</span>
                  إعداد خطط العمل اللا زمة والتوجيه والإشراف على العاملين
                  بالوحدة.
                </li>
                <li>
                  <span>2-</span>
                  متابعة إنجاز المهام اليومية والتأكد من مطابقتها لخطة عمل
                  الوحدة، والتنسيق بين العاملين بالوحدة.
                </li>
                <li>
                  <span>3-</span>
                  تقديم تقارير دورية لمجلس الإدارة عن تطور العمل بالوحدة وفقا
                  للمهام المنوطة بها، والمشاكل التي تعوق القيام بالمهام.{" "}
                </li>
                <li>
                  <span>4-</span>
                  التدريب وقياس وتقييم نظم تقويم الطالب . تطويرالتقويم
                </li>
                <li>
                  <span>5-</span>
                  نشر ثقافة تطوير تقويم الطالب والامتحانات واعداد النشرات
                  الدورية.
                </li>
                <li>
                  <span>6-</span>
                  تصميم قاعدة بيانات للوحدة وإدخال مخرجات الأنشطة السابقة
                  وتحمليها على موقع المعهد وتوثيقها.{" "}
                </li>
                <li>
                  <span>7-</span>
                  إعداد تقرير شهري عن أنشطة الوحدة.
                </li>
              </ul>

              <h2 className=" font-bold text-lg pt-5 text-center">
                قرار رقم ( 22) بتاريخ 3/10/2022م{" "}
              </h2>
              <h2 className=" font-bold text-lg pt-5 text-center">
                بشأن تشكيل مجلس إدارة وحدة الأزمات والكوارث بالمعهد:
              </h2>
              <h2 className=" font-bold text-lg pt-5">
                السيد الأستاذ الدكتورعميد المعهد، بعد الاطلاع على:-{" "}
              </h2>
              <ul className="px-6 pt-4 space-y-4">
                <li>
                  <span>1-</span>
                  القانون رقم 49 لسنه 1972م بشأن تنظيم الجامعات وتعديلاته
                  ولائحته التنفيذية.{" "}
                </li>
                <li>
                  <span>2-</span>
                  القانون رقم 47 لسنه 1978م بشأن تنظيم العاملين المدنيين ولائحته
                  التنفيذية.{" "}
                </li>
                <li>
                  <span>3-</span>
                  الصلاحيات الممنوحة لعميد المعهد نظامًا.
                </li>
              </ul>
              <h2 className=" font-bold text-lg pt-5">تقرر ما يلي </h2>
              <h2 className=" font-bold text-lg pt-5">
                {" "}
                تُشكل وحدة الأزمات والكوارث من السادة:{" "}
              </h2>
              <div className="grid grid-cols-12 gap-x-3 border-1">
                <div className="col-span-12 grid grid-cols-11 border-1 text-center   font-bold">
                  <div className=" col-span-1 py-2 border  px-2"> م </div>
                  <div className=" col-span-5 py-2 border px-2">الإســـــم</div>
                  <div className=" col-span-5 py-2 border  px-2">الوظيفة </div>
                </div>
                {staffMembers.map((member) => (
                  <div
                    key={member.id}
                    className="col-span-12 grid grid-cols-11 border-1 text-center"
                  >
                    <div className=" col-span-1 py-2 border  px-2">
                      {member.id}
                    </div>
                    <div className=" col-span-5 py-2 border px-2">
                      {member.name}
                    </div>
                    <div className=" col-span-5 py-2 border  px-2">
                      {member.position}
                    </div>
                  </div>
                ))}
              </div>
              <p className=" font-bold text-lg pt-5">
                – ويكلف المجلس بإعداد لائحة الوحدة وخطة العمل والبرامج الزمنية
                للتحديث والتطوير.
              </p>
              <h2 className=" font-bold text-lg pt-5 text-end">
                <span>عميد المعهد:</span>
                أ.د. محمد أحمد خفاجة
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
