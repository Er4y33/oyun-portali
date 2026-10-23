/**
 * Yükleniyor ekranı: bir sayfa hazırlanırken Next.js bunu otomatik olarak gösterir.
 * Dosyanın adı (loading.tsx) yeterli; hiçbir yerde içe aktarılmaz.
 */
export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center py-32" role="status" aria-label="Yükleniyor">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-300 border-t-indigo-600" />
    </div>
  );
}
