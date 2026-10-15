// app/loading.tsx
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Animated dots */}
        <div className="flex gap-2">
          <span className="h-3 w-3 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.3s]" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.15s]" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-blue-600" />
        </div>
        <p className="text-sm font-medium text-slate-600">Loading...</p>
      </div>
    </div>
  );
}