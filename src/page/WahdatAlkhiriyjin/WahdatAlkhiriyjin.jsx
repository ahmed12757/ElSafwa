import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function WahdatAlkhiriyjin() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
      graduateCode: "",
      major: "",
      certificateType: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("الاسم مطلوب"),
      email: Yup.string()
        .email("بريد غير صالح")
        .required("البريد الإلكتروني مطلوب"),
      subject: Yup.string().required("عنوان الرسالة مطلوب"),
      message: Yup.string(),
      graduateCode: Yup.string(),
      major: Yup.string(),
      certificateType: Yup.string().required("اختيار نوع الشهادة مطلوب"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="px-3 pb-4  min-h-fit bg-gradient-to-br from-[#0f172a] to-[#f28a24] bg-fixed bg-cover">
      <div className="w-full h-[90px] lg:mb-15 mb-2"></div>
      <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md p-6 shadow-md rounded-xl text-right">
        <p className="mb-6 text-gray-700 leading-loose text-center ">
          عزيزي الخريج يمكنك التواصل معنا وطلب استخراج شهادة مؤقته أو بيان
          تقديرات أو بيان نجاح وحسن السير والسلوك من خلال إرسال رسالة أو التواصل
          واتساب من خلال الروابط التالية، يسعدنا تواصلك معنا
        </p>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* الاسم */}
          <div>
            <label className="block font-medium">
              الاسم <span className="text-red-500">*</span>
            </label>
            <input
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.fullName}
              className="w-full border p-2 rounded"
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <p className="text-red-500 text-sm">{formik.errors.fullName}</p>
            )}
          </div>

          {/* البريد الإلكتروني */}
          <div>
            <label className="block font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-full border p-2 rounded"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>

          {/* عنوان الرسالة */}
          <div>
            <label className="block font-medium">
              عنوان الرسالة <span className="text-red-500">*</span>
            </label>
            <input
              name="subject"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.subject}
              className="w-full border p-2 rounded"
            />
            {formik.touched.subject && formik.errors.subject && (
              <p className="text-red-500 text-sm">{formik.errors.subject}</p>
            )}
          </div>

          {/* نص الرسالة */}
          <div>
            <label className="block font-medium">الرسالة</label>
            <textarea
              name="message"
              rows="4"
              onChange={formik.handleChange}
              value={formik.values.message}
              className="w-full border p-2 rounded resize-none"
            />
          </div>

          {/* كود الخريج + التخصص */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">كود الخريج</label>
              <input
                name="graduateCode"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.graduateCode}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">التخصص</label>
              <input
                name="major"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.major}
                className="w-full border p-2 rounded"
              />
            </div>
          </div>

          {/* نوع الشهادة المطلوبة */}
          <div>
            <label className="block font-medium">
              الشهادة المطلوبة <span className="text-red-500">*</span>
            </label>
            <select
              name="certificateType"
              onChange={formik.handleChange}
              value={formik.values.certificateType}
              className="w-full border p-2 rounded"
            >
              <option value="">-- اختر الشهادة --</option>
              <option value="شهادة تخرج"> شهادة تخرج </option>
              <option value="بيان نجاح"> بيان نجاح </option>
              <option value="بيان تقديرات"> بيان تقديرات </option>
              <option value="حسن سير وسلوك"> حسن سير وسلوك </option>
            </select>
            {formik.touched.certificateType &&
              formik.errors.certificateType && (
                <p className="text-red-500 text-sm">
                  {formik.errors.certificateType}
                </p>
              )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            إرسال الطلب
          </button>
        </form>
      </div>
    </div>
  );
}
