import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("الاسم مطلوب"),
      email: Yup.string()
        .email("البريد الإلكتروني غير صالح")
        .required("البريد الإلكتروني مطلوب"),
      message: Yup.string().required("الرسالة مطلوبة"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      setIsSubmitted(true);
    },
  });

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#f28a24] bg-fixed bg-cover flex flex-col items-center justify-center px-4 pt-10 pb-2 relative ">
        <div className="absolute  pt[90px]"></div>
        <div className="max-w-2xl w-full bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-lg p-8 z-10 lg:mt-28 mt-16">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            اتصل بنا
          </h1>
          <p className="text-gray-600 text-center mb-8">
            يسعدنا دائماً تواصلكم معنا! يرجى ملء النموذج أدناه وسنقوم بالرد عليك
            في أقرب وقت ممكن.
          </p>

          {isSubmitted ? (
            <div className="text-green-600 text-center text-lg font-semibold">
              ✅ تم إرسال رسالتك بنجاح! سنقوم بالرد عليك قريباً.
            </div>
          ) : (
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div>
                <label className="block text-right text-gray-700 mb-1">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-2 border ${
                    formik.touched.name && formik.errors.name
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="أدخل اسمك الكامل"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm mt-1 text-right">
                    {formik.errors.name}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-right text-gray-700 mb-1">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-2 border ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="example@email.com"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm mt-1 text-right">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-right text-gray-700 mb-1">
                  الرسالة
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-2 border ${
                    formik.touched.message && formik.errors.message
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <p className="text-red-500 text-sm mt-1 text-right">
                    {formik.errors.message}
                  </p>
                )}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
                >
                  إرسال
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
