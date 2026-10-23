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

      {/* BLOG YAZI ALANI */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-2xl font-bold">Son Eklenen Yazılar</h2>
          <span className="text-sm text-zinc-500">Toplam {YAZILAR.length} makale</span>
        </div>

        {/* Grid yapısı: telefonda 1, tablette 2, geniş ekranda 3 sütun */}
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {YAZILAR.map((yazi) => (
            <li key={yazi.slug}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                {/* Görsel alan: gerçek bir resim yerine renkli bir blok */}
                <div className={`flex h-48 items-center justify-center text-6xl ${yazi.renk}`}>{yazi.simge}</div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2 text-xs text-zinc-500">
                    <span className="rounded bg-zinc-100 px-2.5 py-0.5 font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      {yazi.kategori}
                    </span>
                    <span>•</span>
                    <time dateTime={yazi.tarih}>{tarihYaz(yazi.tarih)}</time>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{yazi.baslik}</h3>
                  <p className="mb-4 flex-1 text-sm text-zinc-600 dark:text-zinc-400">{yazi.ozet}</p>
                  <Link
                    href={`/blog/${yazi.slug}`}
                    className="text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    Yazıyı Oku →
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
