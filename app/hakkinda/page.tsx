import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Hakkında | Oyun Portalı" };

/** İkinci sayfa: app/hakkinda/page.tsx dosyası otomatik olarak /hakkinda adresine dönüşür (dosya tabanlı yönlendirme). */
export default function Hakkinda() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-6 py-16">
      <Link href="/" className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400">
        ← Ana sayfa
      </Link>
      <h1 className="mt-6 text-3xl font-bold">Hakkında</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Bu depo, Web Programlama dersinin haftalık uygulamaları için oluşturuldu. Next.js 16, TypeScript ve Tailwind CSS ile
        geliştiriliyor.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Bu hafta yapılan değişiklikler</h2>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-600 dark:text-zinc-400">
        <li>Varsayılan başlangıç sayfası kaldırıldı, yerine oyun listesi kondu.</li>
        <li>Oyunlar bir diziden (lib/oyunlar.ts) okunup kartlara çevriliyor.</li>
        <li>Beğeni düğmesiyle sunucu ve istemci bileşeni farkı gösterildi.</li>
        <li>Bu &quot;Hakkında&quot; sayfası eklendi; sayfa dili ve başlığı Türkçe yapıldı.</li>
      </ul>
      <p className="mt-8 text-sm text-zinc-500">
        Dönem projesi:{" "}
        <a href="https://github.com/Er4y33/qadro" className="text-indigo-600 hover:underline dark:text-indigo-400">
          Qadro
        </a>
      </p>
    </main>
  );
}
