import Image1 from "../../images/20190221_130412-1-768x459.jpg";
import Image2 from "../../images/366328384_757779659686775_6846920344268590879_n.jpg";
import Image3 from "../../images/DSC07113-768x576.jpg";
import Image4 from "../../images/PICT3297-1024x768.jpg";
import Image5 from "../../images/IMAG0016-1024x766.jpg";
import Image6 from "../../images/منحدر-ذو-ميل-مناسب-2-1024x768.jpg";
import Image7 from "../../images/download.png";
import Image8 from "../../images/download (1).png";
import Image9 from "../../images/download (2).png";
import Image10 from "../../images/1a6438f2-db8e-467d-9a16-8b7448e62cb4-1.jpg";
import Image11 from "../../images/1a6438f2-db8e-467d-9a16-8b7448e62cb4.jpg";
import Image12 from "../../images/8ddac908-39d7-465d-abd7-12490cf78d08.jpg";
import Image13 from "../../images/9d8e6363-e38e-4b61-8732-6e8f831afec2.jpg";
import Image14 from "../../images/66daa556-ea7d-4df3-88af-dad1571178ba.jpg";
import Image15 from "../../images/8104d9f5-88eb-440c-a2d6-bafd5d78018c.jpg";
import Image16 from "../../images/61423224-e122-401d-b3c2-9c1c9d63ee22.jpg";
import Image17 from "../../images/3cf89008-3dc4-45ed-b417-4888b13d7df6.jpg";
import User1 from "../../images/3.png";
import User2 from "../../images/WhatsApp-Image-2022-11-12-at-12.48.34-PM-206x300.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { useState } from "react";

export default function Almaehad() {
  const [MenuCase1, setMenuCase1] = useState(true);
  const [MenuCase2, setMenuCase2] = useState(false);
  const [MenuCase3, setMenuCase3] = useState(false);
  const [MenuCase4, setMenuCase4] = useState(false);
  const [MenuCase5, setMenuCase5] = useState(false);
  const [section1, setSection1] = useState(true);
  const [MenuCase21, setMenuCase21] = useState(true);
  const [MenuCase22, setMenuCase22] = useState(false);
  const [MenuCase23, setMenuCase23] = useState(false);
  const [section2, setSection2] = useState(false);
  const [MenuCase31, setMenuCase31] = useState(true);
  const [MenuCase32, setMenuCase32] = useState(false);
  const [MenuCase33, setMenuCase33] = useState(false);
  const [section3, setSection3] = useState(false);
  const [section4, setSection4] = useState(false);
  const [section5, setSection5] = useState(false);
  const duration = 1000;
  return (
    <>
      <div className="  py-3 ">
        <div className="w-full h-[90px] mb-16 "></div>
        <section className={`sec-1 ${section1 ? ` block` : `hidden`} `}>
          <div className="bg-gray-200 mb-5 ">
            <div
              onClick={() => {
                setMenuCase1(!MenuCase1);
                setMenuCase2(false);
                setMenuCase3(false);
                setMenuCase4(false);
                setMenuCase5(false);
              }}
              className="bg-gray-900 w-full py-3 px-4 cursor-pointer"
            >
              <h1 className="container mx-auto text-white md:text-3xl text-lg font-bold">
                نبذة عن المعهد
              </h1>
            </div>
            <div className="container mx-auto ">
              <div
                style={{
                  duration: `${duration}sm`,
                }}
                className={` grid grid-cols-12 gap-x-3  overflow-hidden  transition-all ${
                  MenuCase1
                    ? `xl:h-[450px] md:h-[690px] sm:h-[750px] h-[1100px] `
                    : `h-0`
                } `}
              >
                <div className="xl:col-span-7 lg:col-span-6 lg:pt-14 col-span-12  py-2 px-4 font-medium text-lg h-fit">
                  <h1 className="">
                    معهد الصفوة العالي للهندسة يتبع جمعية الكمَّار للخدمات
                    والتنمية الإجتماعية
                  </h1>
                  <p className="">
                    العنوان : ك 39 أيسر طريق مصر- الإسماعيلية الصحراوى- أمام
                    مدينة الشروق الرقم البريدى : 11837 الشروق ص. ب 162
                    تليفون:19/0226289010 عشرة خطوط – فاكس:0226289014- موبايل:
                    01000389996 /01273973013 تم تغيير الإسم من المعهد العالي
                    للهندسة والتكنولوجيا بالقليوبية إلى معهد الصفوة العالي
                    للهندسة بالقرار الوزارى رقم 2511 لسنة 2012 م. تم إنشاء
                    المعهد تحت إسم (المعهد العالي للهندسة والتكنولوجيا
                    بالقليوبية) في عام 2006م بالقرار الوزاري رقم (1116) بتاريخ
                    6/7/2006م (مرفق) الصادر من وزارة التعليم العالي بجمهورية مصر
                    العربية . تم تغيير إسم المعهد من (المعهد العالي للهندسة
                    والتكنولوجيا بالقليوبية) إلى (معهد الصفوة العالي للهندسة)
                    بالقرار الوزاري رقم 2511 لسنة 2012 م (مرفق). الجهة المشرفة
                    :- يتبع معهد الصفوة العالي للهندسة وزارة التعليم العالي
                    بجمهورية مصر العربية . ويخضع المعهد لأحكام القانون رقم (52)
                    لسنة 1970م ولائحته الصادرة بالقرار رقم (1088) لسنة 1987م .
                    عدد سنوات الدراسة :- مدة الدراسة بالمعهد خمس سنوات دراسية،
                    يُمنح من يجتازها بنجاح درجة البكالوريوس في شُعبة التخصص،
                    ويُعتمد المؤهل من السيد الأستاذ الدكتور وزير التعليم العالي
                    بجمهورية مصر العربية .
                  </p>
                </div>
                <div className="xl:col-span-5 lg:col-span-6 col-span-12 lg:flex items-center  ">
                  <Swiper
                    className="w-full lg:!py-[50px]"
                    loop={true}
                    navigation={true}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    pagination={false}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                  >
                    <SwiperSlide
                      style={{
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                      className="!w-[250px] !h-[250px] lg:!w-[350px] lg:!h-[350px] "
                    >
                      <img
                        className="w-full block h-full object-cover"
                        src={Image5}
                      />
                    </SwiperSlide>
                    <SwiperSlide
                      style={{
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                      className="!w-[250px] !h-[250px] lg:!w-[350px] lg:!h-[350px] "
                    >
                      <img
                        className="w-full block h-full object-cover"
                        src={Image4}
                      />
                    </SwiperSlide>
                    <SwiperSlide
                      style={{
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                      className="!w-[250px] !h-[250px] lg:!w-[350px] lg:!h-[350px] "
                    >
                      <img
                        className="w-full block h-full object-cover"
                        src={Image3}
                      />
                    </SwiperSlide>
                    <SwiperSlide
                      style={{
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                      className="!w-[250px] !h-[250px] lg:!w-[350px] lg:!h-[350px] "
                    >
                      <img
                        className="w-full block h-full object-cover"
                        src={Image6}
                      />
                    </SwiperSlide>
                    <SwiperSlide
                      style={{
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                      className="!w-[250px] !h-[250px] lg:!w-[350px] lg:!h-[350px] "
                    >
                      <img
                        className="w-full block h-full object-cover"
                        src={Image2}
                      />
                    </SwiperSlide>
                    <SwiperSlide
                      style={{
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                      className="!w-[250px] !h-[250px] lg:!w-[350px] lg:!h-[350px] "
                    >
                      <img
                        className="w-full block h-full object-cover"
                        src={Image1}
                      />
                    </SwiperSlide>
                  </Swiper>
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
              }}
              className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
            >
              <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
                رؤيــة و رسالة المعهد
              </h1>
            </div>
            <div className="container mx-auto bg-gray-200">
              <div
                style={{
                  duration: `${duration}sm`,
                }}
                className={` gap-x-3  overflow-hidden  transition-all ${
                  MenuCase4
                    ? ` xl:h-[260px] lg:h-[290px] md:h-[310px] sm:h-[360px] h-[560px] `
                    : `h-0`
                } `}
              >
                <div className="  py-2 px-4 font-medium text-lg h-fit">
                  <h2 className=" font-bold text-xl my-2">رؤيــة المعهد</h2>
                  <p>
                    يأمل معهد الصفوة العالي للهندسة أن يكون كيانًا مؤسسيًا
                    وتعليميًا متميزًا في مجال الهندسة والتكنولوجيا على المستوى
                    المحلي والإقليمي والدولي, وأن يطبق مفاهيم الجودة في العملية
                    التعليمية والبحث العلمي, متواصلاً مع قطاعات المجتمع المدني
                    ومحافظًا علي سمات بيئته وإقليمه.
                  </p>
                  <h2 className=" font-bold text-xl my-2">رسالة المعهد</h2>
                  <p>
                    إعداد خريجًا مهندسًا متميزًا في التخصصات (الهندسة المدنية –
                    الهندسة المعمارية – هندسة الإلكترونيات والاتصالات – هندسة
                    الحاسبات), قادرًا علي نقل معارفه ومهاراته في مجال التخصص,
                    قادرًا علي مواصلة تعليمه في الدراسات العليا والبحث العلمي في
                    مجالات وتطبيقات الهندسة والتكنولوجيا والمشاركة في حل مشكلات
                    المجتمع الهندسية والتكنولوجية والبيئية.
                  </p>
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
              }}
              className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
            >
              <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
                شروط الإلتحاق بالبرنامج الدراسي الهندسي :-
              </h1>
            </div>
            <div className="container mx-auto bg-gray-200">
              <div
                style={{
                  duration: `${duration}sm`,
                }}
                className={` gap-x-3  overflow-hidden  transition-all ${
                  MenuCase2 ? ` md:h-[230px] sm:h-[270px] h-[380px] ` : `h-0`
                } `}
              >
                <div className="  py-2 px-4 font-medium text-lg h-fit">
                  <p>
                    يتم قبول الطلاب عن طريق مكتب تنسيق القبول بالجامعات
                    والمعاهد.
                  </p>
                  <h2 className=" font-bold text-xl my-2">
                    ويقبل المعهد المؤهلات الآتية:-
                  </h2>

                  <ul className="px-4">
                    <li>
                      <span>1-</span>
                      الثانوية العامة علمي رياضة لشعبة الهندسة وما يعادلها من
                      الشهادات العربية والأجنبية .
                    </li>
                    <li>
                      <span>2-</span>
                      الثانوية الأزهرية علمي رياضة لشعبة الهندسة .
                    </li>
                    <li>
                      <span>3-</span>
                      الثانوية الصناعية نظام الثلاث سنوات .
                    </li>
                    <li>
                      <span>4-</span>
                      دبلوم المعاهد الفنية الصناعية والمدارس الفنية الصناعية
                      نظام الخمس سنوات أو ما يعادلها .
                    </li>
                  </ul>
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
              }}
              className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
            >
              <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
                الدرجات العلمية التي يمنحها المعهد :-
              </h1>
            </div>
            <div className="container mx-auto bg-gray-200">
              <div
                style={{
                  duration: `${duration}sm`,
                }}
                className={` gap-x-3  overflow-hidden  transition-all ${
                  MenuCase3 ? ` md:h-[300px] sm:h-[330px] h-[480px] ` : `h-0`
                } `}
              >
                <div className="  py-2 px-4 font-medium text-lg h-fit ">
                  <h2 className=" font-bold text-xl my-2">
                    يمنح المعهد درجة البكالوريوس في التخصصات التالية :-
                  </h2>

                  <ul className="px-4">
                    <li>
                      <span>1-</span>
                      الهندسة المعمارية
                    </li>
                    <li>
                      <span>2-</span>
                      الهندسة المدنية
                    </li>
                    <li>
                      <span>3-</span>
                      هندسة الإلكترونيات والاتصالات والحاسبات:-
                      <ul className="px-6 ">
                        <li>
                          <span>أ-</span>
                          شُعبة هندسة الإلكترونيات والاتصالات .
                        </li>
                        <li>
                          <span>ب-</span>
                          شُعبة هندسة الحاسبات .
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p className="my-3">
                    ويُعتمد المؤهل من السيد الأستاذ الدكتور وزير التعليم العالي
                    بجمهورية مصر العربية.
                  </p>
                  <p>
                    وتمت معادلة درجة البكالوريوس التي يمنحها المعهد بدرجة
                    البكالوريوس التي تمنحها الجامعات المصرية بالقرار الوزاري رقم
                    (30) بتاريخ 24/2/2011م (مرفق).
                  </p>
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
                setMenuCase5(!MenuCase5);
              }}
              className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
            >
              <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
                الدرجات العلمية التي يمنحها المعهد :-
              </h1>
            </div>
            <div className="container mx-auto bg-gray-200">
              <div
                style={{
                  duration: `${duration}sm`,
                }}
                className={` gap-x-3  overflow-hidden  transition-all ${
                  MenuCase5
                    ? ` lg:h-[400px] md:h-[430px] sm:h-[490px] h-[680px] `
                    : `h-0`
                } `}
              >
                <div className="  py-2 px-4 font-medium text-lg h-fit ">
                  <h2 className=" font-bold text-xl my-2">
                    نظام الامتحانات ومنح الدرجات العلمية :-
                  </h2>

                  <p className="my-2">
                    الامتحانات بالمعهد بنظام الفصلين الدراسيين (تيرمين)، حيث يتم
                    امتحان الفصل الدراسي الأول في شهر (يناير) من كل عام دراسي،
                    وامتحان الفصل الدراسي الثاني في شهر (مايو) من كل عام .
                  </p>
                  <p>
                    وكل أعمال الامتحانات بالمعهد تخضع لقرارات وزارة التعليم
                    العالي والمجلس الأعلى للجامعات، ونتائج البكالوريوس يتم
                    اعتمادها قبل ظهورها للطلاب من معالي وزير التعليم العالي.
                  </p>
                  <p>
                    كذلك يتم معادلة شهادة البكالوريوس واعتمادها من المجلس الأعلى
                    للجامعات لكافة خريجي المعهد .
                  </p>
                  <h2 className="text-xl font-bold my-2">
                    ويمنح المعهد درجة البكالوريوس في التخصصات التالية :-
                  </h2>
                  <ul className="px-4">
                    <li>
                      <span>1-</span>
                      الهندسة المعمارية
                    </li>
                    <li>
                      <span>2-</span>
                      الهندسة المدنية
                    </li>
                    <li>
                      <span>3-</span>
                      هندسة الإلكترونيات والاتصالات والحاسبات:-
                      <ul className="px-6 ">
                        <li>
                          <span>أ-</span>
                          شُعبة هندسة الإلكترونيات والاتصالات .
                        </li>
                        <li>
                          <span>ب-</span>
                          شُعبة هندسة الحاسبات .
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`sec-4 ${section4 ? ` block` : `hidden`}`}>
          <div className="">
            <div className="bg-gray-200 mb-5">
              <div
                onClick={() => {
                  setMenuCase21(!MenuCase21);
                  setMenuCase23(false);
                  setMenuCase22(false);
                }}
                className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
              >
                <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
                  قبول الطلاب{" "}
                </h1>
              </div>
              <div className="container mx-auto bg-gray-200">
                <div
                  style={{
                    duration: `${duration}sm`,
                  }}
                  className={` gap-x-3  overflow-hidden  transition-all ${
                    MenuCase21
                      ? ` lg:h-[480px] md:h-[600px] sm:h-[700px] h-[1020px] `
                      : `h-0`
                  } flex items-center justify-center `}
                >
                  <div className="  py-2 px-4 font-medium text-lg h-fit">
                    <p>
                      يحدد وزير التعليم العالي بعد أخذ رأى المجلس الأعلى لشئون
                      المعاهد في نهاية كل عام جامعي عدد الطلاب من أبناء جمهورية
                      مصر العربية أو غيرهم الذين يقبلون بالمعهد من الحاصلين على
                      شهادة الثانوية العامة والأزهرية والدبلومات الفنية الصناعية
                      نظام الثلاث سنوات والخمس سنوات أو الشهادات المعادلة
                      العربية والأجنبية، ونظام قبولهم
                    </p>
                    <p className="my-3">
                      يكون ترشيح الطلاب للمعهد عن طريق مكتب التنسيق للقبول ما لم
                      يصدر قراراً من وزير التعليم بغير ذلك
                    </p>
                    <h2 className=" font-bold text-xl my-2">
                      ويقبل المعهد المؤهلات الآتية:-
                    </h2>

                    <ul className="px-4">
                      <li>
                        <span>1-</span>
                        أن يكون حاصلاً على شهادة دراسة الثانوية العامة أو ما
                        يعادلها ، ويكون القبول بترتيب درجات النجاح، ويقبل كذلك
                        الحاصلون على دبلوم المدارس الثانوية الفنية في بعض
                        المعاهد وفقاً للقواعد والشروط التي يحددها وزير التعليم
                        العالي .
                      </li>
                      <li>
                        <span>2-</span>
                        أن يثبت الكشف الطبي خلوه من الأمراض المعدية وصلاحيته
                        لمتابعة الدراسة وفقاً للقواعد التي يحددها المجلس الأعلى
                        لشئون المعاهد.
                      </li>
                      <li>
                        <span>3-</span>
                        أن يكون متفرغاً للدراسة بالمعهد وذلك وفقاً لأحكام
                        اللوائح الداخلية للمعاهد.
                      </li>
                      <li>
                        <span>4-</span>
                        أن يكون محمود السيرة حسن السمعة .
                      </li>
                      <li>
                        <span>5-</span>
                        ويقبل المعهد المؤهلات الآتية :-
                        <ul className="px-6 ">
                          <li>
                            <span>أ-</span>
                            الثانوية العامة علمي رياضة لشعبة الهندسة وما يعادلها
                            من الشهادات العربية والأجنبية .
                          </li>
                          <li>
                            <span>ب-</span>
                            الثانوية الصناعية نظام الثلاث سنوات .
                          </li>
                          <li>
                            <span>ج-</span>
                            دبلوم المعاهد الفنية الصناعية والمدارس الفنية
                            الصناعية نظام الخمس سنوات أو ما يعادلها .
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 mb-5">
              <div
                onClick={() => {
                  setMenuCase21(false);
                  setMenuCase22(!MenuCase22);
                  setMenuCase23(false);
                }}
                className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
              >
                <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
                  تحويل الطلاب ونقل قيدهم{" "}
                </h1>
              </div>
              <div className="container mx-auto bg-gray-200">
                <div
                  style={{
                    duration: `${duration}sm`,
                  }}
                  className={` gap-x-3  overflow-hidden  transition-all ${
                    MenuCase22
                      ? ` lg:h-[700px] md:h-[1030px] sm:h-[1240px] h-[2020px] `
                      : `h-0`
                  } `}
                >
                  <div className="  py-2 px-4 font-medium text-lg h-fit ">
                    <h2 className=" font-bold text-xl my-2">
                      يتم تحويل ونقل الطلاب وفق القواعد الآتية :-
                    </h2>

                    <ul className="px-4">
                      <li>
                        <span>1-</span>
                        لا يجوز النظر في تحويل الطلاب المقيدين بالفرقة الأولى
                        بين المعاهد المتناظرة إلا إذا كان الطالب حاصلاً على الحد
                        الأدنى للمجموع الذي وصل إليه القبول في المعهد المطلوب
                        التحويل إليه، ويتم التحويل بموافقة مديري المعهدين .
                      </li>
                      <li>
                        <span>2-</span>
                        يجوز النظر في تحويل الطلاب المقيدين بفرقة أعلى من الفرقة
                        الإعدادي بين المعاهد المناظرة إذا وجدت ظروف إجتماعية أو
                        صحية تقتضي التحويل وذلك بموافقة مديري المعهدين، ويجوز في
                        هذه الحالة قيد الطالب في فرقة مناظرة للفرقة التي كان
                        مقيداً بها مع تأدية الإمتحانات اللازمة في بعض المواد أو
                        الإعفاء في مواد أخرى على حسب الأحوال وطبقاً لخطة
                        الدراسة، وتحسب ضمن فرص الرسوب المتاحة المدة التي قضاها
                        الطالب الراسب في الفرقة التي ينقل إلى نظيرتها .
                      </li>
                      <li>
                        <span>3-</span>
                        يجوز نقل قيد الطالب المنقول إلى فرقة أعلى من الفرقة
                        الإعدادي بأي من الكليات الجامعية أو من معهد إلى معهد غير
                        مناظر بشرط أن يكون حاصلاً على الحد الأدنى لمجموع الدرجات
                        الذي وصل إليه القبول في المعهد سنة حصوله على الشهادة
                        الثانوية وذلك بموافقة مديري المعهدين وفى هذه الحالة يكون
                        قيد الطالب بأولى فرق الدراسة بالمعهد .
                      </li>
                      <li>
                        <span>4-</span>
                        يجوز نقل قيد الطلاب المفصولين بغير الطريق التأديبي من
                        الكليات العسكرية أو كلية الشرطة لعدم الصلاحية للحياة
                        العسكرية بالمعاهد التي تكون مدة الدراسة بها أربع سنوات
                        مستجدين بالفرقة الأولى بشرط أن يكون الطالب حاصلاً على
                        المجموع الكلي والمواد المؤهلة إن وجد سنة حصوله على
                        الثانوية العامة، وأن يكون تقديم طلب الإلتحاق في السنة
                        الدراسية التي فصل الطالب خلالها أو في السنة الدراسية
                        اللاحقة بها على الأكثر إذا كان فصله قد تم بعد بدء
                        الدراسة بالمعهد في السنة السابقة على تقدمه بطلب الإلتحاق
                        .
                      </li>
                      <li>
                        <span>5-</span>
                        يشترط في جميع الحالات السابقة ألا يكون الطالب المطلوب
                        تحويله أو نقل قيده قد إستنفذ فرصة الرسوب ولا يكون الطالب
                        قد فصل لسبب تأديبي ، كما يشترط تقديم طلب التحويل في
                        المعهد المطلوب التحويل إليه قبل بدء الدراسة ، ويجوز
                        لمجلس إدارة المعهد عند الضرورة القصوى قبول التحويل خلال
                        الشهر التالي لبدء الدراسة .
                      </li>
                    </ul>
                    <p className="my-3 text-red-600">
                      وفى جميع الحالات يشترط مراجعة وموافقة رئيس الإدارة
                      المركزية المختص.
                    </p>
                    <p>
                      <p className=" font-bold text-xl my-2">
                        يجوز أن يقبل بأي معهد الطلاب الذين إستنفذوا مرات الرسوب
                        في الكليات والمعاهد العالية الغير مناظرة وكلية الشرطة
                        وفقاً للقواعد الآتية :-
                      </p>
                      <ul className="px-4">
                        <li>
                          <span>1-</span>
                          أن يكون الطالب مقيداً في الكلية أو المعهد العالي في
                          السنة الدراسية السابقة على السنة التي يلتحق فيها
                          بالمعهد .
                        </li>
                        <li>
                          <span>2-</span>
                          أن يكون حاصلاً في الشهادة الثانوية العامة أو ما
                          يعادلها على مجموع يؤهله للإلتحاق بالمعهد في عام حصوله
                          على تلك الشهادة أو في عام إلتحاقه بالمعهد أيهما أفضل
                          للطالب .
                        </li>
                      </ul>
                    </p>
                    <p className="my-3 text-red-600">
                      ويكون إلتحاق الطالب بالفرقة الإعدادي مستجدين، وتقدم أوراق
                      هؤلاء الطلاب إلى المعهد لإرسالها للإدارة المختصة بالوزارة،
                      ويكون قبولهم بموافقة مجلس إدارة المعهد وبقرار من رئيس
                      الإدارة المركزية .
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 mb-5">
              <div
                onClick={() => {
                  setMenuCase21(false);
                  setMenuCase22(false);
                  setMenuCase23(!MenuCase23);
                }}
                className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
              >
                <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
                  يجوز قيد وإعادة قيد الطالب في الحالات الآتية:-{" "}
                </h1>
              </div>
              <div className="container mx-auto bg-gray-200">
                <div
                  style={{
                    duration: `${duration}sm`,
                  }}
                  className={` gap-x-3  overflow-hidden  transition-all ${
                    MenuCase23
                      ? ` lg:h-[280px] md:h-[350px] sm:h-[400px] h-[630px] `
                      : `h-0`
                  } `}
                >
                  <div className="  py-2 px-4 font-medium text-lg h-fit ">
                    <h2 className=" font-bold text-xl my-2"></h2>

                    <ul className="px-4">
                      <li>
                        <span>1-</span>
                        الطالب المستجد الذي لم يستكمل إجراءات قيده لعذر مقبول .
                      </li>
                      <li>
                        <span>2-</span>
                        الطالب الذي سحب أوراقه وهو مقيد بالمعهد وقدم عذراً .{" "}
                      </li>
                      <li>
                        <span>3-</span>
                        الطالب الذي لم يتقدم لمكتب التنسيق في سنة حصوله على
                        الثانوية العامة لعذر مقبول .
                      </li>
                      <p className="my-3 text-red-600">
                        وفى جميع هذه الحالات يعتبر عام رسوب إعتباري لايترتب عليه
                        تخفيض الدرجات التي يحصل عليها في الإمتحان السنة التي
                        تنقضي دون أن يقيد فيها الطالب نفسه، ويكون القيد أو إعادة
                        القيد بموافقة مجلس إدارة المعهد وبقرار من رئيس الإدارة
                        المركزية المختص .
                      </p>
                      <li>
                        <span>4-</span>
                        لايجوز للطالب أن يقيد إسمه في أكثر من معهد في وقت واحد،
                        ولا يجوز له أن يجمع بين القيد في معهد غير تابع للوزارة
                        وأي كلية جامعية، ولا يجوز إعادة قيد الطالب بأي معهد
                        للحصول على شهادة سبق له الحصول عليها، كما لا يجوز إعادة
                        قيده للحصول على شهادة أخرى من معهد مماثل .
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`sec-2 ${section2 ? ` block` : `hidden`}`}>
          <div className="   ">
            <div className="bg-gray-200 mb-5">
              <div
                onClick={() => {
                  setMenuCase31(!MenuCase31);
                  setMenuCase33(false);
                  setMenuCase32(false);
                }}
                className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
              >
                <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
                  الريادة الأكادميه
                </h1>
              </div>
              <div className="container mx-auto bg-gray-200">
                <div
                  style={{
                    duration: `${duration}sm`,
                  }}
                  className={` gap-x-3  overflow-hidden  transition-all ${
                    MenuCase31 ? ` h-fit ` : `h-0`
                  } flex items-center justify-center `}
                >
                  <div className="  py-2 px-4 font-medium text-lg h-fit">
                    <div>
                      <img src={Image7} alt="" className="w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 mb-5">
              <div
                onClick={() => {
                  setMenuCase32(!MenuCase32);

                  setMenuCase33(false);
                  setMenuCase31(false);
                }}
                className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
              >
                <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
                  مهام الريادة الأكادميه
                </h1>
              </div>
              <div className="container mx-auto bg-gray-200">
                <div
                  style={{
                    duration: `${duration}sm`,
                  }}
                  className={` gap-x-3  overflow-hidden  transition-all ${
                    MenuCase32 ? ` h-fit ` : `h-0`
                  } flex items-center justify-center `}
                >
                  <div className="  py-2 px-4 font-medium text-lg h-fit">
                    <div>
                      <img src={Image8} alt="" className="w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 mb-5">
              <div
                onClick={() => {
                  setMenuCase33(!MenuCase33);
                  setMenuCase31(false);
                  setMenuCase32(false);
                }}
                className="bg-gray-900 w-full py-3 px-4 cursor-pointer "
              >
                <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
                  جدول الريادة الأكادميه
                </h1>
              </div>
              <div className="container mx-auto bg-gray-200">
                <div
                  style={{
                    duration: `${duration}sm`,
                  }}
                  className={` gap-x-3  overflow-hidden  transition-all ${
                    MenuCase33 ? ` h-fit ` : `h-0`
                  } flex items-center justify-center `}
                >
                  <div className="  py-2 px-4 font-medium text-lg h-fit">
                    <div>
                      <img src={Image9} alt="" className="w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`sec-3 ${section3 ? ` block` : `hidden`}`}>
          <div className="   ">
            <div className="bg-gray-200 mb-5">
              <div className="bg-gray-900 w-full py-3 px-4 cursor-pointer ">
                <h1 className="container mx-auto text-white md:text-3xl text-lg  font-bold">
                  قرارات المعادلة
                </h1>
              </div>
              <div className="container mx-auto bg-gray-200">
                <div
                  style={{
                    duration: `${duration}sm`,
                  }}
                  className={` gap-x-3  overflow-hidden  transition-all h-fit `}
                >
                  <div className="  py-2 px-4 font-medium text-lg h-fit">
                    <Swiper
                      slidesPerView={1}
                      loop={true}
                      autoplay={{
                        delay: 10000,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Autoplay, Pagination]}
                    >
                      <SwiperSlide className="w-fit">
                        <img src={Image10} alt="" className="w-full " />
                      </SwiperSlide>
                      <SwiperSlide className="w-fit">
                        <img src={Image11} alt="" className="w-full " />
                      </SwiperSlide>
                      <SwiperSlide className="w-fit">
                        <img src={Image12} alt="" className="w-full " />
                      </SwiperSlide>
                      <SwiperSlide className="w-fit">
                        <img src={Image13} alt="" className="w-full " />
                      </SwiperSlide>
                      <SwiperSlide className="w-fit">
                        <img src={Image14} alt="" className="w-full " />
                      </SwiperSlide>
                      <SwiperSlide className="w-fit">
                        <img src={Image15} alt="" className="w-full " />
                      </SwiperSlide>
                      <SwiperSlide className="w-fit">
                        <img src={Image16} alt="" className="w-full " />
                      </SwiperSlide>
                      <SwiperSlide className="w-fit">
                        <img src={Image17} alt="" className="w-full " />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-primary-400 py-7 flex items-center justify-center">
          <div className=" container flex items-center justify-center">
            <ul className="flex items-center justify-center flex-wrap gap-0.5 text-lg font-semibold">
              <li
                onClick={() => {
                  setSection1(false);
                  setSection4(false);
                  setSection2(true);
                  setSection3(false);
                  setSection5(false);
                }}
                className={`py-7  px-3 cursor-pointer ${
                  section2 ? `bg-blue-950 text-white` : `bg-gray-200`
                }`}
              >
                دليل الريادة الأكاديمية
              </li>
              <li
                onClick={() => {
                  setSection1(false);
                  setSection2(false);
                  setSection4(false);
                  setSection5(false);
                  setSection3(true);
                }}
                className={`py-7  px-3 cursor-pointer ${
                  section3 ? `bg-blue-950 text-white` : `bg-gray-200`
                }`}
              >
                قواعد القبول
              </li>
              <li
                onClick={() => {
                  setSection1(false);
                  setSection2(false);
                  setSection3(false);
                  setSection4(true);
                  setSection5(false);
                }}
                className={`py-7  px-3 cursor-pointer ${
                  section4 ? `bg-blue-950 text-white` : `bg-gray-200`
                }`}
              >
                قرارات المعادلة
              </li>
              <li
                onClick={() => {
                  setSection1(false);
                  setSection2(false);
                  setSection3(false);
                  setSection4(false);
                  setSection5(true);
                }}
                className={`py-7  px-3 cursor-pointer ${
                  section5 ? `bg-blue-950 text-white` : `bg-gray-200`
                }`}
              >
                أعضاء هيئة التدريس
              </li>
            </ul>
          </div>
        </div>

        <footer className="pt-32 pb-14 bg-blue-900">
          <div className=" flex flex-wrap  gap-y-28  items-center justify-center gap-x-10 container mx-auto px-4">
            <div>
              <div className="space-y-5 w-fit  relative shadow-lg rounded-3xl  flex items-center justify-center flex-col bg-gray-100 ">
                <div className=" absolute top-0  left-[50%] -translate-y-[50%]  translate-x-[-50%]">
                  <img
                    src={User1}
                    alt=""
                    className="w-[150px] h-[150px] object-cover rounded-full"
                  />
                </div>
                <div className=" px-3 pb-2 pt-32 mb-4 space-y-4">
                  <span className="text-primary-500 font-medium text-2xl">
                    رئيس مجلس الإدارة :
                  </span>
                  <h1 className="font-medium text-2xl ">
                    أ/ خالد عبد المجيد سيف
                  </h1>
                  <p className="font-medium text-2xl ">
                    بريد العميد:
                    <span className="text-primary-500">******</span>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-5 w-fit  relative shadow-lg rounded-3xl  flex items-center justify-center flex-col bg-gray-100 ">
                <div className="absolute top-0  left-[50%] -translate-y-[50%]  -translate-x-[50%]">
                  <img
                    src={User2}
                    alt=""
                    className="w-[150px] h-[150px] object-cover rounded-full"
                  />
                </div>
                <div className=" px-3 pb-2 pt-32 mb-4 space-y-4">
                  <span className="text-primary-500 font-medium text-2xl">
                    عميد المعهد:
                  </span>
                  <h1 className="font-medium text-2xl ">
                    أ.د/ محمد أحمد خفاجه
                  </h1>
                  <p className="font-medium text-2xl ">
                    بريد العميد:{" "}
                    <span className="text-primary-500">******</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
