// components/PageLoader.tsx

const shimmer: React.CSSProperties = {
  background: "linear-gradient(90deg, #e8e8e8 25%, #d0d0d0 50%, #e8e8e8 75%)",
  backgroundSize: "600px 100%",
  animation: "shimmer 1.6s infinite linear",
};

export default function PageLoader({ count = 6 }: { count?: number }) {
  return (
    <div className="maxContainer py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="p-3 bg-[#F8F9FB]">
            <div className="h-[320px] w-full" style={shimmer} />
            <div className="mt-5 space-y-3">
              <div className="h-5 w-3/4 rounded" style={shimmer} />
              <div className="h-4 w-1/4 rounded" style={shimmer} />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -600px 0; }
          100% { background-position: 600px 0; }
        }
      `}</style>
    </div>
  );
}