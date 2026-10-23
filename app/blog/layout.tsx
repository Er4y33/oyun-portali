import Link from "next/link";

const MENU = [
  { href: "/", ad: "Ana Sayfa" },
  { href: "/blog", ad: "Blog" },
  { href: "/hakkinda", ad: "Hakkında" },
];

/**
 * Blog layout'u: /blog ile başlayan bütün sayfaları (/blog ve /blog/[slug]) saran ortak çerçeve.
 * Üstteki menü ve alttaki bilgi her blog sayfasında aynı kalır; sayfa değişince yalnızca {children} değişir.
 * Kök layout'un (app/layout.tsx) içinde çalışır: iç içe layout.
 */
export default function BlogLayout({ children }: LayoutProps<"/blog">) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/blog" className="text-lg font-bold tracking-tight">
            🎮 Oyun Portalı
          </Link>
          <ul className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {MENU.map((oge) => (
              <li key={oge.href}>
                <Link href={oge.href} className="transition hover:text-indigo-600 dark:hover:text-indigo-400">
                  {oge.ad}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-500 dark:border-zinc-800">
        Web Programlama dersi · Oyun Portalı Blog
      </footer>
    </div>
  );
}
