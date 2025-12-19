export const metadata = {
  title: "سياسة الخصوصية",
};

export default function PrivacyPolicy() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">سياسة الخصوصية</h1>

      <p className="mb-4 text-gray-700 leading-relaxed">
        نحن في Digital Store نحترم خصوصيتك ونلتزم بحماية أي معلومات يتم
        مشاركتها أثناء استخدام الموقع.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">المعلومات التي نجمعها</h2>
      <ul className="list-disc pr-6 space-y-2 text-gray-700">
        <li>معلومات التواصل عند التواصل عبر واتساب</li>
        <li>بيانات فنية مثل نوع المتصفح لتحسين الأداء</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-3">استخدام المعلومات</h2>
      <p className="text-gray-700">
        تُستخدم المعلومات فقط لتقديم الخدمة، تحسين تجربة المستخدم،
        والتواصل عند الحاجة.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">حماية البيانات</h2>
      <p className="text-gray-700">
        لا نقوم ببيع أو مشاركة أي بيانات مع أطراف خارجية.
      </p>
    </section>
  );
}
