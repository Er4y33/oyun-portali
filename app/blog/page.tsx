import type { Metadata } from "next";
import Link from "next/link";
import { YAZILAR, tarihYaz } from "@/lib/yazilar";

export const metadata: Metadata = { title: "Blog | Oyun Portalı" };

/** /blog adresi: üstte tanıtım (hero), altta son eklenen yazıların listesi */
export default function Blog() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold tracking-wider text-indigo-700 uppercase dark:bg-indigo-950 dark:text-indigo-300">
          Web Programlama Dersi
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">Modern Web Tasarımına Giriş</h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
          Geleneksel CSS dosyalarının yerine doğrudan HTML etiketleri üzerinde hızlı, duyarlı (responsive) ve modern arayüzler
          geliştiriyoruz.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-2xl font-bold">Son Eklenen Yazılar</h2>
          <span className="text-sm text-zinc-500">Toplam {YAZILAR.length} makale</span>
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {YAZILAR.map((yazi) => (
            <li key={yazi.slug}>
              <Link
                href={`/blog/${yazi.slug}`}
                className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{yazi.kategori}</span>
                <h3 className="mt-2 text-lg font-bold">{yazi.baslik}</h3>
                <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">{yazi.ozet}</p>
                <p className="mt-4 text-xs text-zinc-500">
                  {tarihYaz(yazi.tarih)} · {yazi.okumaDakika} dk okuma
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
