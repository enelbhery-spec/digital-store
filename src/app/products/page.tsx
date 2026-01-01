import Image from "next/image";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-extrabold mb-10 text-center">
        منتجات البحث الذكى
      </h1>
      <h2>البحث الذكي.. رفيقك للوصول إلى المعلومة في ثوانٍ!</h2>

<p>في عالم يمتلئ بالبيانات، لم يعد التحدي في إيجاد المعلومة، بل في الوصول إليها بسرعة ودقة. من هنا انطلقت مجموعة "منتجات البحث الذكي" لدينا، لتكون الأداة التي تختصر عليك ساعات من البحث التقليدي المجهد.

ما هو البحث الذكي؟
هو نظام يعتمد على خوارزميات متطورة تفهم ما تبحث عنه فعلياً. سواء كنت تبحث عن خط ساخن لشركة، أو بيانات تقنية محددة، فإن محركنا الذكي يحلل آلاف البيانات ليقدم لك "الإجابة" وليس مجرد "روابط".

لماذا تعتمد على منتجاتنا للبحث؟
فلترة فورية: تخلص من النتائج غير الصلة والروابط المكسورة.

تحديث حي: بياناتنا ليست أرشيفية؛ نحن نحدث المعلومات لحظة بلحظة لضمان صحتها.

واجهة بسيطة (Minimalist): صممنا تجربة المستخدم لتبدأ من "مربع البحث" وتنتهي بـ "الحل" دون تشتيت.

دعم الاختصارات: محركنا يفهم الاختصارات والكلمات الدلالية ليعطيك نتائج مذهلة حتى لو لم تكتب الاسم بالكامل.

اختصر طريقك الآن
الوقت هو أغلى ما تملك، ومنتجاتنا للبحث الذكي صُممت لتهديك هذا الوقت. جرب الآن قوة البحث في منصتنا وشاهد الفرق بنفسك.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow p-6"
          >
            {/* الصورة */}
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="rounded-xl mb-4 mx-auto"
            />

            <h3 className="text-xl font-bold mb-2 text-center">
              {product.title}
            </h3>

            <p className="text-gray-600 mb-4 text-center">
              {product.description}
            </p>

            {/* زر الفتح */}
            {product.link && (
              <a
                href={product.link}
                className="block text-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                ابدا البحث
              </a>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
