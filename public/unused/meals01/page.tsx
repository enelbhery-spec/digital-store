"use client";

export default function MealsProductPage() {
  const meals = [
    {
      name: "🍳 بيض بالماء بدون زيت",
      ingredients: ["3 بيضة ", "ماء", "رشة ملح (اختياري)"],
      steps: [
        "غلي الماء في مقلاة على النار",
        "كسر البيض بهدوء داخل الماء",
        "الانتظار من 2 إلى 3 دقائق حتى ينضج",
        "التقديم فورًا"
      ],
      video:
        "https://youtube.com/shorts/jN2IQ-Ozxlk"
    }
  ];

  return (
    <main style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      {/* عنوان المنتج */}
      <h1>🍽️ دليل الوجبات اليومية (فطار – غداء – عشاء)</h1>

      <p>
        منتج رقمي يضم وصفات مختارة مع طريقة التحضير وروابط فيديو توضيحية من
        يوتيوب.
      </p>

      <hr />

      {/* عرض الوجبات */}
      {meals.map((meal, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "20px"
          }}
        >
          <h2>{meal.name}</h2>

          <strong>المقادير:</strong>
          <ul>
            {meal.ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <strong>طريقة التحضير:</strong>
          <ol>
            {meal.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>

          <a
            href={meal.video}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "10px",
              color: "#0a58ca",
              fontWeight: "bold"
            }}
          >
            ▶️ شاهد فيديو الطريقة
          </a>
        </div>
      ))}

      {/* تنبيه قانوني */}
      <p style={{ fontSize: "12px", color: "gray" }}>
        ⚠️ جميع روابط الفيديو تعود لأصحابها على يوتيوب، وتم استخدامها للإرشاد فقط.
      </p>

      {/* زر الطلب */}
      <button
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          fontSize: "16px",
          backgroundColor: "#198754",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
        onClick={() =>
          window.open("https://wa.me/201021732703", "_blank")
        }
      >
        🛒 اطلب المنتج الآن
      </button>
    </main>
  );
}
