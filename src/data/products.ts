export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: "EGP"; // نوع العملة (جنيه مصري)
  whatsappText: string;
  link?: string; // رابط المنتج بعد الشراء
};

export const products: Product[] = [
  {
    id: 1,
    title: "دليل الخطوط الساخنة – اتصال مباشر",
    description: "الوصول السريع لأرقام البنوك والجهات الرسمية",
    price: 25,
    currency: "EGP",
    whatsappText: "أريد شراء دليل الخطوط الساخنة",

  },
];
