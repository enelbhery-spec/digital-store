'use client'; // ضروري جداً لأننا نستخدم useEffect و DOM

import { useEffect } from 'react';

export default function AdComponent() {
  useEffect(() => {
    // التأكد من أن الكود يعمل فقط في جانب العميل (Browser)
    const script = document.createElement('script');
    script.src = "//pl28274737.highratecpm.com/68452107c89d06df62ec5e7bed215ec8/invoke.js";
    script.async = true;
    script.setAttribute('data-cfasync', 'false');

    // البحث عن المكان المخصص لوضع الإعلان
    const container = document.getElementById('container-68452107c89d06df62ec5e7bed215ec8');
    if (container && !container.hasChildNodes()) {
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="my-10 flex flex-col items-center justify-center">
      {/* نص اختياري صغير فوق الإعلان */}
      <span className="text-gray-400 text-xs mb-2">إعلان مُقترح</span>

      {/* الحاوية التي سيظهر فيها إعلان Native Banner */}
      <div id="container-68452107c89d06df62ec5e7bed215ec8"></div>
    </div>
  );
}