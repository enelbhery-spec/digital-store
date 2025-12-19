export const metadata = {
  title: "تواصل معنا",
};

export default function ContactPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6 text-center">
        تواصل معنا
      </h1>

      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        نحن دائمًا جاهزون لمساعدتك. لا تتردد في التواصل معنا في أي وقت
        بخصوص الطلبات أو الدعم الفني.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* معلومات التواصل */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl font-bold mb-4">معلومات التواصل</h2>

          <ul className="space-y-4 text-gray-700">
            <li>
              📱 <strong>واتساب:</strong>{" "}
              <a
                href="https://wa.me/201021732703"
                target="_blank"
                className="text-green-600 hover:underline"
              >
                اضغط هنا للتواصل
              </a>
            </li>

            <li>
              📧 <strong>البريد الإلكتروني:</strong>{" "}
              <a
                href="mailto:en.elbhery@gmail.com"
                className="text-blue-600 hover:underline"
              >
                support@digitalstore.com
              </a>
            </li>

            <li>
              ⏰ <strong>ساعات العمل:</strong> يوميًا من 10 صباحًا حتى 10 مساءً
            </li>
          </ul>
        </div>

        {/* رسالة توضيحية */}
        <div className="bg-green-50 rounded-xl p-6 border">
          <h2 className="text-xl font-bold mb-4">الدعم السريع</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            للحصول على رد أسرع، يُفضّل التواصل معنا مباشرة عبر واتساب،
            وسيتم الرد عليك في أقرب وقت ممكن.
          </p>

          <a
            href="https://wa.me/201021732703"
            target="_blank"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            تواصل عبر واتساب
          </a>
        </div>
      </div>
    </section>
  );
}
