import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { YAZILAR, tarihYaz, yaziBul } from "@/lib/yazilar";

/**
 * Dinamik sayfa: /blog/tailwind-ile-hizli-tasarim, /blog/nextjs-layout-nedir …
 * Köşeli parantezli [slug] klasörü adresteki değeri yakalar; değer params içinden okunur.
 */

// Build sırasında her yazı için ayrı bir statik sayfa üretilir (SSG)
export function generateStaticParams() {
  return YAZILAR.map((yazi) => ({ slug: yazi.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: `${yaziBul(slug)?.baslik ?? "Yazı bulunamadı"} | Oyun Portalı` };
}

export default async function YaziSayfasi({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const yazi = yaziBul(slug);
  if (!yazi) notFound(); // olmayan yazı → 404 sayfası

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link href="/blog" className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400">
        ← Tüm yazılar
      </Link>
      <p className="mt-8 text-xs font-semibold text-indigo-600 dark:text-indigo-400">{yazi.kategori}</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight">{yazi.baslik}</h1>
      <p className="mt-3 text-sm text-zinc-500">
        {tarihYaz(yazi.tarih)} · {yazi.okumaDakika} dk okuma
      </p>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        {yazi.icerik.map((paragraf) => (
          <p key={paragraf}>{paragraf}</p>
        ))}
      </div>
    </article>
  );
}
