import React, { useState } from "react";

export default function WahdatAlazimat() {
  const [MenuCase1, setMenuCase1] = useState(true);
  const [MenuCase2, setMenuCase2] = useState(false);
  const staffMembers = [
    {
      id: 1,
      name: "أ.د. محمد أحمد محمد خفاجة",
      position: "عميد المعهد (رئيساً)",
    },
    {
      id: 2,
      name: "د. منال طلعت حلمي صميحي",
      position: "مدرس علوم أساسية",
    },
    {
      id: 3,
      name: "د. نهال طارق محمد إبراهيم",
      position: "مدرس علوم أساسية",
    },
    {
      id: 4,
      name: "د. محمد إبراهيم جبر أحمد زريق",
      position: "مدرس بقسم هندسة الإلكترونيات والاتصالات والحاسبات",
    },
    {
      id: 5,
      name: "د. عادل يحيى عزت عطا",
      position: "مدرس بقسم هندسة الإلكترونيات والاتصالات والحاسبات",
    },
    {
      id: 6,
      name: "د. علاء الدين إسماعيل علي إبراهيم",
      position: "مدرس بقسم الهندسة المدنية",
    },
    {
      id: 7,
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
            وحدة الأزمات والكوارث
          </h1>
        </div>
        <div className="container mx-auto ">
          <div
            className={` grid grid-cols-12 gap-x-3  overflow-hidden  transition-all ${
              MenuCase1 ? `  max-h-[9999px] ` : `max-h-0`
            }`}
          >
            <div className="col-span-12  py-2 px-4 font-medium text-lg h-fit">
              <h2 className=" font-bold text-lg"> التعريف بالوحدة </h2>
              <p className="px-6">
                هي وحدة إدارية متخصصة بتوفير عناصر الأمن والسلامة لإدارة الأزمات
                بالمعهد، وهذه الوحدة لها كيانها ومسئولياتها قبل وأثناء وبعد حدوث
                الأزمة، وتضم الوحدة فريق عمل متميز لإدارة تلك الأزمات. و قد تم
                إنشاء هذه الوحدة بالقرار رقم (22) بتاريخ 3/10/2022م.{" "}
              </p>
              <h2 className=" font-bold text-lg"> رؤية الوحدة </h2>
              <p className="px-6">
                تسعى و حدة إدارة الأزمات والكوارث بمعهد الصفوة العالي للهندسة
                إلى تحقيق الأمن والسلامة والحد من الخسائر المادية والبشرية بما
                يكفل استقرار وملاءمة بيئة العمل، بالإضافة الى بناء وتطوير منظومة
                متكاملة لإدارة الازمات والكوارث والحد من المخاطر.
              </p>
              <h2 className=" font-bold text-lg mt-3"> رسالة الوحدة </h2>
              <p className="px-6">
                تقوم وحدة إدارة الأزمات والكوارث بالاستعداد الكامل مع جميع وحدات
                المعهد وان تكون داعما لأعمالها ومرشدا لممارستها، كما تلتزم
                الوحدة بتوفير نظام فعال لتحقيق الأمن والسلامة للطلاب واعضاء هيئة
                التدريس والعاملين بالمعهد والوقاية من حدوث الكوارث فى ضوء
                المعايير القومية للسلامة والأمن.
              </p>
              <h2 className=" font-bold text-lg pt-5"> اهداف وحدة </h2>
              <ul className="px-6 pt-4 space-y-4">
                <li>
                  <span>1-</span>
                  توفير الأمن والسلامة بالمعهد وحماية الأرواح والممتلكات.{" "}
                </li>
                <li>
                  <span>2-</span>
                  تأمين مباني المعهد ضد الحرائق والأزمات والكوارث.
                </li>
                <li>
                  <span>3-</span>
                  تحقيق معايير الأمن والسلامة بالمعهد.{" "}
                </li>
                <li>
                  <span>4-</span>
                  التنبؤ بالمخاطر والأزمات الممكن حدوثها فى حرم المعهد ، وتحديد
                  آليـات للوقايـة منها.{" "}
                </li>
                <li>
                  <span>5-</span>
                  تنفيذ الإجراءات الوقائية لتخفيف حدوث الأزمات والكوارث.{" "}
                </li>
                <li>
                  <span>6-</span>
                  إعداد خطط ورسم سيناريوهات للتعامل مع الأزمات والكوارث.
                </li>
                <li>
                  <span>7-</span>
                  نشر الوعي بين العاملين بالمعهد والطلاب وتدريبهم على السلوك
                  الأمثل حال حدوث الكوارث أو الأزمات، وكيفية تنفيذ أعمال
                  المواجهة والإغاثة.{" "}
                </li>
                <li>
                  <span>8-</span>
                  تحديث أجهزة الإنذار المبكر والرصد.
                </li>
              </ul>
              <p className="pt-4 text-red-500">
                يمكن تقسيم دور ومهام وحدة إدارة الأزمات و الكوارث بالمعهد إلى
                ثلاث مراحل على النحو التالي:
              </p>
              <h2 className=" font-bold text-lg pt-5">
                المرحلة الأولى (مرحلة ما قبل الأزمة) ويتم فيها:
              </h2>
              <ul className="px-6 pt-4 space-y-4">
                <li>
                  <span>1-</span>
                  تجييز غرفة عمميات لإدارة الأزمات والكوارث مزودة بأجهزة الاتصال
                  المناسبة.
                </li>
                <li>
                  <span>2-</span>
                  عمل خريطة تفصيلية لمبني المعهد مع تحديد مناطق الدخول والخروج
                  المتاحة.{" "}
                </li>
                <li>
                  <span>3-</span>
                  تحديد الأزمات المحتمل حدوثها ، ومعرفة نقاط القوة والضعف
                  والمخاطر بالمعهد.{" "}
                </li>
                <li>
                  <span>4-</span>
                  التخطيط (التنبؤ الوقائي) للأزمات المحتمل حدوثها فى المدى
                  القريب أو البعيد.
                </li>
                <li>
                  <span>5-</span>
                  إعداد الخطط ورسم السيناريوهات لدرء الأزمات ومواجهتها.{" "}
                </li>
                <li>
                  <span>6-</span>
                  اتخاذ الإجراءات الوقائية لمنع حدوث الأزمة أو الكارثة.{" "}
                </li>
                <li>
                  <span>7-</span>
                  الاستعداد للتعامل مع الحدث مثل تدريب فريق العمل بالوحدة، كذلك
                  صيانة المعدات المستخدمة في التعامل مع الأزمات.{" "}
                </li>
                <li>
                  <span>8-</span>
                  نشر الوعي الثقافي بإدارة الأزمات، عن طريق عقد ورش عمل تدريبية
                  للإرتقاء بمستوى كفاءة العاملين وأعضاء هيئة التدريس بالمعهد في
                  هذا الصدد{" "}
                </li>
                <li>
                  <span>9-</span>
                  تطوير وسائل الرصد والإنذار المبكر في مجال إدارة الأزمات
                  والكوارث بالمعهد.{" "}
                </li>
                <li>
                  <span>10-</span>
                  التدريب على تجربة الإخلاء عند حدوث أى أزمات.{" "}
                </li>
              </ul>
              <h2 className=" font-bold text-lg pt-5">
                المرحلة الثانية (مرحلة المواجهة والاستجابة والإحتواء):
              </h2>
              <ul className="px-6 pt-4 space-y-4">
                <li>
                  <span>1-</span>
                  تنفيذ الخطط والسيناريوهات التى سبق إعدادها والتدريب عليها.
                </li>
                <li>
                  <span>2-</span>
                  تنفيذ أعمال المواجهة والإغاثة بأنواعيا وفقا لنوعية الأزمة.{" "}
                </li>
                <li>
                  <span>3-</span>
                  القيام بأعمال خدمات الطوارئ العاجلة.{" "}
                </li>
                <li>
                  <span>4-</span>
                  تنفيذ عمليات الإخلاء عند الضرورة.
                </li>
                <li>
                  <span>5-</span>
                  متابعة الحدث والوقوف على تطورات الموقف بشكل مستمر، وتحديد
                  الإجراءات المطلوبة للتعامل معها من خلال غرفة العمليات.{" "}
                </li>
              </ul>
              <h2 className=" font-bold text-lg pt-5">
                المرحلة الثالثة (مرحلة إعادة التوازن وعودة الحياة){" "}
              </h2>
              <ul className="px-6 pt-4 space-y-4">
                <li>
                  <span>1-</span>
                  حصر الخسائر فى األفراد والمنشآت
                </li>
                <li>
                  <span>2-</span>
                  التأهيل واعادة البناء مرحلة استئناف النشاط والحماية من أخطار
                  المستقبلية المحتملة{" "}
                </li>
                <li>
                  <span>3-</span>
                  تقييم الإجراءات التي تم اتخاذها للتعامل مع الازمة ورصد نقاط
                  الضعف والقوة
                </li>
                <li>
                  <span>4-</span>
                  توثيق الحدث و تقديم التوصيات والمقترحات اللازمة، وتوجيهها إلى
                  الجهات المعنية للاستفادة منها من أجل تلافي السلبيات مستقبلا
                  (إن وجدت)، وتطوير وتحديث الخطط وفقاً للمستجدات.
                </li>
              </ul>
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
            مواصفات واختصاصات المديرالتنفيذى للوحدة{" "}
          </h1>
        </div>
        <div className="container mx-auto ">
          <div
            className={` grid grid-cols-12 gap-x-3  overflow-hidden  transition-all ${
              MenuCase2 ? `  max-h-[9999px] ` : `max-h-0`
            }`}
          >
            <div className="col-span-12  py-2 px-4 font-medium text-lg h-fit">
              <h2 className=" font-bold text-lg">
                {" "}
                (أ) مواصفات المدير التنفيذى لموحدة
              </h2>
              <ul className="px-6 pt-4 space-y-4">
                <li>
                  <span>1-</span>
                  يجب أن يكون من بين أعضاء هيئة التدريس بالمعهد.
                </li>
                <li>
                  <span>2-</span>
                  يجب أن يكون لديه خبرة في مجال إدارة الازمات.
                </li>
                <li>
                  <span>3-</span>
                  أن يكون حاصل علي دورات تدريبية في مجال إدارة الازمات والكوارث.{" "}
                </li>
                <li>
                  <span>4-</span>
                  أن يكون سجله خالي من الجزاءات.
                </li>
                <li>
                  <span>5-</span>
                  أن يكون لديه ميارات التواصل الفعال مع اآلخرين.{" "}
                </li>
                <li>
                  <span>6-</span>
                  أن يكون مشهود له بالمصداقية والعمل الجاد.{" "}
                </li>
                <li>
                  <span>7-</span>
                  يفضل أن لا يشغل أي منصب إداري بالمعهد أو الجامعة عند تعيينه
                  مديرا للوحدة.{" "}
                </li>
              </ul>
              <h2 className=" font-bold text-lg pt-5">
                {" "}
                (ب) اختصاصات المدير التنفيذى للوحدة:{" "}
              </h2>
              <ul className="px-6 pt-4 space-y-4">
                <li>
                  <span>1-</span>
                  تشكيل الهيكل الإدارى والتنظيمي للوحدة، واللجان التنفيذية،
                  وتحديد المهام الوظيفية لجميع الاعضاء.
                </li>
                <li>
                  <span>2-</span>
                  وضع التشكيل السنوي للوحدة وعرضه علي مجلس إدارة المعهد
                  للموافقة.
                </li>
                <li>
                  <span>3-</span>
                  دعوة الأعضاء لحضور اجتماعات شهرية لتحديد أعمال وأنشطة الوحدة
                  ومسؤوليات كل عضو.
                </li>
                <li>
                  <span>4-</span>
                  متابعة سير العمل واتخاذ القرارات اللازمة طبقا للتقارير المقدمة
                  من المدير التنفيذي للوحدة.
                </li>
                <li>
                  <span>5-</span>
                  متابعة تنفيذ السياسة العامة لتحقيق أهداف الوحدة.{" "}
                </li>
                <li>
                  <span>6-</span>
                  متابعة تنفيذ قرارات مجلس الإدارة.
                </li>
                <li>
                  <span>7-</span>
                  يقدم هو ومجلس إدارته الرؤي والخطط والحلول المبتكره لإدارة
                  الازمات مـع التنبؤ بها قبل حدوثها ان أمكن…..
                </li>
              </ul>
              <h2 className=" font-bold text-lg pt-5">
                اللجان التنفيذية للوحدة:{" "}
              </h2>
              <p className="pt-2 px-6">
                يتم تشكيل عدة لجان منبثقة عن وحدة إدارة الازمات ، ويكون رئيسيا
                ومديرها التنفيذي عضو مجلس إدارة الأزمات، وباقي أعضاء اللجنة
                يحددها رئيس اللجنة المنبثقة حسب ما يخدم العمل وتبعها للتخصص
                والمهام الوظيفية المكلف بيا حسب توظيفه الوظيفي بحيث لا يتقاضي
                أعضاء اللجنة أجور إضافية تشكل عبء مادي علي المعهد، علي أن تصرف
                للمتميز منهم مكافأة جهود غير عادية.{" "}
              </p>
              <h2 className=" font-bold text-lg pt-5">
                و اللجان تكون علي النحو التالي:{" "}
              </h2>
              <ul className="px-6 pt-4 space-y-4">
                <li>
                  <span>1-</span>
                  لجنة الصحة والسلامة المهنية.
                </li>
                <li>
                  <span>2-</span>
                  لجنة الأمن الداخلي.{" "}
                </li>
                <li>
                  <span>3-</span>
                  لجنة التوعية والإعلام.{" "}
                </li>
                <li>
                  <span>4-</span>
                  اللجنة الطبية.{" "}
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
