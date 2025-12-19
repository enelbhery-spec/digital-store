export const metadata = {
  title: "شروط الاستخدام",
};

export default function TermsPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">شروط الاستخدام</h1>

      <p className="mb-4 text-gray-700 leading-relaxed">
        باستخدامك لموقع Digital Store فإنك توافق على الالتزام بشروط
        الاستخدام التالية.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">طبيعة الخدمة</h2>
      <p className="text-gray-700">
        الموقع يقدّم منتجات رقمية يتم تسليمها إلكترونيًا بعد إتمام الطلب،
        ولا يوجد شحن مادي.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">الدفع والاستلام</h2>
      <p className="text-gray-700">
        يتم تسليم المنتج بعد تأكيد عملية الدفع عبر وسيلة التواصل المتاحة.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">سياسة الاسترجاع</h2>
      <p className="text-gray-700">
        نظرًا لطبيعة المنتجات الرقمية، لا يمكن استرجاع أو استبدال المنتج
        بعد تسليمه.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">الاستخدام المسموح</h2>
      <p className="text-gray-700">
        يُمنع إعادة بيع أو مشاركة أو نشر المنتجات بدون إذن كتابي مسبق.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">التعديلات</h2>
      <p className="text-gray-700">
        يحتفظ الموقع بالحق في تعديل شروط الاستخدام في أي وقت.
      </p>
    </section>
  );
}
