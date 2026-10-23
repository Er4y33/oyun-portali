# Oyun Portalı

Web Programlama dersi haftalık uygulamaları.

## Haftalar

- **1. Hafta:** İlk Git deposu
- **2. Hafta:** Next.js kurulumu ve ilk değişiklikler
  - Varsayılan sayfa yerine oyun listesi (`app/page.tsx`, veriler `lib/oyunlar.ts`)
  - Yeni sayfa: `/hakkinda` (`app/hakkinda/page.tsx`)
  - İstemci bileşeni örneği: beğeni düğmesi (`app/components/BegeniButonu.tsx`)
  - Sayfa dili ve başlığı Türkçe

- **3. Hafta:** Blog ve iç içe layout
  - `app/blog/layout.tsx`: /blog altındaki tüm sayfalara ortak menü ve alt bilgi
  - `app/blog/page.tsx`: tanıtım bölümü ve yazı listesi (`/blog`)
  - `app/blog/[slug]/page.tsx`: dinamik yazı sayfası (`/blog/nextjs-layout-nedir`), olmayan yazıda 404
  - Ana sayfaya Blog bağlantısı

## Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

## Dönem Projesi

Qadro, oyunlaştırılmış spor eşleştirme uygulaması:
- Depo: https://github.com/Er4y33/qadro
- Canlı site: https://qadro-three.vercel.app