import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-bl from-green-600 via-green-500 to-emerald-500 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              البحث الذكى الرقمى
              <br />
              <span className="text-yellow-300">
                استخدم البحث فورًا
              </span>
            </h1>

            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              نوفر لك خدمات ومنتجات رقمية مجانية وسريعة.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/products"
                className="bg-white text-green-600 px-7 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
              >
                تصفح التطبيقات
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              {["تسليم فوري", "بدون تسجيل", "دعم واتساب", "منتجات موثوقة"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur rounded-lg py-2 text-center font-semibold"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Card */}
          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-800">
              <h3 className="text-xl font-bold mb-4">
                كيف يعمل المتجر؟
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>✔ اختر التطبيق المناسب</li>
                <li>✔ اضغط على فتح التطبيق</li>
                <li>✔ بدون دفع – مجانًا</li>
                <li>✔ استخدم البحث فورًا</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SMART SEARCH ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Smart Search – محرك البحث الذكي
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            محرك بحث ذكي للوصول السريع إلى الخدمات والتطبيقات الرقمية
            داخل موقع واحد بنتائج دقيقة وسهلة.
          </p>

          <Link
            href="/smart-search"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition"
          >
            استخدم Smart Search الآن
          </Link>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            ماذا نقدم؟
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "منتجات رقمية جاهزة",
                desc: "ملفات وأدوات قابلة للاستخدام الفوري",
              },
              {
                title: "استخدام فوري",
                desc: "فتح التطبيق مباشرة بدون تعقيد",
              },
              {
                title: "دعم واتساب",
                desc: "تواصل مباشر وسريع",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-3 text-green-600">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3 PRODUCTS ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 px-4">

          {/* Product 1 */}
          <div className="bg-white rounded-xl border p-4 shadow hover:shadow-md transition">
            <Image
              src="/products/hotline-guide.png"
              alt="تطبيق بحث الخط الساخن"
              width={300}
              height={160}
              className="object-contain"
            />
            <h3 className="font-bold text-lg mb-2">
              بحث الخط الساخن – اتصال مباشر
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              الوصول السريع لأرقام الطوارئ والبنوك والخدمات الحكومية.
            </p>
            <Link href="/delivery/hotline" className="text-green-600 font-semibold">
              عرض التطبيق →
            </Link>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-xl border p-4 shadow hover:shadow-md transition">
            <Image
              src="/products/egyptstores.png"
              alt="تطبيق متاجر إلكترونية"
              width={300}
              height={160}
              className="mx-auto object-contain mb-4"
            />
            <h3 className="font-bold text-lg mb-2">
              العروض الحصرية للمتاجر الإلكترونية
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              متابعة العروض والخصومات من مكان واحد.
            </p>
            <Link href="/delivery/egyptStores" className="text-green-600 font-semibold">
              عرض التطبيق →
            </Link>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-xl border p-4 shadow hover:shadow-md transition">
            <Image
              src="/products/ComputerStores.png"
              alt="متاجر أجهزة اللابتوب"
              width={300}
              height={160}
              className="mx-auto object-contain mb-4"
            />
            <h3 className="font-bold text-lg mb-2">
              متاجر أجهزة اللابتوب وقطع الغيار
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              أفضل متاجر بيع أجهزة الكمبيوتر وقطع الغيار.
            </p>
            <Link href="/delivery/ComputerStores" className="text-green-600 font-semibold">
              عرض التطبيق →
            </Link>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-green-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          جاهز تبدأ؟
        </h2>

        <Link
          href="/products"
          className="bg-white text-green-600 px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
        >
          ابدأ بتصفح التطبيقات
        </Link>
      </section>

    </main>
  );
}
