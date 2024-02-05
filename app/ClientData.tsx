"use client";

import { useEffect, useState } from "react";

export default function ClientData() {
  const [data, setData] = useState<string | null>(null);
  useEffect(() => {
    const t = setInterval(() => {
      setData(new Date().toISOString());
    }, 1);
    return () => clearInterval(t);
  }, []);
  return <code>Time from your browser: {data}</code>;
}
