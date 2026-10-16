/** Portaldaki oyunların listesi. Sayfa bu diziyi döngüyle (map) kartlara çevirir. */
export interface Oyun {
  ad: string;
  emoji: string;
  tur: string;
  aciklama: string;
  durum: "hazir" | "yakinda";
}

export const OYUNLAR: Oyun[] = [
  { ad: "XOX", emoji: "❌", tur: "Strateji", aciklama: "İki kişilik klasik üçte üç.", durum: "yakinda" },
  { ad: "Yılan", emoji: "🐍", tur: "Arcade", aciklama: "Yemleri topla, kuyruğuna çarpma.", durum: "yakinda" },
  { ad: "Hafıza Kartları", emoji: "🃏", tur: "Bulmaca", aciklama: "Eşleri bul, en az hamlede bitir.", durum: "yakinda" },
  { ad: "Tetris", emoji: "🧱", tur: "Bulmaca", aciklama: "Blokları diz, satırları temizle.", durum: "yakinda" },
];
