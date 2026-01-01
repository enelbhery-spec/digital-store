"use client";


import React, { useState } from "react";

type LinkItem = {
  name: string;
  type: string;
  url: string;
};

const data: LinkItem[] = [
    /* ================== 🏦 البنوك ================== */
  {name:"البنك الأهلي المصري",type:"بنك",url:"https://www.nbe.com.eg"},
{name:"بنك مصر",type:"بنك",url:"https://www.banquemisr.com"},
{name:"البنك التجاري الدولي CIB",type:"بنك",url:"https://www.cibeg.com"},
{name:"QNB الأهلي",type:"بنك",url:"https://www.qnbalahli.com"},
{name:"بنك القاهرة",type:"بنك",url:"https://www.bdc.com.eg"},
{name:"بنك الإسكندرية",type:"بنك",url:"https://www.alexbank.com"},
{name:"بنك فيصل الإسلامي",type:"بنك",url:"https://www.faisalbank.com.eg"},
{name:"البنك العربي الأفريقي",type:"بنك",url:"https://www.aaib.com"},
{name:"HSBC مصر",type:"بنك",url:"https://www.hsbc.com.eg"},
{name:"كريدي أجريكول مصر",type:"بنك",url:"https://www.credit-agricole.eg"},
{name:"بنك التعمير والإسكان",type:"بنك",url:"https://www.hdb-egy.com"},
{name:"المصرف المتحد",type:"بنك",url:"https://www.ubeg.com"},
{name:"بنك البركة",type:"بنك",url:"https://www.albaraka.com.eg"},
{name:"بنك SAIB",type:"بنك",url:"https://www.saib.com.eg"},
{name:"بنك أبو ظبي الإسلامي",type:"بنك",url:"https://www.adib.eg"},
{name:"بنك الكويت الوطني NBK",type:"بنك",url:"https://www.nbk.com/egypt"},
{name:"بنك أبو ظبي الأول FAB",type:"بنك",url:"https://www.fabmisr.com.eg"},
{name:"بنك الاستثمار العربي",type:"بنك",url:"https://www.ai-bank.com"},
{name:"المصرف العربي الدولي",type:"بنك",url:"https://www.aib.com.eg"},
{name:"بنك قناة السويس",type:"بنك",url:"https://www.scsbank.com.eg"},
/* ================== DATA ================== */

{name:"بوابة الحكومة المصرية",type:"حكومة",url:"https://www.egypt.gov.eg"},
{name:"بوابة مصر الرقمية",type:"خدمات حكومية",url:"https://digital.gov.eg"},
{name:"مصلحة الضرائب المصرية",type:"حكومة",url:"https://www.eta.gov.eg"},
{name:"مصلحة الجمارك",type:"حكومة",url:"https://www.customs.gov.eg"},
{name:"التأمينات الاجتماعية",type:"حكومة",url:"https://www.nosi.gov.eg"},
{name:"الجهاز المركزي للتعبئة العامة والإحصاء",type:"حكومة",url:"https://www.capmas.gov.eg"},
{name:"الجهاز المركزي للتنظيم والإدارة",type:"حكومة",url:"https://caoa.gov.eg"},
{name:"الهيئة العامة للاستثمار",type:"حكومة",url:"https://www.gafi.gov.eg"},
{name:"هيئة البريد المصري",type:"حكومة",url:"https://www.egyptpost.org"},
{name:"هيئة الرقابة الإدارية",type:"حكومة",url:"https://aca.gov.eg"},
{name:"الهيئة القومية لسلامة الغذاء",type:"حكومة",url:"https://nfsa.gov.eg"},
{name:"هيئة الدواء المصرية",type:"حكومة",url:"https://www.edaegypt.gov.eg"},
{name:"الهيئة العامة للتأمين الصحي",type:"حكومة",url:"https://www.hio.gov.eg"},
{name:"المجلس الأعلى للجامعات",type:"تعليم",url:"https://scu.eg"},
{name:"بوابة الشكاوى الحكومية",type:"خدمات",url:"https://www.shakwa.eg"},
{name:"الهيئة القومية للأنفاق",type:"نقل",url:"https://www.nata.gov.eg"},
{name:"الهيئة المصرية العامة للمواصفات",type:"حكومة",url:"https://www.eos.org.eg"},
{name:"هيئة المجتمعات العمرانية",type:"إسكان",url:"https://www.newcities.gov.eg"},
{name:"هيئة الطرق والكباري",type:"نقل",url:"http://www.garb.gov.eg"},
{name:"جهاز حماية المستهلك",type:"خدمات",url:"https://www.cpa.gov.eg"},
/* ================== DATA ================== */

{name:"وزارة الداخلية",type:"وزارة",url:"https://moi.gov.eg"},
{name:"وزارة الصحة والسكان",type:"وزارة",url:"https://www.mohp.gov.eg"},
{name:"وزارة التربية والتعليم",type:"وزارة",url:"https://moe.gov.eg"},
{name:"وزارة التعليم العالي",type:"وزارة",url:"https://mohesr.gov.eg"},
{name:"وزارة الاتصالات",type:"وزارة",url:"https://www.mcit.gov.eg"},
{name:"وزارة التموين",type:"وزارة",url:"https://www.mof.gov.eg"},
{name:"وزارة العدل",type:"وزارة",url:"https://www.jp.gov.eg"},
{name:"وزارة النقل",type:"وزارة",url:"https://www.mot.gov.eg"},
{name:"وزارة الكهرباء",type:"وزارة",url:"https://www.moee.gov.eg"},
{name:"وزارة البترول",type:"وزارة",url:"https://www.petroleum.gov.eg"},
{name:"وزارة التخطيط",type:"وزارة",url:"https://mped.gov.eg"},
{name:"وزارة التضامن الاجتماعي",type:"وزارة",url:"https://www.moss.gov.eg"},
{name:"وزارة البيئة",type:"وزارة",url:"https://www.eeaa.gov.eg"},
{name:"وزارة الثقافة",type:"وزارة",url:"https://www.moc.gov.eg"},
{name:"وزارة الشباب والرياضة",type:"وزارة",url:"https://www.emys.gov.eg"},
{name:"وزارة السياحة",type:"وزارة",url:"https://www.mota.gov.eg"},
{name:"وزارة الزراعة",type:"وزارة",url:"https://www.agr-egypt.gov.eg"},
{name:"وزارة الري",type:"وزارة",url:"https://www.mwri.gov.eg"},
{name:"وزارة الطيران المدني",type:"وزارة",url:"https://www.civilaviation.gov.eg"},
{name:"وزارة التنمية المحلية",type:"وزارة",url:"https://www.mld.gov.eg"},
/* ================== ⚡ خدمات حكومية رقمية ================== */
{name:"بوابة مصر الرقمية", type:"خدمات حكومية", url:"https://digital.gov.eg"},
{name:"بوابة الحكومة المصرية", type:"خدمات حكومية", url:"https://www.egypt.gov.eg"},
{name:"بوابة الشكاوى الحكومية", type:"خدمات حكومية", url:"https://www.shakwa.eg"},
{name:"بوابة خدمات المواطنين", type:"خدمات حكومية", url:"https://www.psm.gov.eg"},
/* ================== ⚡ 🧾 ضرائب – تأمينات – استعلام ================== */
{name:"مصلحة الضرائب المصرية", type:"ضرائب", url:"https://www.eta.gov.eg"},
{name:"المنظومة الإلكترونية للفواتير", type:"ضرائب", url:"https://www.eta.gov.eg/ar/e-invoice"},
{name:"التأمينات الاجتماعية", type:"تأمينات", url:"https://www.nosi.gov.eg"},
{name:"الهيئة العامة للتأمين الصحي", type:"تأمين صحي", url:"https://www.hio.gov.eg"},
/* ================== ⚡  🚗 مرور – مركبات – رخص ================== */
{name:"النيابة العامة للمرور", type:"مرور", url:"https://ppo.gov.eg"},
{name:"خدمات المرور الإلكترونية", type:"مرور", url:"https://www.moi.gov.eg"},
{name:"الاستعلام عن المخالفات", type:"مرور", url:"https://ppo.gov.eg/webcenter/portal/PPOPortal"},
/* ================== ⚡  ⚡ مرافق (كهرباء – مياه – غاز) ================== */
{name:"الشركة القابضة لكهرباء مصر", type:"كهرباء", url:"https://www.eehc.gov.eg"},
{name:"شكاوى الكهرباء", type:"كهرباء", url:"https://www.eehc.gov.eg/complaints"},
{name:"الشركة القابضة لمياه الشرب", type:"مياه", url:"https://www.hcww.com.eg"},
{name:"الشركة المصرية للغازات الطبيعية", type:"غاز", url:"https://www.egas.com.eg"},
/* ================== ⚡  📡 اتصالات وإنترنت ================== */
{name:"المصرية للاتصالات WE", type:"اتصالات", url:"https://www.te.eg"},
{name:"فودافون مصر", type:"اتصالات", url:"https://web.vodafone.com.eg"},
{name:"أورنج مصر", type:"اتصالات", url:"https://www.orange.eg"},
{name:"اتصالات مصر", type:"اتصالات", url:"https://www.etisalat.eg"},
/* ================== ⚡  🏠 إسكان وعقارات ================== */
{name:"هيئة المجتمعات العمرانية", type:"إسكان", url:"https://www.newcities.gov.eg"},
{name:"صندوق الإسكان الاجتماعي", type:"إسكان", url:"https://www.shmff.gov.eg"},
{name:"بوابة الإسكان", type:"إسكان", url:"https://housing.gov.eg"},
/* ================== ⚡  🛒 خدمات إلكترونية عامة ================== */
{name:"بريد مصر", type:"خدمات", url:"https://www.egyptpost.org"},
{name:"جهاز حماية المستهلك", type:"خدمات", url:"https://www.cpa.gov.eg"},
{name:"الهيئة العامة للاستثمار", type:"استثمار", url:"https://www.gafi.gov.eg"},
/* ================== ⚡  🛒 🏢 تأسيس الشركات والاستثمار ================== */


];

const OneTapLinksArabic: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const results = data.filter(
    (item) =>
      item.name.includes(query) ||
      item.type.includes(query)
  );

  return (
    <div style={styles.container} dir="rtl">
    <h1 style={styles.title}>🔍 الوصول السريع للصفحات الرئيسية للمواقع الاكترونية </h1>
      <br/>

      <input
        type="text"
        placeholder="اكتب اسم البنك، الوزارة، الجامعة..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.input}
      />
<p> اختصر وقتك وجهدك؛ محرك بحثنا الذكي يضع بين يديك الروابط الرسمية والمباشرة لكافة  الصفخات الرئيسية البنوك والمصالح الحكومية والخدمية  وعروض حصرية للمتاجر الاكترونية ومعطم ماتحتاجة لقضاء اعمالك  بضغطة واحدة. ابحث الآن وانتقل إلى وجهتك فوراً دون عناء.</p>

      <div>
        {query &&
          results.map((item, index) => (
            <div
              key={index}
              style={styles.card}
              onClick={() => window.open(item.url, "_blank")}
            >
              <div style={styles.name}>{item.name}</div>
              <div style={styles.type}>{item.type}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OneTapLinksArabic;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    background: "#f4f6f8",
    padding: "16px",
    fontFamily: "Tahoma, Arial, sans-serif"
  },
  title: {
    textAlign: "center",
    marginBottom: "14px"
  },
  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    fontSize: "16px",
    marginBottom: "15px",
    textAlign: "right"
  },
  card: {
    background: "#fff",
    padding: "12px",
    borderRadius: "10px",
    marginBottom: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,.1)",
    cursor: "pointer"
  },
  name: {
    fontWeight: "bold",
    fontSize: "16px"
  },
  type: {
    fontSize: "13px",
    color: "#666"
  }
};
