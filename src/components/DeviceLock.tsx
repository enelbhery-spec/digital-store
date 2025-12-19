"use client";

import { useEffect, useState } from "react";

export default function DeviceLock({
  children,
}: {
  children: React.ReactNode;
}) {
  const [allowed, setAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    // بصمة بسيطة للجهاز
    const fingerprint =
      navigator.userAgent +
      screen.width +
      screen.height +
      navigator.language;

    const saved = localStorage.getItem("device_fingerprint");

    if (!saved) {
      // أول جهاز
      localStorage.setItem("device_fingerprint", fingerprint);
      setAllowed(true);
    } else if (saved === fingerprint) {
      // نفس الجهاز
      setAllowed(true);
    } else {
      // جهاز مختلف
      setAllowed(false);
    }
  }, []);

  if (allowed === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        ⏳ جاري التحقق من الجهاز...
      </div>
    );
  }

  if (!allowed) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-600">
            🔒 الوصول مرفوض
          </h2>
          <p className="text-gray-600">
            هذا الرابط تم تفعيله على جهاز آخر
            <br />
            ولا يمكن استخدامه على أكثر من جهاز
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
