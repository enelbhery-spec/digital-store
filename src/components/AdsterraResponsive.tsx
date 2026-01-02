"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function AdsterraResponsive() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!mounted) return null;

  // 🔑 مفاتيح Adsterra
  const DESKTOP_KEY = "71ccc427e033d5bedd03426b6b870193";
  const MOBILE_KEY = "5c5cce937b84a9f6a179ef303633843b";

  const adKey = isMobile ? MOBILE_KEY : DESKTOP_KEY;
  const width = isMobile ? 300 : 728;
  const height = isMobile ? 250 : 90;

  return (
    <div
      className="w-full flex justify-center items-center"
      style={{
        minHeight: `${height}px`, // 🔥 حجز المساحة قبل التحميل
        margin: "24px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          textAlign: "center",
        }}
      >
        {/* إعداد الإعلان */}
        <Script
          id={`adsterra-config-${adKey}`}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              atOptions = {
                'key' : '${adKey}',
                'format' : 'iframe',
                'height' : ${height},
                'width' : ${width},
                'params' : {}
              };
            `,
          }}
        />

        {/* تحميل الإعلان */}
        <Script
          src={`//www.highperformanceformat.com/${adKey}/invoke.js`}
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
}
