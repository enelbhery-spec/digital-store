"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function AdsterraResponsive() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div
      style={{
        maxWidth: isMobile ? "300px" : "728px",
        margin: "30px auto",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* إعداد الإعلان */}
      <Script
        id={`adsterra-config-${isMobile ? "mobile" : "desktop"}`}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            atOptions = {
              'key' : '${isMobile ? "MOBILE_KEY" : "DESKTOP_KEY"}',
              'format' : 'iframe',
              'height' : ${isMobile ? 250 : 90},
              'width' : ${isMobile ? 300 : 728},
              'params' : {}
            };
          `,
        }}
      />

      {/* سكربت التحميل */}
      <Script
        src="//www.highperformanceformat.com/${isMobile ? "'5c5cce937b84a9f6a179ef303633843b'" : "'71ccc427e033d5bedd03426b6b870193'"}/invoke.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
