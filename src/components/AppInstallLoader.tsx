"use client";

import { useEffect, useState } from "react";

export default function AppInstallLoader({
  children,
  duration = 5, // 5 دقائق = 5 ثانية
}: {
  children: React.ReactNode;
  duration?: number;
}) {
  const [seconds, setSeconds] = useState(duration);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setDone(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (done) return <>{children}</>;

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "linear-gradient(135deg, #16a34a, #15803d)",
        color: "#fff",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 20,
      }}
    >
      <h1 style={{ fontSize: 26, fontWeight: "bold" }}>
        📲 جاري تثبيت التطبيق
      </h1>

      <p style={{ marginTop: 15, fontSize: 18 }}>
        يرجى عدم إغلاق الصفحة
      </p>

      <div
        style={{
          marginTop: 25,
          fontSize: 22,
          background: "rgba(255,255,255,0.2)",
          padding: "12px 25px",
          borderRadius: 12,
        }}
      >
        ⏳ {minutes}:{secs.toString().padStart(2, "0")}
      </div>

      <p style={{ marginTop: 30, fontSize: 14, opacity: 0.9 }}>
        بعد اكتمال التثبيت سيتم فتح المنتج تلقائيًا
      </p>
    </div>
  );
}
