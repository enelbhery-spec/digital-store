export const metadata = {
  title: "طريقة الاستخدام",
};

export default function HowToUsePage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8 text-center">
        طريقة استخدام موقع Digital Store
      </h1>

      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        اتبع الخطوات التالية للحصول على المنتج الرقمي الخاص بك بسهولة
        وبشكل فوري بعد إتمام الطلب.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="text-green-600 text-3xl font-bold mb-4">1</div>
          <h3 className="font-bold text-lg mb-2">اختيار المنتج</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            تصفّح المنتجات الرقمية المتاحة واختر المنتج المناسب لاحتياجك.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="text-green-600 text-3xl font-bold mb-4">2</div>
          <h3 className="font-bold text-lg mb-2">طلب المنتج</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            اضغط على زر “اطلب عبر واتساب” وسيتم تجهيز رسالة الطلب تلقائيًا.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="text-green-600 text-3xl font-bold mb-4">3</div>
          <h3 className="font-bold text-lg mb-2">الدفع</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            بعد التواصل يتم تأكيد عملية الدفع حسب وسيلة الدفع المتاحة.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="text-green-600 text-3xl font-bold mb-4">4</div>
          <h3 className="font-bold text-lg mb-2">استلام المنتج</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            بعد تأكيد الدفع يتم إرسال رابط المنتج الرقمي فورًا.
          </p>
        </div>

        {/* Step 5 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="text-green-600 text-3xl font-bold mb-4">5</div>
          <h3 className="font-bold text-lg mb-2">فتح الرابط</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            افتح الرابط مباشرة واستمتع باستخدام المنتج بدون أي تعقيد.
          </p>
        </div>

        {/* Step 6 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="text-green-600 text-3xl font-bold mb-4">6</div>
          <h3 className="font-bold text-lg mb-2">الدعم الفني</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            في حالة وجود أي مشكلة يمكنك التواصل معنا عبر واتساب في أي وقت.
          </p>
        </div>
      </div>
    </section>
  );
}
