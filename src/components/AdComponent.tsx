'use client';

import { useEffect } from 'react';

export default function AdComponent() {
  useEffect(() => {
    const script = document.createElement('script');
    // تأكد من استخدام الرابط الصحيح الخاص بالـ Native Banner من حسابك
    script.src = "//pl28375236.effectivegatecpm.com/68452107c89d06df62ec5e7bed215ec8/invoke.js";
    script.async = true;
    script.setAttribute('data-cfasync', 'false');

    const container = document.getElementById('container-68452107c89d06df62ec5e7bed215ec8');
    if (container && !container.hasChildNodes()) {
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="my-8 w-full max-w-md mx-auto px-4">
      <div className="relative bg-white border border-gray-200 rounded-2xl p-4 shadow-sm overflow-hidden">
        {/* ملصق صغير لتمييز الإعلان بشكل قانوني واحترافي */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">محتوى مدعوم</span>
          <div className="h-1 w-10 bg-gray-100 rounded-full"></div>
        </div>

        {/* الحاوية الإعلانية مع تحديد أقصى ارتفاع لمنع الصور الضخمة */}
        <div
          id="container-68452107c89d06df62ec5e7bed215ec8"
          className="ad-container-styled min-h-[100px] flex justify-center items-center overflow-hidden rounded-xl"
        >
          {/* الإعلان سيظهر هنا */}
        </div>
      </div>

      {/* تنسيق داخلي لإجبار الصور داخل الإعلان على الالتزام بالأبعاد */}
      <style jsx global>{`
        #container-68452107c89d06df62ec5e7bed215ec8 img {
          max-width: 100% !important;
          height: auto !important;
          border-radius: 8px !important;
          margin-bottom: 8px !important;
        }
        #container-68452107c89d06df62ec5e7bed215ec8 a {
          font-family: inherit !important;
          text-decoration: none !important;
          color: #1a1a1a !important;
          font-weight: 600 !important;
          font-size: 14px !important;
        }
      `}</style>
    </div>
  );
}