import Link from "next/link";
import { BegeniButonu } from "./components/BegeniButonu";
import { OYUNLAR } from "@/lib/oyunlar";

/** Ana sayfa (sunucu bileşeni): oyun listesi build sırasında statik olarak üretilir (SSG). */
export default function Home() {
  const hazirOyunSayisi = OYUNLAR.filter((oyun) => oyun.durum === "hazir").length;

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-16">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">🎮 Oyun Portalı</h1>
        <nav className="flex gap-4 text-sm font-medium text-indigo-600 dark:text-indigo-400">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/hakkinda" className="hover:underline">
            Hakkında
          </Link>
        </nav>
      </header>

      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Web Programlama dersi için hazırlanan küçük tarayıcı oyunları.{" "}
        {hazirOyunSayisi === 0 ? "Oyunlar haftalar içinde tek tek eklenecek." : `${OYUNLAR.length} oyundan ${hazirOyunSayisi} tanesi oynanabilir.`}
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {OYUNLAR.map((oyun) => (
          <li key={oyun.ad} className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
            <div className="flex items-start justify-between">
              <span className="text-4xl">{oyun.emoji}</span>
              <span
                className={
                  oyun.durum === "hazir"
                    ? "rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-400"
                    : "rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold text-zinc-500 dark:bg-zinc-800"
                }
              >
                {oyun.durum === "hazir" ? "Hazır" : "Yakında"}
              </span>
            </div>
            <h2 className="mt-3 text-lg font-semibold">{oyun.ad}</h2>
            <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400">{oyun.tur}</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{oyun.aciklama}</p>
            <div className="mt-4">
              <BegeniButonu />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
