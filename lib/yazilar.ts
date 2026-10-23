/** Blog yazıları. Gerçek bir sitede veritabanından ya da bir CMS'ten gelirdi; burada basit bir dizi. */
export interface Yazi {
  slug: string; // adresteki kısım: /blog/tailwind-ile-hizli-tasarim
  baslik: string;
  ozet: string;
  icerik: string[];
  kategori: string;
  tarih: string; // YYYY-MM-DD
  okumaDakika: number;
}

export const YAZILAR: Yazi[] = [
  {
    slug: "tailwind-ile-hizli-tasarim",
    baslik: "Tailwind CSS ile Hızlı Tasarım",
    ozet: "Ayrı CSS dosyası yazmadan, sınıf adlarıyla doğrudan HTML üzerinde stil vermek.",
    icerik: [
      "Tailwind CSS, hazır yardımcı sınıflardan oluşan bir CSS kütüphanesidir. Örneğin text-3xl yazıyı büyütür, font-bold kalınlaştırır, p-4 iç boşluk verir.",
      "Bu sayede stil ile yapı aynı yerde durur; bir bileşene bakınca nasıl göründüğünü hemen anlarız.",
      "sm:, md:, lg: gibi önekler ekran genişliğine göre farklı stil vermeyi sağlar. Buna duyarlı (responsive) tasarım denir.",
    ],
    kategori: "CSS",
    tarih: "2026-10-23",
    okumaDakika: 3,
  },
  {
    slug: "nextjs-layout-nedir",
    baslik: "Next.js'te Layout Nedir?",
    ozet: "Birden fazla sayfada ortak kalan menü ve alt bilgiyi tek bir yerde tanımlamak.",
    icerik: [
      "Layout, bir klasördeki bütün sayfaları saran ortak çerçevedir. app/blog/layout.tsx dosyası, /blog ile başlayan tüm sayfalara uygulanır.",
      "Layout children adlı bir özellik alır; children, o anda açık olan sayfanın içeriğidir.",
      "Sayfalar arasında geçiş yapıldığında layout yeniden çizilmez, yalnızca children değişir. Bu yüzden menü sabit kalır ve geçiş hızlı olur.",
    ],
    kategori: "Next.js",
    tarih: "2026-10-22",
    okumaDakika: 4,
  },
  {
    slug: "dosya-tabanli-yonlendirme",
    baslik: "Dosya Tabanlı Yönlendirme",
    ozet: "Klasör adı adres olur: app/blog/page.tsx → /blog.",
    icerik: [
      "Next.js'te ayrı bir yönlendirme (router) dosyası yazmayız. app klasörü içindeki her klasör bir adres parçasıdır.",
      "Köşeli parantezli klasörler dinamik adreslerdir: app/blog/[slug]/page.tsx dosyası /blog/herhangi-bir-yazi adreslerinin hepsini karşılar.",
      "Sayfaya gelen slug değeri params içinden okunur ve hangi yazının gösterileceğine buna göre karar verilir.",
    ],
    kategori: "Next.js",
    tarih: "2026-10-21",
    okumaDakika: 3,
  },
];

export function yaziBul(slug: string): Yazi | undefined {
  return YAZILAR.find((yazi) => yazi.slug === slug);
}

export function tarihYaz(tarih: string): string {
  return new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${tarih}T12:00:00`));
}
