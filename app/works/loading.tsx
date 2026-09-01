export default function WorksLoading() {
  return (
    <div className="min-h-screen bg-white text-black font-sans relative overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00AEEF]/4 rounded-full blur-[200px]" />
      </div>

      {/* Page Title skeleton */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-32 sm:pt-36 lg:pt-40 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00AEEF]/15 bg-[#00AEEF]/5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
          <span className="w-16 h-2 bg-black/5 rounded" />
        </div>
        <div className="h-12 sm:h-14 lg:h-16 w-64 sm:w-80 mx-auto bg-black/5 rounded-xl animate-pulse" />
        <div className="mt-4 h-4 w-96 max-w-full mx-auto bg-black/5 rounded-lg animate-pulse" />
      </section>

      {/* Filter Tags skeleton */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-10">
        <div className="flex flex-wrap justify-center gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-16 h-7 bg-black/5 rounded-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
          ))}
        </div>
      </section>

      {/* Projects Grid skeleton */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-black/[0.06] shadow-sm" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-full h-52 sm:h-64 bg-black/5 animate-pulse" />
              <div className="p-5 sm:p-6 space-y-3">
                <div className="h-5 w-48 bg-black/5 rounded-lg animate-pulse" />
                <div className="h-3 w-full bg-black/5 rounded animate-pulse" />
                <div className="h-3 w-3/4 bg-black/5 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
