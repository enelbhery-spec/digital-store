"use client";

type Meal = {
  id: string;
  title: string;
  ingredients: string;
  steps: string;
  youtubeUrl: string;
};

type MealSection = {
  name: string;
  meals: Meal[];
};

const mealData: MealSection[] = [
  {
    name: "🍳 وجبات الفطار",
    meals: [
      {
        id: "breakfast-1",
        title: "   1 - بيض بالماء بدون زيت",
        ingredients: "3 بيض – ماء – رشة ملح",
        steps:
          "غلي الماء، كسر البيض بهدوء، تركه 2–3 دقائق حتى النضج.",
        youtubeUrl: "https://youtube.com/shorts/jN2IQ-Ozxlk",
      },
      {
        id: "breakfast-2",
        title: " 2 -فول مصري بالطماطم ",
        ingredients: "فول – طماطم – ثوم – بصل -  كمون",
        steps:
          "تشويح الثوم، إضافة الطماطم ثم الفول والتقليب حتى يتجانس.",
        youtubeUrl: "https://www.youtube.com/shorts/FyUxz7DstxQ?feature=share",
      },
      {
        id: "breakfast-3",
        title: " 3 -  بيض بالطماطم  والجبنة الموتزريلا   ",
        ingredients: "يبض - ملخ وفلفل - طماطم- جبنه موزريلا- بقدونس",
        steps:
          "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://www.youtube.com/shorts/1Tzbre7XbWA?feature=share",
      },
      {
        id: "breakfast-4",
        title: " 4 -بيض بالطماطم البيض بالطريقة دي فعلا-   ",
        ingredients: "يبض - توابل - طماطم- جبنه موزريلا- بقدونس",
        steps:
          "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://www.youtube.com/shorts/Irzr49HyNjI?feature=share",
      },
     {
        id: "breakfast-5",
        title: " 5 -فطائر ساخنة وسريعة بدون فرن بدون عجن   ",
        ingredients: "يبض - توابل - دقيق-حليب- خميرة- بطاطس - بقدونس",
        steps:
          "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://www.youtube.com/shorts/E0oybMKW_ZE?feature=share",
      },
     {
        id: "breakfast-6",
        title: " 6 -  طبق يعجب الجميع  - بيض وبطاطس و دجاج فلييه   ",
        ingredients: "يبض - دجاج فليه - دقيق-حليب- فللف احمر- بطاطس - بقدونس",
        steps:
          "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://youtu.be/rm_9cPXrv4A",
      },
     {
        id: "breakfast-7",
        title: " 7 -  طبق يعجب الجميع  - بيض وبطاطس و دجاج فلييه   ",
        ingredients: "يبض - دجاج فليه - دقيق-حليب- فللف احمر- بطاطس - بقدونس",
        steps:
          "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://youtu.be/rm_9cPXrv4A",
      },
     {
        id: "breakfast-8",
        title: " 8 -  كيك الشوفان بدون دقيق او زيت صحى ولذيذ  ",
        ingredients: "يبض - شوقان  - حليب -  موز - سكر وفانيليا - شيلكولاته ",
        steps:
          "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://www.youtube.com/shorts/fBbGbLbiJ9M?feature=share",
      },
     {
        id: "breakfast- 9",
        title: " 9 -  كيك الشوفان بدون دقيق او زيت صحى ولذيذ  ",
        ingredients: "يبض - شوقان  - حليب -  موز - سكر وفانيليا - شيلكولاته ",
        steps:
          "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://www.youtube.com/shorts/fBbGbLbiJ9M?feature=share",
      },
  {
        id: "breakfast- 10",
        title: " 10 -  كيك الشوفان بدون دقيق او زيت صحى ولذيذ  ",
        ingredients: "يبض - شوقان  - حليب -  موز - سكر وفانيليا - شيلكولاته ",
        steps:
          "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://www.youtube.com/shorts/fBbGbLbiJ9M?feature=share",
      },

    ],
  },
  {
    name: "🍽️ وجبات الغداء",
    meals: [
      {
        id: "lunch- 1",
        title: "1 - أرز أبيض سادة",
        ingredients: "أرز – ماء – زيت – ملح",
        steps: "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://www.youtube.com/shorts/U6JZUbWUQok?feature=share",
      },
      {
        id: "lunch-2",
        title: " 2 -فراغ متبلة مع الرز البسمتى ",
        ingredients: "فراخ – ارز بسمتى  – توابل  – بصل وطماطم ",
        steps: "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://youtu.be/rl7FixyN0h8",
      },
      {
        id: "lunch-3",
        title: " 3 - أرز بسمتى احلى من المطاعم ",
        ingredients: "أرز بسمتى  – بصل وطماطم  – توابل  – ",
        steps: "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://www.youtube.com/shorts/nzRkiLTGCXY?feature=share",
      },
      {
        id: "lunch-4",
        title: "4 - صينية سمك شخرم وارز صيدية",
        ingredients: "سمك  –توابل  – خلطة للسمك  – ارز ",
        steps: "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://youtu.be/Z9gzZq8sQiQ?list=PLIzldAfqPAk778vQN7cK5eSrEqUDu1PTz",
      },
      {
        id: "lunch-5",
        title: "5 -   صنية فراخ بالتتبيلة ولااطعم من كده ",
        ingredients: "فراغ - تتبلة  - بطاطس  - ",
        steps: "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://youtu.be/SkcdATVLCX4?list=PLIzldAfqPAk778vQN7cK5eSrEqUDu1PTz",
      },
      {
        id: "lunch-6",
        title: " 6 - اصابع الفراخ المقرمشة  ",
        ingredients: "فراخ بانية – كورن فلبكس – توابل – 6 ",
        steps: "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://www.youtube.com/shorts/IE3CuVyv49s?feature=share",
      },
      {
        id: "lunch-7",
        title: " 7 - احلى مكرونة الخضار  ",
        ingredients: "مكرونة  - بصل- فلفل الوان - فص ثوم- بصل - طماطم  ",
        steps: "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://www.youtube.com/shorts/9NUOx5Mi2hc?feature=share",
      },
      {
        id: "lunch-8",
        title: " 8 - مكرونة بالبشاميل  روعة ",
        ingredients: " المكونات بالفيديو وتفاصيل كثير",
        steps: "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://youtu.be/QHMsZG1-Ibc",
      },
      {
        id: "lunch-9",
        title: " 9 - كباب المشوي و سر طعم الشوي الرهييب",
        ingredients: "المكونات بالفيديو وتفاصيل كثير",
        steps: "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://www.youtube.com/shorts/jPw5AUCL-HM?feature=share",
      },
      {
        id: "lunch-10",
        title: "10 - كفته مشوية في الفرن ",
        ingredients: "المكونات بالفيديو وتفاصيل كثير",
        steps: "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://www.youtube.com/shorts/mFQnKHH9pKg?feature=share",
      },
    ],
  },
  {
    name: "🌙 وجبات العشاء",
    meals: [
      {
        id: "dinner-1",
        title: "1 - وصفه عشاء اقتصاديه بدون لحمه أو فراخ",
        ingredients: "المكونات بالفيديو وتفاصيل كثير",
        steps: "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://youtu.be/j1mp6Id47w4",
      },
      {
        id: "dinner-2",
        title: " 2 - عشاء تونة لذيذ ولا اطعم ",
        ingredients: "المكونات بالفيديو وتفاصيل كثير",
        steps: "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://www.youtube.com/shorts/UziRWwZqefA?feature=share",
      },
      {
        id: "dinner-3",
        title: "3 -عشاء دايت  لذيذ",
        ingredients: "المكونات بالفيديو وتفاصيل كثير",
        steps: "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://www.youtube.com/shorts/iKLE0ZoLT_8?feature=share",
      },
      {
        id: "dinner-4",
        title: "4 - عشاء سخن ومقرمش ف دقيقتين",
        ingredients: "المكونات بالفيديو وتفاصيل كثير",
        steps: "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو.",
        youtubeUrl: "https://www.youtube.com/shorts/i0jvrmNAuRI?feature=share",
      },
      {
        id: "dinner-5",
        title: " 5 - اسرع والذ عشاء خفيف وعلى اد الايد",

        ingredients: "المكونات بالفيديو وتفاصيل كثير",
        steps: "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو",
        youtubeUrl: "https://www.youtube.com/shorts/i4hpSL_e4vs?feature=share",
      },
      {
        id: "dinner-6",
        title: "6 - للفطار او العشاء بطاطس بالبيض المتزريلا  ",
        ingredients: "المكونات بالفيديو وتفاصيل كثير",
        steps: "طريقة التحضير سريعة وسهلة ووجبه رائعة شهاهد الفيديو",
        youtubeUrl: "https://www.youtube.com/shorts/Pvibopfjv8g?feature=share",
      },




    ],
  },

];

export default function MealsProductPage() {
  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h1>🍽️ دليل الوجبات اليومية</h1>

      {/* القوائم المنسدلة */}
      {mealData.map((section, index) => (
        <details
          key={index}
          style={{
            marginTop: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          <summary
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {section.name}
          </summary>

          <ul style={{ marginTop: "10px" }}>
            {section.meals.map((meal) =>(
              <li key={meal.id} style={{ marginBottom: "6px" }}>
                <a href={`#${meal.id}`} style={{ color: "#2563eb" }}>
                  {meal.title}
                </a>
              </li>
            ))}
          </ul>
        </details>
      ))}

      {/* عرض الوجبات */}
      {mealData.map((section) =>
        section.meals.map((meal) => (
          <div
            key={meal.id}
            id={meal.id}
            style={{
              marginTop: "40px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <h3>{meal.title}</h3>
            <p>
              <strong>المقادير:</strong> {meal.ingredients}
            </p>
            <p>
              <strong>طريقة التحضير:</strong> {meal.steps}
            </p>

            <a
              href={meal.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                background: "#e11d48",
                color: "#fff",
                padding: "8px 14px",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              ▶️ مشاهدة فيديو التحضير
            </a>
            {/* تنبيه قانوني */}
          <p style={{ fontSize: "12px", color: "gray" }}>
        ⚠️ جميع روابط الفيديو تعود لأصحابها على يوتيوب، وتم استخدامها للإرشاد فقط.
         </p>
          </div>

        ))
      )}
    </div>
  );
}
