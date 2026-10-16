"use client";

import { useState } from "react";

/**
 * İstemci bileşeni ("use client"): tıklamaya tepki verdiği için tarayıcıda çalışır.
 * Sayfanın geri kalanı sunucuda üretilir; yalnızca bu küçük parça JavaScript gerektirir.
 */
export function BegeniButonu() {
  const [begeni, setBegeni] = useState(0);

  return (
    <button
      type="button"
      onClick={() => setBegeni((sayi) => sayi + 1)}
      className="rounded-full border border-zinc-300 px-3 py-1 text-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
    >
      👍 {begeni}
    </button>
  );
}
